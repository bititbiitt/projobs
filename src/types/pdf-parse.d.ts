declare module 'pdf-parse' {
  const pdfParse: (data: Buffer | Uint8Array | ArrayBuffer) => Promise<any>;
  export default pdfParse;
}
