import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const number = url.searchParams.get('number');
  // Stub: in real implementation, check DB for existing job/exam number
  // For now always return unique=true unless number === 'DUPLICATE'
  const unique = number === 'DUPLICATE' ? false : true;
  return NextResponse.json({ unique });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: persist to DB. This is a stub that returns the posted payload
    return NextResponse.json({ ok: true, payload: body });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
