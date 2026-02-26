import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // This endpoint is a stub. Implement server-side parsing using libraries like
  // `mammoth` for .docx and `pdf-parse` or `pdfjs-dist` for PDFs, then return
  // structured questions (array of { label, type, options?, category? }).
  return NextResponse.json({
    error: 'Not implemented',
    message: 'Server-side parsing for uploaded question documents is not implemented. Implement parsing using `mammoth` and `pdf-parse` on the server and return extracted questions.'
  }, { status: 501 });
}
