module.exports = [
"[project]/projobs/src/components/editor/QuillEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuillEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const modules = {
    toolbar: [
        [
            {
                header: [
                    1,
                    2,
                    3,
                    false
                ]
            }
        ],
        [
            "bold",
            "italic",
            "underline",
            "strike"
        ],
        [
            {
                list: "ordered"
            },
            {
                list: "bullet"
            }
        ],
        [
            "blockquote",
            "code-block"
        ],
        [
            "link",
            "image"
        ],
        [
            "clean"
        ]
    ]
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
    "image"
];
function QuillEditor({ value, onChange, placeholder }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        (async ()=>{
            // import Quill only on client
            const QuillModule = await __turbopack_context__.A("[project]/projobs/node_modules/quill/quill.js [app-ssr] (ecmascript, async loader)");
            const Quill = QuillModule && (QuillModule.default ?? QuillModule);
            if (!mounted || !containerRef.current) return;
            quillRef.current = new Quill(containerRef.current, {
                theme: "snow",
                modules,
                formats,
                placeholder
            });
            // set initial content
            if (value) {
                try {
                    quillRef.current.clipboard.dangerouslyPasteHTML(value);
                } catch (e) {
                    quillRef.current.setText(value);
                }
            }
            const handleChange = ()=>{
                const html = containerRef.current?.querySelector('.ql-editor')?.innerHTML ?? "";
                onChange(html === '<p><br></p>' ? '' : html);
            };
            quillRef.current.on('text-change', handleChange);
            return ()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef
        }, void 0, false, {
            fileName: "[project]/projobs/src/components/editor/QuillEditor.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projobs/src/components/editor/QuillEditor.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/projobs/src/components/postjob/PostJobForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostJobForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$components$2f$editor$2f$QuillEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/src/components/editor/QuillEditor.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
// lightweight id generator to avoid adding a runtime dependency
const genId = ()=>`${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
function PostJobForm() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("details");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [requirements, setRequirements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [minimumQualifications, setMinimumQualifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [benefits, setBenefits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [scoringCriteria, setScoringCriteria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Questions tab state
    const [uploadedFileName, setUploadedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [parsedQuestions, setParsedQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [defaultCategory, setDefaultCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('job');
    const [previewAsApplicant, setPreviewAsApplicant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingQuestionId, setEditingQuestionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editingInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRefs = __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef({});
    const [includeQuestions, setIncludeQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // kept for compatibility with older templates that toggled a client-side preview
    const [showUploadedPreview, setShowUploadedPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Drag-and-drop handlers
    const handlePaletteDragStart = (e, type, label)=>{
        const payload = {
            source: 'palette',
            type,
            label
        };
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'copy';
    };
    const handleQuestionDragStart = (e, id)=>{
        const payload = {
            source: 'question',
            id
        };
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleAllowDrop = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };
    const insertIntoCategory = (items, category, newItem, atIndex)=>{
        // Find insertion index in the global items array so that items of same category remain grouped
        const all = [
            ...items
        ];
        // If atIndex is provided (global index), insert there
        if (typeof atIndex === 'number') {
            all.splice(atIndex, 0, newItem);
            return all;
        }
        // Otherwise append after last item of that category
        let lastIndex = -1;
        for(let i = 0; i < all.length; i++)if (all[i].category === category) lastIndex = i;
        if (lastIndex === -1) {
            // find first index of other category to insert before, or push
            const firstOther = all.findIndex((a)=>a.category !== category);
            if (firstOther === -1) {
                all.push(newItem);
                return all;
            }
            all.splice(firstOther, 0, newItem);
            return all;
        }
        all.splice(lastIndex + 1, 0, newItem);
        return all;
    };
    const addQuestion = (q)=>{
        setParsedQuestions((s)=>{
            const next = [
                ...s,
                q
            ];
            return next;
        });
        // focus/edit after render
        setTimeout(()=>setEditingQuestionId(q.id), 0);
    };
    const handleDropOnCategory = (e, category)=>{
        e.preventDefault();
        try {
            const raw = e.dataTransfer.getData('application/json');
            if (!raw) return;
            const data = JSON.parse(raw);
            if (data.source === 'palette') {
                const q = {
                    id: genId(),
                    type: data.type,
                    label: data.label,
                    category
                };
                setParsedQuestions((s)=>insertIntoCategory(s, category, q));
            } else if (data.source === 'question') {
                // change category of existing question and move it to end of target category
                setParsedQuestions((s)=>{
                    const item = s.find((x)=>x.id === data.id);
                    if (!item) return s;
                    const others = s.filter((x)=>x.id !== data.id);
                    const moved = {
                        ...item,
                        category
                    };
                    return insertIntoCategory(others, category, moved);
                });
            }
        } catch (err) {
        // ignore
        }
    };
    const handleDropOnQuestion = (e, targetId)=>{
        e.preventDefault();
        try {
            const raw = e.dataTransfer.getData('application/json');
            if (!raw) return;
            const data = JSON.parse(raw);
            if (data.source === 'question') {
                setParsedQuestions((s)=>{
                    const all = [
                        ...s
                    ];
                    const from = all.findIndex((x)=>x.id === data.id);
                    const to = all.findIndex((x)=>x.id === targetId);
                    if (from === -1 || to === -1 || from === to) return s;
                    const [item] = all.splice(from, 1);
                    all.splice(to, 0, item);
                    return all;
                });
            } else if (data.source === 'palette') {
                // add new item before target
                setParsedQuestions((s)=>{
                    const all = [
                        ...s
                    ];
                    const to = all.findIndex((x)=>x.id === targetId);
                    const q = {
                        id: genId(),
                        type: data.type,
                        label: data.label,
                        category: all[to]?.category ?? defaultCategory
                    };
                    all.splice(to, 0, q);
                    return all;
                });
            }
        } catch (err) {
        // ignore
        }
    };
    // Keyboard helpers for question cards
    const moveQuestion = (id, direction)=>{
        setParsedQuestions((s)=>{
            const all = [
                ...s
            ];
            const idx = all.findIndex((x)=>x.id === id);
            if (idx === -1) return s;
            const swapWith = direction === 'up' ? idx - 1 : idx + 1;
            if (swapWith < 0 || swapWith >= all.length) return s;
            const tmp = all[swapWith];
            all[swapWith] = all[idx];
            all[idx] = tmp;
            return all;
        });
    };
    // helpers for common question operations (kept out of JSX to simplify parsing)
    const deleteQuestion = (id)=>setParsedQuestions((s)=>s.filter((item)=>item.id !== id));
    const changeQuestionCategory = (id, category)=>setParsedQuestions((s)=>s.map((item)=>item.id === id ? {
                    ...item,
                    category
                } : item));
    const moveQuestionUpInCategory = (id, category)=>setParsedQuestions((s)=>{
            const all = [
                ...s
            ];
            const pos = all.findIndex((x)=>x.id === id);
            if (pos <= 0) return all;
            let prevPos = -1;
            for(let i = pos - 1; i >= 0; i--)if (all[i].category === category) {
                prevPos = i;
                break;
            }
            if (prevPos === -1) return all;
            const tmp = all[prevPos];
            all[prevPos] = all[pos];
            all[pos] = tmp;
            return all;
        });
    const moveQuestionDownInCategory = (id, category)=>setParsedQuestions((s)=>{
            const all = [
                ...s
            ];
            const pos = all.findIndex((x)=>x.id === id);
            if (pos === -1) return all;
            let nextPos = -1;
            for(let i = pos + 1; i < all.length; i++)if (all[i].category === category) {
                nextPos = i;
                break;
            }
            if (nextPos === -1) return all;
            const tmp = all[nextPos];
            all[nextPos] = all[pos];
            all[pos] = tmp;
            return all;
        });
    // Option editing helpers
    const updateOption = (id, index, value)=>setParsedQuestions((s)=>s.map((item)=>{
                if (item.id !== id) return item;
                const opts = Array.isArray(item.options) ? [
                    ...item.options
                ] : [];
                opts[index] = value;
                return {
                    ...item,
                    options: opts
                };
            }));
    const addOption = (id, value = 'New option')=>setParsedQuestions((s)=>s.map((item)=>{
                if (item.id !== id) return item;
                const opts = Array.isArray(item.options) ? [
                    ...item.options,
                    value
                ] : [
                    value
                ];
                return {
                    ...item,
                    options: opts
                };
            }));
    const removeOption = (id, index)=>setParsedQuestions((s)=>s.map((item)=>{
                if (item.id !== id) return item;
                const opts = Array.isArray(item.options) ? [
                    ...item.options
                ] : [];
                opts.splice(index, 1);
                return {
                    ...item,
                    options: opts
                };
            }));
    const moveOption = (id, from, to)=>setParsedQuestions((s)=>s.map((item)=>{
                if (item.id !== id) return item;
                const opts = Array.isArray(item.options) ? [
                    ...item.options
                ] : [];
                if (from < 0 || from >= opts.length || to < 0 || to >= opts.length) return item;
                const [opt] = opts.splice(from, 1);
                opts.splice(to, 0, opt);
                return {
                    ...item,
                    options: opts
                };
            }));
    // Format phone as (XXX) XXX-XXXX while typing
    const formatPhone = (input)=>{
        const digits = String(input || '').replace(/\D/g, '').slice(0, 10);
        if (digits.length === 0) return '';
        if (digits.length <= 3) return `(${digits}`;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    };
    const isValidPhone = (s)=>{
        if (!s) return false;
        const digits = String(s).replace(/\D/g, '');
        return digits.length === 10;
    };
    const isValidEmail = (s)=>{
        if (!s) return false;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(s));
    };
    // Normalize email while typing: trim, lowercase, remove spaces, ensure single @
    const formatEmail = (input)=>{
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
    const renderQuestionCard = (q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            tabIndex: 0,
            onKeyDown: (e)=>handleQuestionKey(e, q),
            draggable: true,
            onDragStart: (e)=>handleQuestionDragStart(e, q.id),
            onDragOver: (e)=>e.preventDefault(),
            onDrop: (e)=>handleDropOnQuestion(e, q.id),
            className: "border rounded p-3 bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 236,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: q.category,
                                onChange: (e)=>changeQuestionCategory(q.id, e.target.value),
                                className: "rounded border px-2 py-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "agency",
                                        children: "Agency-Wide"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "job",
                                        children: "Job-Specific"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 238,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center text-sm gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: !!q.required,
                                        onChange: (e)=>setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                                                        ...item,
                                                        required: e.target.checked
                                                    } : item))
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Required"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 245,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 235,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 w-full",
                    children: editingQuestionId === q.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: (el)=>{
                            editingInputRef.current = el;
                        },
                        autoFocus: true,
                        value: q.label,
                        onChange: (e)=>setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                                        ...item,
                                        label: e.target.value
                                    } : item)),
                        onBlur: ()=>setEditingQuestionId(null),
                        className: "text-sm font-medium w-full rounded border px-2 py-1"
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium",
                        onDoubleClick: ()=>setEditingQuestionId(q.id),
                        children: q.label
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 253,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-500 mt-2",
                    children: [
                        "Type: ",
                        q.type
                    ]
                }, void 0, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 268,
                    columnNumber: 7
                }, this),
                [
                    'radio',
                    'checkbox',
                    'dropdown'
                ].includes(q.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: [
                        (q.options || []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: opt,
                                        onChange: (e)=>updateOption(q.id, i, e.target.value),
                                        className: "flex-1 rounded border px-2 py-1 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>moveOption(q.id, i, Math.max(0, i - 1)),
                                        className: "px-2 py-1 text-xs bg-gray-100 rounded",
                                        children: "↑"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>moveOption(q.id, i, Math.min((q.options || []).length - 1, i + 1)),
                                        className: "px-2 py-1 text-xs bg-gray-100 rounded",
                                        children: "↓"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeOption(q.id, i),
                                        className: "px-2 py-1 text-xs text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addOption(q.id),
                                className: "px-3 py-1 text-sm bg-white border rounded",
                                children: "Add option"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end items-center gap-2 mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setEditingQuestionId(q.id),
                            className: "text-sm text-gray-700",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 287,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>moveQuestionUpInCategory(q.id, q.category),
                            className: "text-sm text-gray-600",
                            children: "Up"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 288,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>moveQuestionDownInCategory(q.id, q.category),
                            className: "text-sm text-gray-600",
                            children: "Down"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 289,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>deleteQuestion(q.id),
                            className: "text-sm text-red-600",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 290,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 286,
                    columnNumber: 7
                }, this)
            ]
        }, q.id, true, {
            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
            lineNumber: 234,
            columnNumber: 5
        }, this);
    // focus the inline input when editingQuestionId changes
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (editingQuestionId && editingInputRef.current) {
            try {
                editingInputRef.current.focus();
                editingInputRef.current.select();
            } catch (e) {}
        }
    }, [
        editingQuestionId
    ]);
    const renderPreviewForQuestion = (q, idx)=>{
        const requiredMark = q.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-600 ml-2",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
            lineNumber: 303,
            columnNumber: 39
        }, this) : null;
        switch(q.type){
            case 'text':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "mt-2 w-full rounded border p-2",
                            placeholder: "Answer"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this);
            case 'textarea':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "mt-2 w-full rounded border p-2",
                            rows: 4,
                            placeholder: "Answer"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 314,
                    columnNumber: 11
                }, this);
            case 'radio':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-1",
                            children: (q.options || []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: `q_${q.id}`
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 325,
                                            columnNumber: 76
                                        }, this),
                                        opt
                                    ]
                                }, i, true, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this);
            case 'checkbox':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-1",
                            children: (q.options || []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 336,
                                            columnNumber: 76
                                        }, this),
                                        opt
                                    ]
                                }, i, true, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this);
            case 'dropdown':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "mt-2 w-full rounded border p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Please select one"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                (q.options || []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: opt
                                    }, i, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 347,
                                        columnNumber: 65
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 343,
                    columnNumber: 11
                }, this);
            case 'date':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: q.value ? String(q.value).slice(0, 10) : '',
                                onChange: (e)=>setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                                                ...item,
                                                value: e.target.value ? new Date(e.target.value).toISOString() : null
                                            } : item)),
                                onFocus: (e)=>{
                                    const t = e.target;
                                    try {
                                        t.showPicker?.();
                                    } catch  {}
                                },
                                className: "mt-2 w-full rounded border p-2"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this);
            case 'phone':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: (el)=>{
                                        inputRefs.current[q.id] = el;
                                    },
                                    type: "tel",
                                    className: `mt-2 w-full rounded border p-2 ${q.value && !isValidPhone(q.value) ? 'border-red-500' : ''}`,
                                    placeholder: "Phone number",
                                    value: q.value || '',
                                    onChange: (e)=>{
                                        const formatted = formatPhone(e.target.value);
                                        setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                                                    ...item,
                                                    value: formatted
                                                } : item));
                                        // move caret to end after formatting
                                        setTimeout(()=>{
                                            const el = inputRefs.current[q.id];
                                            if (el) {
                                                const pos = (formatted || '').length;
                                                try {
                                                    el.setSelectionRange(pos, pos);
                                                } catch (err) {}
                                            }
                                        }, 0);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                q.value && !isValidPhone(q.value) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-red-600 mt-1",
                                    children: "Enter a 10-digit phone number"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 368,
                    columnNumber: 11
                }, this);
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: (el)=>{
                                        inputRefs.current[q.id] = el;
                                    },
                                    type: "email",
                                    className: `mt-2 w-full rounded border p-2 ${q.value && !isValidEmail(q.value) ? 'border-red-500' : ''}`,
                                    placeholder: "Email address",
                                    value: q.value || '',
                                    onChange: (e)=>{
                                        const formatted = formatEmail(e.target.value);
                                        setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                                                    ...item,
                                                    value: formatted
                                                } : item));
                                        setTimeout(()=>{
                                            const el = inputRefs.current[q.id];
                                            if (el) {
                                                const pos = (formatted || '').length;
                                                try {
                                                    el.setSelectionRange(pos, pos);
                                                } catch (err) {}
                                            }
                                        }, 0);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                q.value && !isValidEmail(q.value) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-red-600 mt-1",
                                    children: "Enter a valid email address"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 420,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 398,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: [
                                String(idx).padStart(2, '0'),
                                ". ",
                                q.label,
                                requiredMark
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "mt-2 w-full rounded border p-2",
                            placeholder: "Answer"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this)
                    ]
                }, q.id, true, {
                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                    lineNumber: 427,
                    columnNumber: 11
                }, this);
        }
    };
    const handleQuestionKey = (e, q)=>{
        if (e.key === 'Delete') {
            setParsedQuestions((s)=>s.filter((item)=>item.id !== q.id));
            return;
        }
        if (e.key === 'Enter') {
            // quick inline edit via prompt (keeps implementation simple)
            const newLabel = prompt('Edit question label', q.label);
            if (newLabel != null) {
                setParsedQuestions((s)=>s.map((item)=>item.id === q.id ? {
                            ...item,
                            label: newLabel
                        } : item));
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
    const handlePublish = async ()=>{
        const jobPayload = {
            title: 'New Job',
            description,
            requirements,
            minimumQualifications,
            benefits,
            scoringCriteria,
            includeQuestions
        };
        try {
            const res = await fetch('/api/post-job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobPayload)
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-white rounded-xl shadow border border-gray-200 mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-1",
                children: "Create New Job Posting"
            }, void 0, false, {
                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mb-4",
                children: "Fill in the details for your new job posting"
            }, void 0, false, {
                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center border-b mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTab("details"),
                        className: `px-4 py-2 -mb-px font-semibold ${tab === "details" ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-400"}`,
                        children: "JOB DETAILS"
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTab("questions"),
                        className: `px-4 py-2 -mb-px font-semibold ${tab === "questions" ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-400"}`,
                        children: "QUESTIONS"
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            tab === "details" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Basic Information"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Department"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select department"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-gray-500",
                                                children: "If not in the list, please specify:"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., New Department..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job / Exam Number *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., JOB2026-001"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Title *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., Web Developer..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Opening Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    onFocus: (e)=>{
                                                        const t = e.target;
                                                        try {
                                                            t.showPicker?.();
                                                        } catch  {}
                                                    },
                                                    className: "mt-1 block w-full rounded border border-red-300 px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Closing Date"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    onFocus: (e)=>{
                                                        const t = e.target;
                                                        try {
                                                            t.showPicker?.();
                                                        } catch  {}
                                                    },
                                                    className: "mt-1 block w-full rounded border border-gray-300 px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 548,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Review Date"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    onFocus: (e)=>{
                                                        const t = e.target;
                                                        try {
                                                            t.showPicker?.();
                                                        } catch  {}
                                                    },
                                                    className: "mt-1 block w-full rounded border border-gray-300 px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "continuous",
                                        type: "checkbox",
                                        className: "h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "continuous",
                                        className: "ml-2 text-sm",
                                        children: "Continuous"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Location *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "City"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "State"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 573,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "State"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 574,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "ZIP"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "5-digit ZIP Code"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 580,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Type *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 586,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select type"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 585,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Work Site"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select work site"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Level"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 598,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select level"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 600,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 599,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Classification *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select Classification"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-gray-500",
                                                children: "If not in the list, please specify:"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., New job classification..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 605,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Function *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 620,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select function"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-gray-500",
                                                children: "If not in the list, please specify:"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 626,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., New job function..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 625,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Job Category *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs text-gray-500",
                                                children: "If not in the list, please specify:"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 639,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., New job category..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 631,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 514,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Compensation"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Compensation Type"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Annual Salary"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Minimum Pay"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 656,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., 50,000.00"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Maximum Pay"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., 140,000.00"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 646,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Job Details"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Job Description *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$components$2f$editor$2f$QuillEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: description,
                                                onChange: setDescription,
                                                placeholder: "Please describe the role, responsibilities, and what a typical day looks like..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Requirements *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 676,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$components$2f$editor$2f$QuillEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: requirements,
                                                onChange: setRequirements,
                                                placeholder: "Please list the required qualifications, skills, and experience..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Benefits *"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$components$2f$editor$2f$QuillEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: benefits,
                                                onChange: setBenefits,
                                                placeholder: "Please describe the benefits and perks offered..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 669,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 667,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-1",
                                    children: "Minimum Qualifications (MQ)"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 3,
                                    value: minimumQualifications,
                                    onChange: (e)=>setMinimumQualifications(e.target.value),
                                    className: "w-full rounded border border-gray-300 p-3 text-sm",
                                    placeholder: "e.g., Bachelor's degree in relevant field OR 5 years equivalent experience; Valid driver's license required; Must pass background check..."
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 693,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 691,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 690,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Civil Service & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Bargaining Unit"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select professional unit"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 707,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Pay Grade"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 714,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2",
                                                placeholder: "e.g., Grade 12"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 713,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium",
                                                children: "Education"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "mt-1 block w-full rounded border border-red-300 px-3 py-2 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Select education"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 719,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 706,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 726,
                                                columnNumber: 60
                                            }, this),
                                            " Civil Service Exam"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 726,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 727,
                                                columnNumber: 60
                                            }, this),
                                            " Veteran Preference"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 727,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 728,
                                                columnNumber: 60
                                            }, this),
                                            " FLSA"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 728,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 729,
                                                columnNumber: 60
                                            }, this),
                                            " Driver's license"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 729,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 730,
                                                columnNumber: 60
                                            }, this),
                                            " Reference"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 725,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Scoring Criteria"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 734,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        value: scoringCriteria,
                                        onChange: (e)=>setScoringCriteria(e.target.value),
                                        className: "w-full rounded border border-gray-300 p-3 text-sm",
                                        placeholder: "Describe the scoring criteria and weights (e.g., Education 30%, Experience 40%, Skills 30%)..."
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 733,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePublish,
                            className: "bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 text-sm",
                            children: "Publish Job"
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 745,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                lineNumber: 512,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: includeQuestions,
                                    onChange: (e)=>setIncludeQuestions(e.target.checked),
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 755,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Include screening questions"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 756,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500 ml-2",
                                    children: "(Optional — only add questions if required for this job)"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 757,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 754,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this),
                    !includeQuestions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded p-4 bg-gray-50 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-3",
                                children: "Screening questions are disabled for this job."
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 764,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIncludeQuestions(true),
                                className: "px-3 py-2 bg-blue-600 text-white rounded text-sm",
                                children: "Enable Screening Questions"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 765,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 763,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-md p-4 flex items-center justify-between bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "36",
                                        height: "36",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2v6h6",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 770,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: "Upload PDF or Word document with pre-written questions here..."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Supported: .pdf, .doc, .docx"
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 776,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 774,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 769,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        className: "hidden",
                                        accept: ".pdf,.doc,.docx,.txt",
                                        onChange: async (e)=>{
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
                                                    const lines = text.split(/\r?\n/).map((l)=>l.trim()).filter(Boolean);
                                                    if (lines.length > 0) {
                                                        const q = lines.slice(0, 50).map((line)=>({
                                                                id: genId(),
                                                                type: 'text',
                                                                label: line,
                                                                category: defaultCategory,
                                                                required: true
                                                            }));
                                                        setParsedQuestions(q);
                                                        setTimeout(()=>{
                                                            if (q[0]?.id) setEditingQuestionId(q[0].id);
                                                        }, 0);
                                                    } else {
                                                        const single = {
                                                            id: genId(),
                                                            type: 'text',
                                                            label: file.name,
                                                            category: defaultCategory,
                                                            required: true
                                                        };
                                                        setParsedQuestions([
                                                            single
                                                        ]);
                                                        setTimeout(()=>setEditingQuestionId(single.id), 0);
                                                    }
                                                } catch (err) {
                                                    const fallback = {
                                                        id: genId(),
                                                        type: 'text',
                                                        label: `Uploaded: ${file.name} (parsing requires server)`,
                                                        category: defaultCategory
                                                    };
                                                    setParsedQuestions([
                                                        fallback
                                                    ]);
                                                    setTimeout(()=>setEditingQuestionId(fallback.id), 0);
                                                }
                                            } else {
                                                // upload file first to create job_document_version, then call parse endpoint with versionId
                                                try {
                                                    const arrayBuf = await file.arrayBuffer();
                                                    // prepare base64 for server upload
                                                    const bytes = new Uint8Array(arrayBuf);
                                                    let binary = '';
                                                    const chunk = 0x8000;
                                                    for(let i = 0; i < bytes.length; i += chunk){
                                                        const slice = bytes.subarray(i, i + chunk);
                                                        binary += String.fromCharCode.apply(null, Array.from(slice));
                                                    }
                                                    const b64 = btoa(binary);
                                                    // call upload endpoint to create job_document + version
                                                    let versionId = undefined;
                                                    try {
                                                        const up = await fetch('/api/post-job/upload-doc', {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({
                                                                name: file.name,
                                                                mime: file.type,
                                                                data: b64
                                                            })
                                                        });
                                                        const upJson = await up.json();
                                                        if (upJson && upJson.ok && upJson.versionId) versionId = upJson.versionId;
                                                    } catch (ux) {
                                                    // ignore upload failure and continue to parse without versionId
                                                    }
                                                    // parse using server, passing versionId if available
                                                    const res = await fetch('/api/post-job/parse-doc', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            name: file.name,
                                                            mime: file.type,
                                                            data: b64,
                                                            versionId
                                                        })
                                                    });
                                                    const json = await res.json();
                                                    // save any returned html/text for preview
                                                    // server may return HTML/text useful for parsing; we don't store client preview anymore
                                                    // prefer structured parsed array from new parser, fallback to text/html parsing
                                                    let parsed = [];
                                                    if (json && json.ok && Array.isArray(json.parsed) && json.parsed.length > 0) {
                                                        parsed = json.parsed.map((p)=>({
                                                                ...p,
                                                                category: p.category ?? defaultCategory
                                                            }));
                                                    } else {
                                                        const text = json && json.ok && json.text ? String(json.text) : json && json.html ? String(json.html).replace(/<[^>]+>/g, '\n') : '';
                                                        const blocks = text.split(/\n{2,}/).map((b)=>b.trim()).filter(Boolean).slice(0, 200);
                                                        const stripOpt = (s)=>s.replace(/^[\-\u2022\*\s]*/, '').replace(/^[0-9]+[\).]\s*/, '').replace(/^[a-zA-Z][\).]\s*/, '').trim();
                                                        for (const blk of blocks){
                                                            const lines = blk.split(/\r?\n/).map((l)=>l.trim()).filter(Boolean);
                                                            if (lines.length === 0) continue;
                                                            if (lines.length > 1) {
                                                                const opts = lines.slice(1).filter((l)=>/^([\-\u2022\*]|[0-9]+[\).]|[a-zA-Z][\).])/.test(l) || /^\s*[-•*]/.test(l));
                                                                if (opts.length >= 1) {
                                                                    const options = lines.slice(1).map(stripOpt).filter(Boolean);
                                                                    parsed.push({
                                                                        id: genId(),
                                                                        type: 'radio',
                                                                        label: lines[0],
                                                                        options,
                                                                        category: defaultCategory,
                                                                        required: true
                                                                    });
                                                                    continue;
                                                                }
                                                            }
                                                            parsed.push({
                                                                id: genId(),
                                                                type: 'text',
                                                                label: lines[0],
                                                                category: defaultCategory,
                                                                required: true
                                                            });
                                                        }
                                                        if (parsed.length === 0) parsed.push({
                                                            id: genId(),
                                                            type: 'text',
                                                            label: `Uploaded: ${file.name} (no parseable content)`,
                                                            category: defaultCategory,
                                                            required: true
                                                        });
                                                    }
                                                    setParsedQuestions(parsed);
                                                    if (parsed.length > 0) setTimeout(()=>setEditingQuestionId(parsed[0].id), 0);
                                                } catch (err) {
                                                    const fallback2 = {
                                                        id: genId(),
                                                        type: 'text',
                                                        label: `Uploaded: ${file.name} (parsing requires server)`,
                                                        category: defaultCategory
                                                    };
                                                    setParsedQuestions([
                                                        fallback2
                                                    ]);
                                                    setTimeout(()=>setEditingQuestionId(fallback2.id), 0);
                                                }
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 780,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "inline-flex items-center gap-2 px-3 py-2 bg-white border rounded text-sm hover:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 5v14",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 12l-7-7-7 7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 884,
                                                columnNumber: 17
                                            }, this),
                                            "Upload Questions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, this),
                                    uploadedFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: !showDeleteConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowDeleteConfirm(true),
                                            className: "inline-flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded text-sm text-red-600 hover:bg-red-100",
                                            children: "Delete Upload"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 893,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700 mr-2",
                                                    children: "Confirm delete?"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setUploadedFileName(null);
                                                        setParsedQuestions([]);
                                                        if (fileInputRef.current) fileInputRef.current.value = '';
                                                        setShowDeleteConfirm(false);
                                                    },
                                                    className: "px-3 py-1 bg-red-600 text-white rounded text-sm",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowDeleteConfirm(false),
                                                    className: "px-3 py-1 bg-white border rounded text-sm",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 897,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 891,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 768,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-600",
                                children: "Default category for new questions:"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 914,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: defaultCategory,
                                onChange: (e)=>setDefaultCategory(e.target.value),
                                className: "rounded border px-2 py-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "agency",
                                        children: "Agency-Wide Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 916,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "job",
                                        children: "Job-Specific Supplemental Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 917,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 915,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPreviewAsApplicant((s)=>!s),
                                    "aria-pressed": previewAsApplicant,
                                    className: `inline-flex items-center gap-2 px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 ${previewAsApplicant ? 'bg-blue-600 text-white border border-blue-700 hover:bg-blue-700' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: `${previewAsApplicant ? 'text-white' : 'text-gray-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.25",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 927,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "3",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.25"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 928,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 926,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Preview as applicant"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 930,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                    lineNumber: 920,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 919,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 913,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-2",
                                children: "Screening Questions"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 936,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-4",
                                children: "Build custom screening questions for applicants by clicking form elements."
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 937,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border rounded p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium mb-3",
                                                    children: "Form Elements"
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'text', 'Short answer'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'text',
                                                                    label: 'Short answer',
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Text Input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Single line text"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 949,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'textarea', 'Long answer'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'textarea',
                                                                    label: 'Long answer',
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Text Area"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Multi-line text"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 951,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'checkbox', 'Choose options'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'checkbox',
                                                                    label: 'Choose options',
                                                                    options: [
                                                                        'Option 1',
                                                                        'Option 2'
                                                                    ],
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Checkbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Multiple choice"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 958,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'radio', 'Choose one'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'radio',
                                                                    label: 'Choose one',
                                                                    options: [
                                                                        'Option A',
                                                                        'Option B'
                                                                    ],
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Radio Buttons"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Single choice"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'dropdown', 'Select'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'dropdown',
                                                                    label: 'Select',
                                                                    options: [
                                                                        'One',
                                                                        'Two'
                                                                    ],
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Dropdown"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 976,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Select from list"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 977,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'date', 'Select date'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'date',
                                                                    label: 'Select date',
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 983,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Date picker"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 984,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'phone', 'Phone'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'phone',
                                                                    label: 'Phone',
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 990,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Phone number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 991,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 986,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handlePaletteDragStart(e, 'email', 'Email'),
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const q = {
                                                                    id: genId(),
                                                                    type: 'email',
                                                                    label: 'Email',
                                                                    category: defaultCategory,
                                                                    required: true
                                                                };
                                                                addQuestion(q);
                                                            },
                                                            className: "text-left p-3 border rounded bg-white hover:shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 997,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "Email address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 998,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 941,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 940,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-h-[16rem] border-2 border-dashed rounded-lg p-4 bg-white space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onDragOver: handleAllowDrop,
                                                    onDrop: (e)=>handleDropOnCategory(e, 'agency'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Agency-Wide Questions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 1009,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        parsedQuestions.filter((q)=>q.category === 'agency').length,
                                                                        " items"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 1010,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 21
                                                        }, this),
                                                        parsedQuestions.filter((q)=>q.category === 'agency').length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded p-4 bg-gray-50 text-center text-sm text-gray-400",
                                                            children: "No agency-wide questions. Click an element to add."
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: parsedQuestions.filter((q)=>q.category === 'agency').map(renderQuestionCard)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onDragOver: handleAllowDrop,
                                                    onDrop: (e)=>handleDropOnCategory(e, 'job'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium",
                                                                    children: "Job-Specific Supplemental Questions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 1024,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        parsedQuestions.filter((q)=>q.category === 'job').length,
                                                                        " items"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1023,
                                                            columnNumber: 21
                                                        }, this),
                                                        parsedQuestions.filter((q)=>q.category === 'job').length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded p-4 bg-gray-50 text-center text-sm text-gray-400",
                                                            children: "No job-specific questions. Click an element to add."
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1028,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: parsedQuestions.filter((q)=>q.category === 'job').map(renderQuestionCard)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 935,
                        columnNumber: 11
                    }, this),
                    previewAsApplicant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-base mb-3",
                                children: "Preview — Applicant View"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 1042,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded p-4 bg-white",
                                children: (()=>{
                                    const agencyQs = parsedQuestions.filter((q)=>q.category === 'agency');
                                    const jobQs = parsedQuestions.filter((q)=>q.category === 'job');
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            agencyQs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-center",
                                                        children: "Agency-Wide Questions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: agencyQs.map((q, i)=>renderPreviewForQuestion(q, i + 1))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 1052,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 29
                                            }, this),
                                            jobQs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-center",
                                                        children: "Supplemental Questions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: jobQs.map((q, i)=>renderPreviewForQuestion(q, i + 1))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                        lineNumber: 1061,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 1059,
                                                columnNumber: 29
                                            }, this),
                                            agencyQs.length === 0 && jobQs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400 text-center",
                                                children: "No screening questions to preview."
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                                lineNumber: 1068,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 1043,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 1041,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePublish,
                                className: "bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 text-sm",
                                children: "Publish Job"
                            }, void 0, false, {
                                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                                lineNumber: 1081,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                            lineNumber: 1080,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                        lineNumber: 1079,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
                lineNumber: 752,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projobs/src/components/postjob/PostJobForm.tsx",
        lineNumber: 490,
        columnNumber: 5
    }, this);
}
async function handlePublishClientSide(questions) {
    // slim wrapper to POST the questions to server batch endpoint
    const res = await fetch('/api/jobs/questions/batch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jobId: null,
            questions
        })
    });
    return res.json();
}
}),
];

//# sourceMappingURL=projobs_src_components_caa76518._.js.map