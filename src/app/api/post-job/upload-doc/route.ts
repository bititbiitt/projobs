import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mime, data, blobUri, jobId, tenantId, uploadedBy } = body as { name?: string; mime?: string; data?: string; blobUri?: string; jobId?: string; tenantId?: string; uploadedBy?: string };

    const buffer = data ? Buffer.from(data, 'base64') : Buffer.alloc(0);
    const fileHash = data ? crypto.createHash('sha256').update(buffer).digest('hex') : null;
    const fileSize = buffer.length || null;

    try {
      const mod = await import('@prisma/client');
      const prisma = new mod.PrismaClient();

      // create job_document minimal record
      const doc = await prisma.job_document.create({
        data: {
          tenant_id: tenantId ?? null,
          job_id: jobId ?? null,
          file_name: name ?? null,
          current_blob_uri: blobUri ?? null,
          current_version_num: 1,
          uploaded_by: uploadedBy ?? null,
        }
      });

      // create version linked to the document
      const version = await prisma.job_document_version.create({
        data: {
          doc_id: doc.id,
          version_num: 1,
          blob_uri: blobUri ?? null,
          file_hash: fileHash ?? null,
          file_type: mime ?? null,
          file_size: fileSize ?? null,
          ocr_used: mime === 'application/pdf',
        }
      });

      // update document to reflect current version
      await prisma.job_document.update({ where: { id: doc.id }, data: { current_version_num: version.version_num, current_blob_uri: version.blob_uri } });

      try { await prisma.$disconnect(); } catch (e) {}

      return NextResponse.json({ ok: true, jobDocumentId: doc.id, versionId: version.id });
    } catch (e) {
      return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
