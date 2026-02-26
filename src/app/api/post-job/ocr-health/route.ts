import { NextResponse } from 'next/server';
import { promisify } from 'util';
import child_process from 'child_process';
const exec = promisify(child_process.exec);

async function checkCmd(cmd: string, args = '--version') {
  try {
    await exec(`${cmd} ${args}`);
    return true;
  } catch (e) {
    return false;
  }
}

export async function GET() {
  const pdftoppm = await checkCmd('pdftoppm', '-v').catch(() => false);
  const magick = await checkCmd('magick', '-version').catch(() => false);
  const convert = await checkCmd('convert', '-version').catch(() => false);
  const tesseract = await checkCmd('tesseract', '--version').catch(() => false);

  const ocrAvailable = !!tesseract && (pdftoppm || magick || convert);

  return NextResponse.json({ ok: true, tools: { pdftoppm, magick, convert, tesseract }, ocrAvailable });
}
