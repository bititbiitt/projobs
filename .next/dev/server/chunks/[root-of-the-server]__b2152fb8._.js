module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/projobs/src/app/api/post-job/upload-doc/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { name, mime, data, blobUri, jobId, tenantId, uploadedBy } = body;
        const buffer = data ? Buffer.from(data, 'base64') : Buffer.alloc(0);
        const fileHash = data ? __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(buffer).digest('hex') : null;
        const fileSize = buffer.length || null;
        try {
            const mod = await __turbopack_context__.A("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/projobs/node_modules/@prisma/client, async loader)");
            const prisma = new mod.PrismaClient();
            // create job_document minimal record
            const doc = await prisma.job_document.create({
                data: {
                    tenant_id: tenantId ?? null,
                    job_id: jobId ?? null,
                    file_name: name ?? null,
                    current_blob_uri: blobUri ?? null,
                    current_version_num: 1,
                    uploaded_by: uploadedBy ?? null
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
                    ocr_used: mime === 'application/pdf'
                }
            });
            // update document to reflect current version
            await prisma.job_document.update({
                where: {
                    id: doc.id
                },
                data: {
                    current_version_num: version.version_num,
                    current_blob_uri: version.blob_uri
                }
            });
            try {
                await prisma.$disconnect();
            } catch (e) {}
            return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                jobDocumentId: doc.id,
                versionId: version.id
            });
        } catch (e) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: String(e)
            }, {
                status: 500
            });
        }
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b2152fb8._.js.map