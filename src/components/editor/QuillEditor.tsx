"use client";

import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "blockquote",
  "code-block",
  "link",
  "image",
];

export default function QuillEditor({ value, onChange, placeholder }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      // import Quill only on client
      const QuillModule = await import("quill");
      const Quill = QuillModule && (QuillModule.default ?? QuillModule);
      if (!mounted || !containerRef.current) return;

      quillRef.current = new Quill(containerRef.current, {
        theme: "snow",
        modules,
        formats,
        placeholder,
      });

      // set initial content
      if (value) {
        try {
          quillRef.current.clipboard.dangerouslyPasteHTML(value);
        } catch (e) {
          quillRef.current.setText(value);
        }
      }

      const handleChange = () => {
        const html = containerRef.current?.querySelector('.ql-editor')?.innerHTML ?? "";
        onChange(html === '<p><br></p>' ? '' : html);
      };

      quillRef.current.on('text-change', handleChange);

      return () => {
        mounted = false;
        if (quillRef.current) {
          quillRef.current.off('text-change', handleChange);
          // Quill doesn't provide a destroy API; clear reference
          quillRef.current = null;
        }
      };
    })();
  }, []);

  // update editor when value prop changes externally
  useEffect(() => {
    const editor = quillRef.current;
    if (!editor) return;
    const current = containerRef.current?.querySelector('.ql-editor')?.innerHTML ?? '';
    if (value !== current) {
      const selection = editor.getSelection();
      try {
        editor.clipboard.dangerouslyPasteHTML(value || '');
      } catch (e) {
        editor.setText(value || '');
      }
      if (selection) editor.setSelection(selection);
    }
  }, [value]);

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
}
