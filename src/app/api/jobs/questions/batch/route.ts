import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

type IncomingQuestion = {
  clientId?: string;
  question_text: string;
  input_type: string;
  category?: string | null;
  order_index?: number | null;
  form_options?: any | null;
  is_required?: boolean;
  source_type?: string | null;
  source_doc_id?: string | null;
};

function stripHtml(s: string) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jobId: string | null = body.jobId ?? null;
    const tenantId: string | null = body.tenantId ?? null;
    const questions: IncomingQuestion[] = Array.isArray(body.questions) ? body.questions : [];

    if (!questions.length) return NextResponse.json({ ok: false, error: 'no questions provided' }, { status: 400 });

    // Allowed input types
    const allowed = new Set(['text','textarea','radio','checkbox','dropdown','date','phone','email']);

    const created: Array<{ clientId?:string; id: string }> = [];

    await db.$transaction(async (tx) => {
      for (const q of questions) {
        const input_type = String(q.input_type || 'text').toLowerCase();
        if (!allowed.has(input_type)) throw new Error(`unsupported input_type: ${input_type}`);
        const question_text = stripHtml(String(q.question_text || '').slice(0, 2000));
        const form_options = q.form_options ? q.form_options : null;
        const is_required = !!q.is_required;

        const rec = await tx.job_question.create({
          data: {
            job_id: jobId ?? null,
            tenant_id: tenantId ?? null,
            question_text,
            input_type,
            category: q.category ?? null,
            order_index: (typeof q.order_index === 'number') ? q.order_index : null,
            form_options: form_options as any,
            is_required,
            source_type: q.source_type ?? null,
            source_doc_id: q.source_doc_id ?? null,
          }
        });
        created.push({ clientId: q.clientId, id: rec.id });
      }
    });

    return NextResponse.json({ ok: true, created });
  } catch (err: any) {
    console.error('questions.batch error', err);
    return NextResponse.json({ ok: false, error: String(err?.message ?? err) }, { status: 500 });
  }
}
