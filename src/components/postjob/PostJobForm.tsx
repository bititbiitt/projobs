"use client";

import React, { useState, useRef } from "react";
import QuillEditor from '@/components/editor/QuillEditor';

// lightweight id generator to avoid adding a runtime dependency
const genId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;

export default function PostJobForm() {
  const [tab, setTab] = useState<"details" | "questions">("details");
  const [description, setDescription] = useState<string>("");
  const [requirements, setRequirements] = useState<string>("");
  const [minimumQualifications, setMinimumQualifications] = useState<string>("");
  const [benefits, setBenefits] = useState<string>("");
  const [scoringCriteria, setScoringCriteria] = useState<string>("");
  
  // Questions tab state
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [parsedQuestions, setParsedQuestions] = useState<Array<any>>([]);
  const [defaultCategory, setDefaultCategory] = useState<'agency' | 'job'>('job');
  const [previewAsApplicant, setPreviewAsApplicant] = useState<boolean>(false);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const editingInputRef = useRef<HTMLInputElement | null>(null);
  const inputRefs = React.useRef<Record<string, HTMLInputElement | null>>({});
  const [includeQuestions, setIncludeQuestions] = useState<boolean>(true);
  // kept for compatibility with older templates that toggled a client-side preview
  const [showUploadedPreview, setShowUploadedPreview] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

  // Drag-and-drop handlers
  const handlePaletteDragStart = (e: React.DragEvent, type: string, label: string) => {
    const payload = { source: 'palette', type, label };
    e.dataTransfer.setData('application/json', JSON.stringify(payload));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleQuestionDragStart = (e: React.DragEvent, id: string) => {
    const payload = { source: 'question', id };
    e.dataTransfer.setData('application/json', JSON.stringify(payload));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleAllowDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const insertIntoCategory = (items: any[], category: 'agency' | 'job', newItem: any, atIndex?: number) => {
    // Find insertion index in the global items array so that items of same category remain grouped
    const all = [...items];
    // If atIndex is provided (global index), insert there
    if (typeof atIndex === 'number') {
      all.splice(atIndex, 0, newItem);
      return all;
    }
    // Otherwise append after last item of that category
    let lastIndex = -1;
    for (let i = 0; i < all.length; i++) if (all[i].category === category) lastIndex = i;
    if (lastIndex === -1) {
      // find first index of other category to insert before, or push
      const firstOther = all.findIndex(a => a.category !== category);
      if (firstOther === -1) { all.push(newItem); return all; }
      all.splice(firstOther, 0, newItem); return all;
    }
    all.splice(lastIndex + 1, 0, newItem);
    return all;
  };

  const addQuestion = (q: any) => {
    setParsedQuestions((s) => {
      const next = [...s, q];
      return next;
    });
    // focus/edit after render
    setTimeout(() => setEditingQuestionId(q.id), 0);
  };

  const handleDropOnCategory = (e: React.DragEvent, category: 'agency' | 'job') => {
    e.preventDefault();
    try {
      const raw = e.dataTransfer.getData('application/json');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.source === 'palette') {
        const q = { id: genId(), type: data.type, label: data.label, category };
        setParsedQuestions((s) => insertIntoCategory(s, category, q));
      } else if (data.source === 'question') {
        // change category of existing question and move it to end of target category
        setParsedQuestions((s) => {
          const item = s.find(x => x.id === data.id);
          if (!item) return s;
          const others = s.filter(x => x.id !== data.id);
          const moved = { ...item, category };
          return insertIntoCategory(others, category, moved);
        });
      }
    } catch (err) {
      // ignore
    }
  };

  const handleDropOnQuestion = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    try {
      const raw = e.dataTransfer.getData('application/json');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.source === 'question') {
        setParsedQuestions((s) => {
          const all = [...s];
          const from = all.findIndex(x => x.id === data.id);
          const to = all.findIndex(x => x.id === targetId);
          if (from === -1 || to === -1 || from === to) return s;
          const [item] = all.splice(from, 1);
          all.splice(to, 0, item);
          return all;
        });
      } else if (data.source === 'palette') {
        // add new item before target
        setParsedQuestions((s) => {
          const all = [...s];
          const to = all.findIndex(x => x.id === targetId);
          const q = { id: genId(), type: data.type, label: data.label, category: (all[to]?.category ?? defaultCategory) };
          all.splice(to, 0, q);
          return all;
        });
      }
    } catch (err) {
      // ignore
    }
  };

  // Keyboard helpers for question cards
  const moveQuestion = (id: string, direction: 'up' | 'down') => {
    setParsedQuestions((s) => {
      const all = [...s];
      const idx = all.findIndex(x => x.id === id);
      if (idx === -1) return s;
      const swapWith = direction === 'up' ? idx - 1 : idx + 1;
      if (swapWith < 0 || swapWith >= all.length) return s;
      const tmp = all[swapWith]; all[swapWith] = all[idx]; all[idx] = tmp; return all;
    });
  };

  // helpers for common question operations (kept out of JSX to simplify parsing)
  const deleteQuestion = (id: string) => setParsedQuestions((s) => s.filter(item => item.id !== id));
  const changeQuestionCategory = (id: string, category: 'agency'|'job') => setParsedQuestions((s) => s.map(item => item.id === id ? {...item, category } : item));
  const moveQuestionUpInCategory = (id: string, category: 'agency'|'job') => setParsedQuestions((s) => {
    const all = [...s];
    const pos = all.findIndex(x => x.id === id);
    if (pos <= 0) return all;
    let prevPos = -1;
    for (let i = pos - 1; i >= 0; i--) if (all[i].category === category) { prevPos = i; break; }
    if (prevPos === -1) return all;
    const tmp = all[prevPos]; all[prevPos] = all[pos]; all[pos] = tmp; return all;
  });
  const moveQuestionDownInCategory = (id: string, category: 'agency'|'job') => setParsedQuestions((s) => {
    const all = [...s];
    const pos = all.findIndex(x => x.id === id);
    if (pos === -1) return all;
    let nextPos = -1;
    for (let i = pos + 1; i < all.length; i++) if (all[i].category === category) { nextPos = i; break; }
    if (nextPos === -1) return all;
    const tmp = all[nextPos]; all[nextPos] = all[pos]; all[pos] = tmp; return all;
  });

  // Option editing helpers
  const updateOption = (id: string, index: number, value: string) => setParsedQuestions((s) => s.map(item => {
    if (item.id !== id) return item;
    const opts = Array.isArray(item.options) ? [...item.options] : [];
    opts[index] = value;
    return { ...item, options: opts };
  }));

  const addOption = (id: string, value = 'New option') => setParsedQuestions((s) => s.map(item => {
    if (item.id !== id) return item;
    const opts = Array.isArray(item.options) ? [...item.options, value] : [value];
    return { ...item, options: opts };
  }));

  const removeOption = (id: string, index: number) => setParsedQuestions((s) => s.map(item => {
    if (item.id !== id) return item;
    const opts = Array.isArray(item.options) ? [...item.options] : [];
    opts.splice(index, 1);
    return { ...item, options: opts };
  }));

  const moveOption = (id: string, from: number, to: number) => setParsedQuestions((s) => s.map(item => {
    if (item.id !== id) return item;
    const opts = Array.isArray(item.options) ? [...item.options] : [];
    if (from < 0 || from >= opts.length || to < 0 || to >= opts.length) return item;
    const [opt] = opts.splice(from, 1);
    opts.splice(to, 0, opt);
    return { ...item, options: opts };
  }));

  // Format phone as (XXX) XXX-XXXX while typing
  const formatPhone = (input: string) => {
    const digits = String(input || '').replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  };

  const isValidPhone = (s?: string) => {
    if (!s) return false;
    const digits = String(s).replace(/\D/g, '');
    return digits.length === 10;
  };

  const isValidEmail = (s?: string) => {
    if (!s) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(s));
  };

  // Normalize email while typing: trim, lowercase, remove spaces, ensure single @
  const formatEmail = (input: string) => {
    let s = String(input || '').trim().toLowerCase();
    // remove internal whitespace
    s = s.replace(/\s+/g, '');
    // keep only the first @ if multiple
    const at = s.indexOf('@');
    if (at !== -1) {
      s = s.slice(0, at + 1) + s.slice(at + 1).replace(/@/g, '');
    }
    // clamp length to a reasonable limit
    return s.slice(0, 254);
  };

  const renderQuestionCard = (q: any) => (
    <div key={q.id} tabIndex={0} onKeyDown={(e) => handleQuestionKey(e, q)} draggable onDragStart={(e) => handleQuestionDragStart(e, q.id)} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDropOnQuestion(e, q.id)} className="border rounded p-3 bg-gray-50">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex-1" />

        <div className="flex-shrink-0">
          <select value={q.category} onChange={(e) => changeQuestionCategory(q.id, e.target.value as 'agency'|'job')} className="rounded border px-2 py-1 text-sm">
            <option value="agency">Agency-Wide</option>
            <option value="job">Job-Specific</option>
          </select>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" checked={!!q.required} onChange={(e) => setParsedQuestions((s) => s.map(item => item.id === q.id ? {...item, required: e.target.checked } : item))} />
            <span>Required</span>
          </label>
        </div>
      </div>

      <div className="mt-3 w-full">
        {editingQuestionId === q.id ? (
          <input
            ref={(el) => { editingInputRef.current = el; }}
            autoFocus
            value={q.label}
            onChange={(e) => setParsedQuestions((s) => s.map(item => item.id === q.id ? { ...item, label: e.target.value } : item))}
            onBlur={() => setEditingQuestionId(null)}
            className="text-sm font-medium w-full rounded border px-2 py-1"
          />
        ) : (
          <div className="text-sm font-medium" onDoubleClick={() => setEditingQuestionId(q.id)}>{q.label}</div>
        )}
      </div>

      <div className="text-xs text-gray-500 mt-2">Type: {q.type}</div>
      {/* Inline options editor for choice-like controls */}
      {(['radio','checkbox','dropdown'] as string[]).includes(q.type) && (
        <div className="mt-3">
          {(q.options||[]).map((opt: string, i: number) => (
            <div key={i} className="flex items-center gap-2 mt-2">
              <input value={opt} onChange={(e) => updateOption(q.id, i, e.target.value)} className="flex-1 rounded border px-2 py-1 text-sm" />
              <button onClick={() => moveOption(q.id, i, Math.max(0, i-1))} className="px-2 py-1 text-xs bg-gray-100 rounded">↑</button>
              <button onClick={() => moveOption(q.id, i, Math.min((q.options||[]).length-1, i+1))} className="px-2 py-1 text-xs bg-gray-100 rounded">↓</button>
              <button onClick={() => removeOption(q.id, i)} className="px-2 py-1 text-xs text-red-600">Delete</button>
            </div>
          ))}
          <div className="mt-2">
            <button onClick={() => addOption(q.id)} className="px-3 py-1 text-sm bg-white border rounded">Add option</button>
          </div>
        </div>
      )}

      <div className="flex justify-end items-center gap-2 mt-3">
        <button onClick={() => setEditingQuestionId(q.id)} className="text-sm text-gray-700">Edit</button>
        <button onClick={() => moveQuestionUpInCategory(q.id, q.category)} className="text-sm text-gray-600">Up</button>
        <button onClick={() => moveQuestionDownInCategory(q.id, q.category)} className="text-sm text-gray-600">Down</button>
        <button onClick={() => deleteQuestion(q.id)} className="text-sm text-red-600">Delete</button>
      </div>
    </div>
  );

  // focus the inline input when editingQuestionId changes
  React.useEffect(() => {
    if (editingQuestionId && editingInputRef.current) {
      try { editingInputRef.current.focus(); editingInputRef.current.select(); } catch (e) {}
    }
  }, [editingQuestionId]);

  const renderPreviewForQuestion = (q: any, idx: number) => {
    const requiredMark = q.required ? <span className="text-red-600 ml-2">*</span> : null;
    switch (q.type) {
      case 'text':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <input className="mt-2 w-full rounded border p-2" placeholder="Answer" />
          </div>
        );
      case 'textarea':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <textarea className="mt-2 w-full rounded border p-2" rows={4} placeholder="Answer" />
          </div>
        );
      case 'radio':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <div className="mt-2 space-y-1">
              {(q.options||[]).map((opt: string, i: number) => (
                <label key={i} className="flex items-center gap-2 text-sm"><input type="radio" name={`q_${q.id}`} />{opt}</label>
              ))}
            </div>
          </div>
        );
      case 'checkbox':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <div className="mt-2 space-y-1">
              {(q.options||[]).map((opt: string, i: number) => (
                <label key={i} className="flex items-center gap-2 text-sm"><input type="checkbox" />{opt}</label>
              ))}
            </div>
          </div>
        );
      case 'dropdown':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <select className="mt-2 w-full rounded border p-2">
              <option>Please select one</option>
              {(q.options||[]).map((opt: string, i: number) => (<option key={i}>{opt}</option>))}
            </select>
          </div>
        );
      case 'date':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <div className="mt-2">
              <input
                type="date"
                value={q.value ? String(q.value).slice(0,10) : ''}
                onChange={(e) => setParsedQuestions((s) => s.map(item => item.id === q.id ? { ...item, value: e.target.value ? new Date(e.target.value).toISOString() : null } : item))}
                onFocus={(e) => { const t = e.target as HTMLInputElement; try { (t as any).showPicker?.(); } catch {} }}
                className="mt-2 w-full rounded border p-2"
              />
            </div>
          </div>
        );
      case 'phone':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <div>
              <input
                ref={(el) => { inputRefs.current[q.id] = el; }}
                type="tel"
                className={`mt-2 w-full rounded border p-2 ${q.value && !isValidPhone(q.value) ? 'border-red-500' : ''}`}
                placeholder="Phone number"
                value={q.value || ''}
                onChange={(e) => {
                  const formatted = formatPhone(e.target.value);
                  setParsedQuestions((s) => s.map(item => item.id === q.id ? { ...item, value: formatted } : item));
                  // move caret to end after formatting
                  setTimeout(() => {
                    const el = inputRefs.current[q.id];
                    if (el) {
                      const pos = (formatted || '').length;
                      try { el.setSelectionRange(pos, pos); } catch (err) {}
                    }
                  }, 0);
                }}
              />
              {q.value && !isValidPhone(q.value) && (
                <div className="text-xs text-red-600 mt-1">Enter a 10-digit phone number</div>
              )}
            </div>
          </div>
        );
      case 'email':
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <div>
              <input
                ref={(el) => { inputRefs.current[q.id] = el; }}
                type="email"
                className={`mt-2 w-full rounded border p-2 ${q.value && !isValidEmail(q.value) ? 'border-red-500' : ''}`}
                placeholder="Email address"
                value={q.value || ''}
                onChange={(e) => {
                  const formatted = formatEmail(e.target.value);
                  setParsedQuestions((s) => s.map(item => item.id === q.id ? { ...item, value: formatted } : item));
                  setTimeout(() => {
                    const el = inputRefs.current[q.id];
                    if (el) {
                      const pos = (formatted || '').length;
                      try { el.setSelectionRange(pos, pos); } catch (err) {}
                    }
                  }, 0);
                }}
              />
              {q.value && !isValidEmail(q.value) && (
                <div className="text-xs text-red-600 mt-1">Enter a valid email address</div>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div key={q.id} className="py-3">
            <div className="text-sm font-medium">{String(idx).padStart(2,'0')}. {q.label}{requiredMark}</div>
            <input className="mt-2 w-full rounded border p-2" placeholder="Answer" />
          </div>
        );
    }
  };

  const handleQuestionKey = (e: React.KeyboardEvent, q: any) => {
    if (e.key === 'Delete') {
      setParsedQuestions((s) => s.filter(item => item.id !== q.id));
      return;
    }
    if (e.key === 'Enter') {
      // quick inline edit via prompt (keeps implementation simple)
      const newLabel = prompt('Edit question label', q.label);
      if (newLabel != null) {
        setParsedQuestions((s) => s.map(item => item.id === q.id ? {...item, label: newLabel } : item));
      }
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowUp') {
      moveQuestion(q.id, 'up');
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowDown') {
      moveQuestion(q.id, 'down');
      return;
    }
  };

  const handlePublish = async () => {
    const jobPayload = {
      title: 'New Job',
      description,
      requirements,
      minimumQualifications,
      benefits,
      scoringCriteria,
      includeQuestions,
    };
    try {
      const res = await fetch('/api/post-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobPayload),
      });
      const json = await res.json();
      if (!res.ok) {
        alert('Failed to create job');
        return;
      }
      if (includeQuestions && parsedQuestions.length > 0) {
        await handlePublishClientSide(parsedQuestions);
      }
      alert('Job published');
    } catch (err) {
      console.error('Publish error', err);
      alert('Publish failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold mb-1">Create New Job Posting</h2>
      <p className="text-sm text-gray-500 mb-4">Fill in the details for your new job posting</p>

      <div className="flex items-center border-b mb-5">
        <button
          type="button"
          onClick={() => setTab("details")}
          className={`px-4 py-2 -mb-px font-semibold ${tab === "details" ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-400"}`}
        >
          JOB DETAILS
        </button>
        <button
          type="button"
          onClick={() => setTab("questions")}
          className={`px-4 py-2 -mb-px font-semibold ${tab === "questions" ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-400"}`}
        >
          QUESTIONS
        </button>
      </div>

      {tab === "details" ? (
        <div className="space-y-6">
          {/* Basic Information */}
          <section>
            <h3 className="font-semibold text-base mb-3">Basic Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Department</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select department</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500">If not in the list, please specify:</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., New Department..." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Job / Exam Number *</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., JOB2026-001" />
              </div>
              <div>
                <label className="block text-sm font-medium">Job Title *</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., Web Developer..." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Opening Date *</label>
                <div className="mt-1">
                  <input type="date" onFocus={(e) => { const t = e.target as HTMLInputElement; try { (t as any).showPicker?.(); } catch {} }} className="mt-1 block w-full rounded border border-red-300 px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Closing Date</label>
                <div className="mt-1">
                  <input type="date" onFocus={(e) => { const t = e.target as HTMLInputElement; try { (t as any).showPicker?.(); } catch {} }} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Review Date</label>
                <div className="mt-1">
                  <input type="date" onFocus={(e) => { const t = e.target as HTMLInputElement; try { (t as any).showPicker?.(); } catch {} }} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
                </div>
              </div>
            </div>

            <div className="flex items-center mt-3">
              <input id="continuous" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="continuous" className="ml-2 text-sm">Continuous</label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Location *</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="City" />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>State</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">ZIP</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="5-digit ZIP Code" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Job Type *</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select type</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Work Site</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select work site</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Job Level</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select level</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Job Classification *</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select Classification</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500">If not in the list, please specify:</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., New job classification..." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Job Function *</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select function</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500">If not in the list, please specify:</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., New job function..." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Job Category *</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select Category</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500">If not in the list, please specify:</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., New job category..." />
              </div>
            </div>
          </section>

          {/* Compensation */}
          <section>
            <h3 className="font-semibold text-base mb-3">Compensation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">Compensation Type</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Annual Salary</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Minimum Pay</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., 50,000.00" />
              </div>
              <div>
                <label className="block text-sm font-medium">Maximum Pay</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., 140,000.00" />
              </div>
            </div>
          </section>

          {/* Job Details */}
          <section>
            <h3 className="font-semibold text-base mb-3">Job Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Job Description *</label>
                <QuillEditor value={description} onChange={setDescription} placeholder="Please describe the role, responsibilities, and what a typical day looks like..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Requirements *</label>
                <QuillEditor value={requirements} onChange={setRequirements} placeholder="Please list the required qualifications, skills, and experience..." />
              </div>

              

              <div>
                <label className="block text-sm font-medium mb-1">Benefits *</label>
                <QuillEditor value={benefits} onChange={setBenefits} placeholder="Please describe the benefits and perks offered..." />
              </div>
            </div>
          </section>

          {/* Minimum Qualifications (moved below Benefits) */}
          <section>
            <div>
              <label className="block text-sm font-medium mb-1">Minimum Qualifications (MQ)</label>
              <textarea
                rows={3}
                value={minimumQualifications}
                onChange={(e) => setMinimumQualifications(e.target.value)}
                className="w-full rounded border border-gray-300 p-3 text-sm"
                placeholder="e.g., Bachelor's degree in relevant field OR 5 years equivalent experience; Valid driver's license required; Must pass background check..."
              />
            </div>
          </section>

          {/* Civil Service & Compliance */}
          <section>
            <h3 className="font-semibold text-base mb-3">Civil Service & Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">Bargaining Unit</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select professional unit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Pay Grade</label>
                <input className="mt-1 block w-full rounded border border-red-300 px-3 py-2" placeholder="e.g., Grade 12" />
              </div>
              <div>
                <label className="block text-sm font-medium">Education</label>
                <select className="mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white">
                  <option>Select education</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 h-4 w-4" /> Civil Service Exam</label>
              <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 h-4 w-4" /> Veteran Preference</label>
              <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 h-4 w-4" /> FLSA</label>
              <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 h-4 w-4" /> Driver's license</label>
              <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 h-4 w-4" /> Reference</label>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Scoring Criteria</label>
              <textarea
                rows={3}
                value={scoringCriteria}
                onChange={(e) => setScoringCriteria(e.target.value)}
                className="w-full rounded border border-gray-300 p-3 text-sm"
                placeholder="Describe the scoring criteria and weights (e.g., Education 30%, Experience 40%, Skills 30%)..."
              />
            </div>
          </section>

          <div className="flex justify-center">
            <button onClick={handlePublish} className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 text-sm">
              Publish Job
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={includeQuestions} onChange={(e) => setIncludeQuestions(e.target.checked)} className="h-4 w-4" />
              <span className="font-medium">Include screening questions</span>
              <span className="text-sm text-gray-500 ml-2">(Optional — only add questions if required for this job)</span>
            </label>
          </div>
          
          
          {!includeQuestions ? (
            <div className="border rounded p-4 bg-gray-50 text-center">
              <p className="text-sm text-gray-600 mb-3">Screening questions are disabled for this job.</p>
              <button type="button" onClick={() => setIncludeQuestions(true)} className="px-3 py-2 bg-blue-600 text-white rounded text-sm">Enable Screening Questions</button>
            </div>
          ) : null}
          <div className="border rounded-md p-4 flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-sm text-gray-700">Upload PDF or Word document with pre-written questions here...</p>
                <p className="text-xs text-gray-500">Supported: .pdf, .doc, .docx</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                // warn before overwriting existing parsed content
                if (uploadedFileName || parsedQuestions.length > 0) {
                  const ok = confirm('Uploading a new file will overwrite any existing questions. Continue?');
                  if (!ok) {
                    e.currentTarget.value = '';
                    return;
                  }
                }
                setUploadedFileName(file.name);
                // If this is a plain text file, parse client-side. Otherwise send to server parser and map results into questions/options.
                const isText = file.type.startsWith('text/') || file.name.toLowerCase().endsWith('.txt');
                if (isText) {
                  try {
                    const text = await file.text();
                    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
                    if (lines.length > 0) {
                      const q = lines.slice(0, 50).map((line) => ({ id: genId(), type: 'text', label: line, category: defaultCategory, required: true }));
                      setParsedQuestions(q);
                      setTimeout(() => { if (q[0]?.id) setEditingQuestionId(q[0].id); }, 0);
                    } else {
                      const single = { id: genId(), type: 'text', label: file.name, category: defaultCategory, required: true };
                      setParsedQuestions([single]);
                      setTimeout(() => setEditingQuestionId(single.id), 0);
                    }
                  } catch (err) {
                    const fallback = { id: genId(), type: 'text', label: `Uploaded: ${file.name} (parsing requires server)`, category: defaultCategory };
                    setParsedQuestions([fallback]);
                    setTimeout(() => setEditingQuestionId(fallback.id), 0);
                  }
                } else {
                  // upload file first to create job_document_version, then call parse endpoint with versionId
                  try {
                    const arrayBuf = await file.arrayBuffer();
                    // prepare base64 for server upload
                    const bytes = new Uint8Array(arrayBuf);
                    let binary = '';
                    const chunk = 0x8000;
                    for (let i = 0; i < bytes.length; i += chunk) {
                      const slice = bytes.subarray(i, i + chunk);
                      binary += String.fromCharCode.apply(null, Array.from(slice));
                    }
                    const b64 = btoa(binary);

                    // call upload endpoint to create job_document + version
                    let versionId: string | undefined = undefined;
                    try {
                      const up = await fetch('/api/post-job/upload-doc', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: file.name, mime: file.type, data: b64 })
                      });
                      const upJson = await up.json();
                      if (upJson && upJson.ok && upJson.versionId) versionId = upJson.versionId;
                    } catch (ux) {
                      // ignore upload failure and continue to parse without versionId
                    }

                    // parse using server, passing versionId if available
                    const res = await fetch('/api/post-job/parse-doc', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ name: file.name, mime: file.type, data: b64, versionId })
                    });
                    const json = await res.json();
                    // save any returned html/text for preview
                    // server may return HTML/text useful for parsing; we don't store client preview anymore

                    // prefer structured parsed array from new parser, fallback to text/html parsing
                    let parsed: any[] = [];
                    if (json && json.ok && Array.isArray(json.parsed) && json.parsed.length > 0) {
                      parsed = json.parsed.map((p: any) => ({ ...p, category: p.category ?? defaultCategory }));
                    } else {
                      const text = (json && json.ok && json.text) ? String(json.text) : (json && json.html ? String(json.html).replace(/<[^>]+>/g, '\n') : '');
                      const blocks = text.split(/\n{2,}/).map(b => b.trim()).filter(Boolean).slice(0, 200);
                      const stripOpt = (s: string) => s.replace(/^[\-\u2022\*\s]*/, '').replace(/^[0-9]+[\).]\s*/, '').replace(/^[a-zA-Z][\).]\s*/, '').trim();
                      for (const blk of blocks) {
                        const lines = blk.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
                        if (lines.length === 0) continue;
                        if (lines.length > 1) {
                          const opts = lines.slice(1).filter(l => /^([\-\u2022\*]|[0-9]+[\).]|[a-zA-Z][\).])/.test(l) || /^\s*[-•*]/.test(l));
                          if (opts.length >= 1) {
                            const options = lines.slice(1).map(stripOpt).filter(Boolean);
                            parsed.push({ id: genId(), type: 'radio', label: lines[0], options, category: defaultCategory, required: true });
                            continue;
                          }
                        }
                        parsed.push({ id: genId(), type: 'text', label: lines[0], category: defaultCategory, required: true });
                      }
                      if (parsed.length === 0) parsed.push({ id: genId(), type: 'text', label: `Uploaded: ${file.name} (no parseable content)`, category: defaultCategory, required: true });
                    }

                    setParsedQuestions(parsed);
                    if (parsed.length > 0) setTimeout(() => setEditingQuestionId(parsed[0].id), 0);
                  } catch (err) {
                    const fallback2 = { id: genId(), type: 'text', label: `Uploaded: ${file.name} (parsing requires server)`, category: defaultCategory };
                    setParsedQuestions([fallback2]);
                    setTimeout(() => setEditingQuestionId(fallback2.id), 0);
                  }
                }
              }} />
              <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 px-3 py-2 bg-white border rounded text-sm hover:bg-gray-100">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                  <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12l-7-7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Upload Questions
              </button>
              {uploadedFileName && (
                <div>
                  {!showDeleteConfirm ? (
                    <button type="button" onClick={() => setShowDeleteConfirm(true)} className="inline-flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded text-sm text-red-600 hover:bg-red-100">
                      Delete Upload
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-2">
                      <span className="text-sm text-gray-700 mr-2">Confirm delete?</span>
                      <button type="button" onClick={() => {
                        setUploadedFileName(null);
                        setParsedQuestions([]);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                        setShowDeleteConfirm(false);
                      }} className="px-3 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
                      <button type="button" onClick={() => setShowDeleteConfirm(false)} className="px-3 py-1 bg-white border rounded text-sm">Cancel</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-600">Default category for new questions:</label>
              <select value={defaultCategory} onChange={(e) => setDefaultCategory(e.target.value as 'agency'|'job')} className="rounded border px-2 py-1 text-sm">
                <option value="agency">Agency-Wide Questions</option>
                <option value="job">Job-Specific Supplemental Questions</option>
              </select>
              <div className="ml-4">
                  <button
                  type="button"
                  onClick={() => setPreviewAsApplicant((s) => !s)}
                  aria-pressed={previewAsApplicant}
                      className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 ${previewAsApplicant ? 'bg-blue-600 text-white border border-blue-700 hover:bg-blue-700' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${previewAsApplicant ? 'text-white' : 'text-gray-600'}`}>
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                  <span>Preview as applicant</span>
                </button>
              </div>
            </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Screening Questions</h3>
            <p className="text-sm text-gray-500 mb-4">Build custom screening questions for applicants by clicking form elements.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="bg-white border rounded p-4">
                  <h4 className="text-sm font-medium mb-3">Form Elements</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'text', 'Short answer')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'text', label: 'Short answer', category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Text Input</div>
                      <div className="text-xs text-gray-400">Single line text</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'textarea', 'Long answer')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'textarea', label: 'Long answer', category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Text Area</div>
                      <div className="text-xs text-gray-400">Multi-line text</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'checkbox', 'Choose options')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'checkbox', label: 'Choose options', options: ['Option 1','Option 2'], category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Checkbox</div>
                      <div className="text-xs text-gray-400">Multiple choice</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'radio', 'Choose one')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'radio', label: 'Choose one', options: ['Option A','Option B'], category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Radio Buttons</div>
                      <div className="text-xs text-gray-400">Single choice</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'dropdown', 'Select')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'dropdown', label: 'Select', options: ['One','Two'], category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Dropdown</div>
                      <div className="text-xs text-gray-400">Select from list</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'date', 'Select date')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'date', label: 'Select date', category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Date</div>
                      <div className="text-xs text-gray-400">Date picker</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'phone', 'Phone')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'phone', label: 'Phone', category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-xs text-gray-400">Phone number</div>
                    </button>
                    <button draggable onDragStart={(e) => handlePaletteDragStart(e, 'email', 'Email')} type="button" onClick={() => {
                      const q = { id: genId(), type: 'email', label: 'Email', category: defaultCategory, required: true };
                      addQuestion(q);
                    }} className="text-left p-3 border rounded bg-white hover:shadow-sm">
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-gray-400">Email address</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="min-h-[16rem] border-2 border-dashed rounded-lg p-4 bg-white space-y-4">
                  {/* Agency-Wide Questions */}
                  <div onDragOver={handleAllowDrop} onDrop={(e) => handleDropOnCategory(e, 'agency')}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">Agency-Wide Questions</h4>
                      <div className="text-xs text-gray-500">{parsedQuestions.filter(q => q.category === 'agency').length} items</div>
                    </div>
                    {parsedQuestions.filter(q => q.category === 'agency').length === 0 ? (
                      <div className="rounded p-4 bg-gray-50 text-center text-sm text-gray-400">No agency-wide questions. Click an element to add.</div>
                    ) : (
                      <div className="space-y-3">
                          {parsedQuestions.filter(q => q.category === 'agency').map(renderQuestionCard)}
                      </div>
                    )}
                  </div>

                  {/* Job-Specific Questions */}
                  <div onDragOver={handleAllowDrop} onDrop={(e) => handleDropOnCategory(e, 'job')}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">Job-Specific Supplemental Questions</h4>
                      <div className="text-xs text-gray-500">{parsedQuestions.filter(q => q.category === 'job').length} items</div>
                    </div>
                    {parsedQuestions.filter(q => q.category === 'job').length === 0 ? (
                      <div className="rounded p-4 bg-gray-50 text-center text-sm text-gray-400">No job-specific questions. Click an element to add.</div>
                    ) : (
                      <div className="space-y-3">
                        {parsedQuestions.filter(q => q.category === 'job').map(renderQuestionCard)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {previewAsApplicant && (
            <div className="mt-6">
              <h3 className="font-semibold text-base mb-3">Preview — Applicant View</h3>
                  <div className="border rounded p-4 bg-white">
                    {(() => {
                      const agencyQs = parsedQuestions.filter((q) => q.category === 'agency');
                      const jobQs = parsedQuestions.filter((q) => q.category === 'job');
                      return (
                        <>
                          {agencyQs.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-center">Agency-Wide Questions</h4>
                              <div className="mt-2">
                                {agencyQs.map((q, i) => renderPreviewForQuestion(q, i+1))}
                              </div>
                            </div>
                          )}

                          {jobQs.length > 0 && (
                            <div>
                              <h4 className="text-sm font-medium text-center">Supplemental Questions</h4>
                              <div className="mt-2">
                                {jobQs.map((q, i) => renderPreviewForQuestion(q, i+1))}
                              </div>
                            </div>
                          )}

                          {agencyQs.length === 0 && jobQs.length === 0 && (
                            <div className="text-sm text-gray-400 text-center">No screening questions to preview.</div>
                          )}
                        </>
                      );
                    })()}
                  </div>
            </div>
          )}

          

          <div className="border-t pt-6">
            <div className="flex justify-center">
              <button onClick={handlePublish} className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 text-sm">
                Publish Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

async function handlePublishClientSide(questions: any[]) {
  // slim wrapper to POST the questions to server batch endpoint
  const res = await fetch('/api/jobs/questions/batch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobId: null, questions }),
  });
  return res.json();
}
