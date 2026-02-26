import { NextResponse } from 'next/server';
import mammoth from 'mammoth';
import pdfParse from 'pdf-parse';
import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { promisify } from 'util';
import child_process from 'child_process';
const exec = promisify(child_process.exec);

// simple id generator for parse items
const genId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mime, data, versionId } = body as { name: string; mime: string; data: string; versionId?: string };
    const b = Buffer.from(data, 'base64');
    const lower = String(name || '').toLowerCase();

    let text = '';
    let html = '';

    if (lower.endsWith('.docx') || mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const result = await mammoth.convertToHtml({ buffer: b });
      html = result.value;
      text = stripHtml(result.value);
    } else if (lower.endsWith('.pdf') || mime === 'application/pdf') {
      const pdf = await pdfParse(b as any);
      text = pdf.text || '';
    } else {
      // fallback: try to decode as utf8 text
      text = b.toString('utf8');
    }

    // For PDFs, run OCR automatically (preferred over raw extracted text when available)
    let finalText = text || html || '';
    if (mime === 'application/pdf' || lower.endsWith('.pdf')) {
      try {
        const ocrText = await tryOcrPdf(b);
        if (ocrText && ocrText.trim().length > 0) {
          finalText = ocrText;
        }
      } catch (e) {
        // ignore OCR failure and continue with existing extracted text
      }
    }

    // run rule-based parser on extracted text/html
    const parsed = parseTextToQuestions(finalText || html || '');

    // compute overall confidence (average of item confidences)
    const confidence = parsed.length === 0 ? 0 : Math.max(0, Math.min(1, parsed.reduce((s, p) => s + (p.__confidence||0.7), 0) / parsed.length));

    // attempt to persist parse result in DB if Prisma is available
    let savedId: string | null = null;
    try {
      const mod = await import('@prisma/client');
      const prisma = new mod.PrismaClient();

      // if no versionId provided, create a job_document_version record (minimal) so results can be linked
      let targetVersionId = versionId ?? null;
      if (!targetVersionId) {
        try {
          const fileHash = crypto.createHash('sha256').update(b).digest('hex');
          const created = await prisma.job_document_version.create({
            data: {
              doc_id: null,
              version_num: 1,
              blob_uri: null,
              file_hash: fileHash,
              file_type: mime ?? null,
              file_size: b.length,
              ocr_used: mime === 'application/pdf',
            }
          });
          targetVersionId = created.id;
        } catch (inner) {
          // ignore version creation failure, continue to try to save parse result without version link
        }
      }

      const rec = await prisma.job_document_parse_result.create({
        data: {
          version_id: targetVersionId ?? null,
          parsed_data: parsed,
          confidence: confidence || undefined,
          parse_status: parsed.length > 0 ? 'ok' : 'partial',
          model_version: 'rule-v1'
        }
      });
      savedId = rec.id;
      try { await prisma.$disconnect(); } catch(e){}
    } catch (e) {
      // Prisma not available or DB error — ignore but keep working
    }

    return NextResponse.json({ ok: true, parsed, confidence, parseResultId: savedId, text, html });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// RULE-BASED PARSER
