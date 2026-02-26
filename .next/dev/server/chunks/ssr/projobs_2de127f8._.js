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
"[project]/projobs/src/components/postjob/PostJobForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/projobs/src/components/postjob/PostJobForm.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/projobs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/projobs/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=projobs_2de127f8._.js.map