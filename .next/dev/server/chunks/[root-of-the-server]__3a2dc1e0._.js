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
"[project]/projobs/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/projobs/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/projobs/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const globalForPrisma = globalThis;
const prismaClientSingleton = ()=>{
    const connectionString = process.env.DATABASE_URL;
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f$pg$29$__["Pool"]({
        connectionString
    });
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$projobs$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        log: [
            "query"
        ],
        adapter
    });
};
const db = globalForPrisma.prisma ?? prismaClientSingleton();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/projobs/src/app/api/search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$meilisearch$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/meilisearch/dist/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Initialize Meilisearch Client
// Note: In production, use process.env.MEILISEARCH_HOST and process.env.MEILISEARCH_KEY
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$meilisearch$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeiliSearch"]({
    host: process.env.MEILISEARCH_HOST || 'http://127.0.0.1:7700',
    apiKey: process.env.MEILISEARCH_KEY || 'masterKey'
});
const INDEX_NAME = 'projobs_search';
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const taxonomy = searchParams.get('taxonomy');
    const query = searchParams.get('q');
    if (taxonomy === 'categories') {
        const cats = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"]?.job_category?.findMany?.({
            select: {
                name: true,
                category_id: true
            }
        }) ?? [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(cats.map((c)=>({
                name: c.name,
                id: c.category_id
            })));
    }
    if (taxonomy === 'functions') {
        const funcs = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"]?.job_function?.findMany?.({
            select: {
                name: true,
                function_id: true
            }
        }) ?? [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(funcs.map((f)=>({
                name: f.name,
                id: f.function_id
            })));
    }
    if (taxonomy === 'locations') {
        // TODO: Implement locations taxonomy
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
    if (!query) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
    try {
        const index = client.index(INDEX_NAME);
        // --- AUTO-SEEDING FOR DEMO PURPOSES ---
        // In a real app, you would run a seeding script separately.
        // Here, we check if the index exists/has documents on every search to ensure it works out-of-the-box.
        try {
            const stats = await index.getStats();
            if (stats.numberOfDocuments === 0) {
                await seedData(index);
            }
        } catch (e) {
            if (e.code === 'index_not_found') {
                await client.createIndex(INDEX_NAME, {
                    primaryKey: 'id'
                });
                await seedData(index);
            }
        }
        // --------------------------------------
        const runSearch = async ()=>index.search(query, {
                limit: 100,
                attributesToRetrieve: [
                    'text',
                    'type'
                ],
                attributesToSearchOn: [
                    'text'
                ],
                showMatchesPosition: true
            });
        let searchResults = await runSearch();
        // If nothing comes back (stale/empty index), force a reseed once and retry
        if (searchResults.hits.length === 0) {
            await seedData(index);
            searchResults = await runSearch();
        }
        console.log(`Query: "${query}" -> Hits: ${searchResults.hits.length}`);
        // Return objects with text and type
        const results = searchResults.hits.map((hit)=>({
                text: hit.text,
                type: hit.type || 'unknown'
            })).filter((item)=>typeof item.text === 'string' && item.text.length > 0);
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(results);
    } catch (error) {
        console.error("Meilisearch Error:", error);
        // Fallback: If Meilisearch is down, return empty to prevent UI crash
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
}
async function seedData(index) {
    console.log("Seeding Meilisearch Index from Database...");
    const catClient = __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"]?.jobCategory;
    const funcClient = __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"]?.jobFunction;
    const categories = catClient?.findMany ? await catClient.findMany() : [];
    const functions = funcClient?.findMany ? await funcClient.findMany() : [];
    const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].job.findMany();
    // Transform data into flat searchable objects
    const categoryDocs = categories.map((c)=>({
            id: `cat-${c.category_id}`,
            text: c.name,
            type: 'category'
        }));
    const functionDocs = functions.map((f)=>({
            id: `func-${f.function_id}`,
            text: f.name,
            type: 'function'
        }));
    const jobDocs = jobs.map((j)=>({
            id: `job-${j.id}`,
            text: j.title || '',
            company: j.metadata && j.metadata.company || null,
            type: 'job'
        })).filter((doc)=>doc.text.length > 0);
    // Also index company names separately for better discovery
    const companyDocs = Array.from(new Set(jobs.map((j)=>j.metadata && j.metadata.company || null))).filter(Boolean).map((c, i)=>({
            id: `comp-${i}`,
            text: c,
            type: 'company'
        }));
    const organizationDocs = Array.from(new Set(jobs.map((j)=>j.metadata && j.metadata.organization || null))).filter(Boolean).map((a, i)=>({
            id: `organization-${i}`,
            text: a,
            type: 'organization'
        }));
    const documents = [
        ...categoryDocs,
        ...functionDocs,
        ...jobDocs,
        ...companyDocs,
        ...organizationDocs
    ];
    const task = await index.addDocuments(documents);
    console.log(`Seeding task enqueued: ${task.taskUid}`);
    // Wait for the indexing to finish before searching (crucial for first-run experience)
    await client.waitForTask(task.taskUid);
    console.log(`Seeding complete.`);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a2dc1e0._.js.map