function parseTextToQuestions(raw: string) {
  const out: any[] = [];
  const blocks = raw.split(/\n\s*\n+/).map(b => b.trim()).filter(Boolean).slice(0, 300);

  for (const blk of blocks) {
    const lines = blk.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // header / question candidate is first line
    const first = lines[0];
    // detect options in following lines
    const optionLines = lines.slice(1).filter(l => /^([\-\u2022\*\dA-Za-z])[\).\-\s]/.test(l) || /^\s*[-•*]/.test(l));
    const options = optionLines.length > 0 ? optionLines.map(l => l.replace(/^([\-\u2022\*]|\d+[\).]|[A-Za-z][\).])\s*/,'').trim ? l.replace(/^([\-\u2022\*]|\d+[\).]|[A-Za-z][\).])\s*/,'').trim() : l) : [];

    // infer type
    let type: string = 'text';
    let confidence = 0.7;

    const lower = blk.toLowerCase();
    if (options.length >= 1) {
      // if options present and look like checkboxes (multiple markers) -> checkbox else radio
      const multiHints = optionLines.some(l => /checkbox|multiple/i.test(l) || /choose all/i.test(blk));
      type = multiHints ? 'checkbox' : 'radio';
      confidence = 0.85;
    } else if (/\bemail\b|@/.test(lower)) {
      type = 'email'; confidence = 0.95;
    } else if (/\bphone\b|tel\b|\(\d{3}\)\s*\d{3}-\d{4}|\b\d{3}[\s.-]?\d{3}[\s.-]?\d{4}\b/.test(lower)) {
      type = 'phone'; confidence = 0.9;
    } else if (/\b(date|dob|birth)\b|\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/.test(lower)) {
      type = 'date'; confidence = 0.9;
    } else if (first.length > 120 || blk.split(/[\.\?\!]/).length > 3) {
      type = 'textarea'; confidence = 0.75;
    } else if (/\?$/.test(first) || /^do you |^have you |^are you |^please provide /i.test(first)) {
      type = 'text'; confidence = 0.8;
    }

    // detect required
    const required = /\*|required|must provide|mandatory/i.test(blk);

    // generate label (strip numbering)
    const label = first.replace(/^\s*(?:\d+[:.)\-]?|[A-Za-z][\).\-]?|[\-\u2022\*])\s*/, '').trim();

    const q: any = { id: genId(), label: label || first, type, options: options.length ? options : undefined, required, category: 'job', __confidence: confidence };
    out.push(q);
  }

  return out;
}

function looksLikeGarbled(s: string) {
  if (!s) return true;
  const cleaned = s.replace(/\s+/g, '');
  if (cleaned.length < 120) return true; // too short
  // compute fraction of non-alphanumeric (excluding common punctuation)
  const nonAlpha = (s.match(/[^\w\s\p{P}]/gu) || []).length;
  const ratio = nonAlpha / Math.max(1, s.length);
  return ratio > 0.15; // heuristic
}

async function tryOcrPdf(buffer: Buffer) {
  // writes buffer to temp file, tries pdftoppm -> tesseract pipeline or ImageMagick -> tesseract
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocr-'));
  const pdfPath = path.join(tmpDir, 'doc.pdf');
  fs.writeFileSync(pdfPath, buffer);
  const outPrefix = path.join(tmpDir, 'page');
  try {
    // try pdftoppm
    try {
      await exec(`pdftoppm -png ${escapePath(pdfPath)} ${escapePath(outPrefix)}`);
    } catch (e) {
      // fallback to imagemagick 'magick' or 'convert'
      try {
        await exec(`magick -density 300 ${escapePath(pdfPath)} ${escapePath(outPrefix)}.png`);
      } catch (e2) {
        try {
          await exec(`convert -density 300 ${escapePath(pdfPath)} ${escapePath(outPrefix)}.png`);
        } catch (e3) {
          throw new Error('No PDF->PNG tool available');
        }
      }
    }

    // collect generated png files
    const files = fs.readdirSync(tmpDir).filter(f => f.endsWith('.png')).map(f => path.join(tmpDir, f)).sort();
    if (files.length === 0) throw new Error('No images produced for OCR');

    let fullText = '';
    for (const img of files) {
      try {
        // run tesseract to stdout
        const { stdout } = await exec(`tesseract ${escapePath(img)} stdout -l eng`);
        fullText += '\n\n' + stdout;
      } catch (e) {
        // tesseract failed for this image, continue
      }
    }

    // cleanup
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
    return fullText.trim();
  } catch (err) {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
    throw err;
  }
}

function escapePath(p: string) {
  // simple quoting for paths with spaces
  if (p.indexOf(' ') >= 0) return `"${p}"`;
  return p;
}
