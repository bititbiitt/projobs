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
"[project]/projobs/src/lib/views.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getUserPreferenceByUserId",
    ()=>getUserPreferenceByUserId,
    "getZipGeoById",
    ()=>getZipGeoById,
    "listAiEmbeddings",
    ()=>listAiEmbeddings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function getZipGeoById(id) {
    const rec = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].zipGeoView.findUnique({
        where: {
            zipCode: id
        }
    });
    if (!rec) return null;
    let geom = null;
    try {
        if (rec.locationGeomJson) geom = rec.locationGeomJson;
    } catch (e) {
        geom = null;
    }
    return {
        zipCode: rec.zipCode,
        latitude: rec.latitude ?? null,
        longitude: rec.longitude ?? null,
        location: geom
    };
}
async function getUserPreferenceByUserId(userId) {
    const rec = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].userPreferenceView.findUnique({
        where: {
            userId
        }
    });
    if (!rec) return null;
    return {
        userId: rec.userId,
        zipGeoId: rec.zipGeoId ?? null,
        defaultRadiusMiles: rec.defaultRadiusMiles ?? null,
        skillsSummary: rec.skillsSummary ?? null,
        resumeVectorText: rec.resumeVectorText ?? null,
        jobAlertEnabled: rec.jobAlertEnabled ?? null,
        createdAt: rec.createdAt,
        updatedAt: rec.updatedAt
    };
}
async function listAiEmbeddings(namespace, key) {
    const where = {};
    if (namespace) where.namespace = namespace;
    if (key) where.key = key;
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].aiEmbeddingStoreView.findMany({
        where
    });
    return rows.map((r)=>({
            id: r.id,
            namespace: r.namespace,
            key: r.key,
            text: r.text,
            embeddingText: r.embeddingText ?? null,
            createdAt: r.createdAt
        }));
}
const __TURBOPACK__default__export__ = {};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/projobs/src/app/api/jobs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$views$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/src/lib/views.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$views$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$views$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const PAGE_SIZE_DEFAULT = 20;
const dateRanges = {
    '24h': 1,
    week: 7,
    month: 30,
    '3months': 90
};
function mapSalaryOrder(salary) {
    if (!salary) return null;
    const digits = salary.replace(/[^0-9.-]/g, '');
    const num = Number(digits);
    return Number.isFinite(num) ? num : null;
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const q = searchParams.get('q') || '';
        const location = searchParams.get('location') || '';
        const radius = searchParams.get('radius') || '';
        const getAll = (key)=>searchParams.getAll(key).map((v)=>v.trim()).filter(Boolean);
        const categories = getAll('category');
        const jobFunctions = getAll('jobFunction');
        const jobTypes = getAll('jobType');
        const jobLevels = getAll('jobLevel');
        const salarySelections = getAll('salary');
        const workSites = getAll('workSite');
        const dateRangeSelections = getAll('dateRange');
        const dateRange = searchParams.get('dateRange') || '';
        const page = Math.max(1, Number(searchParams.get('page') || '1'));
        const pageSize = Math.max(1, Number(searchParams.get('pageSize') || PAGE_SIZE_DEFAULT));
        const andConditions = [];
        if (q) {
            andConditions.push({
                OR: [
                    // Strict prefix matching for main fields
                    {
                        title: {
                            startsWith: q,
                            mode: 'insensitive'
                        }
                    },
                    {
                        job_function: {
                            name: {
                                startsWith: q,
                                mode: 'insensitive'
                            }
                        }
                    },
                    {
                        job_category: {
                            name: {
                                startsWith: q,
                                mode: 'insensitive'
                            }
                        }
                    },
                    {
                        organization: {
                            startsWith: q,
                            mode: 'insensitive'
                        }
                    },
                    // Fallback Search: Search partial match in Job Details Description
                    // This ensures queries like "COBOL" or "12345" return results even if not in the title.
                    {
                        job_detail: {
                            description: {
                                contains: q,
                                mode: 'insensitive'
                            }
                        }
                    }
                ]
            });
        }
        if (location) {
            // TODO: Implement geospatial search
            // For now, simple string match
            andConditions.push({
                location: {
                    contains: location,
                    mode: 'insensitive'
                }
            });
        }
        if (categories.length) {
            andConditions.push({
                jobCategory: {
                    slug: {
                        in: categories
                    }
                }
            });
        }
        if (jobFunctions.length) {
            andConditions.push({
                jobFunction: {
                    slug: {
                        in: jobFunctions
                    }
                }
            });
        }
        if (jobTypes.length) {
            andConditions.push({
                type: {
                    in: jobTypes
                }
            });
        }
        if (jobLevels.length) {
            andConditions.push({
                level: {
                    in: jobLevels
                }
            });
        }
        if (workSites.length) {
            andConditions.push({
                workspace: {
                    in: workSites
                }
            });
        }
        const salaryBuckets = {
            '0-30': [
                '0',
                '30'
            ],
            '31-60': [
                '31',
                '60'
            ],
            '61-100': [
                '61',
                '100'
            ],
            '101-150': [
                '101',
                '150'
            ],
            '151-200': [
                '151',
                '200'
            ],
            '201-250': [
                '201',
                '250'
            ],
            '251-300': [
                '251',
                '300'
            ],
            '301-350': [
                '301',
                '350'
            ],
            '350plus': [
                '351'
            ]
        };
        const salarySort = salarySelections.find((v)=>v === 'highest' || v === 'lowest') || '';
        const salaryFilters = salarySelections.filter((v)=>salaryBuckets[v]);
        if (salaryFilters.length) {
            const salaryOr = salaryFilters.map((bucketKey)=>{
                const bounds = salaryBuckets[bucketKey];
                const minK = parseInt(bounds[0], 10);
                const maxK = bounds.length > 1 ? parseInt(bounds[1], 10) : null;
                const filterMin = minK * 1000;
                const filterMax = maxK ? maxK * 1000 : null;
                // Overlap logic: 
                // Job.maxPay >= Filter.min AND Job.minPay <= Filter.max
                const condition = {
                    AND: [
                        {
                            maxPay: {
                                gte: filterMin
                            }
                        } // Job must reach at least the start of the bucket
                    ]
                };
                if (filterMax !== null) {
                    condition.AND.push({
                        minPay: {
                            lte: filterMax
                        }
                    }); // Job start must be within (or before) the bucket end
                }
                return condition;
            });
            andConditions.push({
                OR: salaryOr
            });
        }
        // Radius logic is handled in the 'if (location)' block above
        const where = andConditions.length ? {
            AND: andConditions
        } : {};
        // Base sort order (excluding feature pinning which is handled manually)
        let baseOrderBy = [
            {
                created_at: 'desc'
            }
        ];
        if (dateRange === 'oldest') {
            baseOrderBy = [
                {
                    createdAt: 'asc'
                }
            ];
        } else if (salarySort === 'highest') {
            baseOrderBy = [
                {
                    salary_range: 'desc'
                },
                {
                    created_at: 'desc'
                }
            ];
        } else if (salarySort === 'lowest') {
            baseOrderBy = [
                {
                    salary_range: 'asc'
                },
                {
                    created_at: 'desc'
                }
            ];
        }
        // NOTE: No explicit `featured` column exists in the current schema.
        // Disable pinned/featured handling and fetch a single unified list.
        const pinnedJobs = [];
        const pinnedIds = [];
        // 2. Determine "Main List" Constraints
        // The main list is "All jobs matching filters, excluding the ones we just pinned".
        const mainWhere = {
            ...where
        };
        const totalMain = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].job.count({
            where: mainWhere
        });
        const total = totalMain;
        // 3. Calculate Pagination for the "Virtual List"
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        let resultItems = [];
        // Case A: Request overlaps with Pinned Jobs
        if (start < pinnedIds.length) {
            // Add the pinned jobs that fall within the requested range
            // e.g. if start=0, take all pinned. if start=1, take 1 pinned.
            const pinnedSlice = pinnedJobs.slice(start, end);
            resultItems = resultItems.concat(pinnedSlice);
        }
        // Case B: Request overlaps with Main List
        // We need to fetch from the main list if we haven't filled the page size yet
        if (resultItems.length < pageSize) {
            const remainingSlots = pageSize - resultItems.length;
            // Calculate offset into the main list
            // If start was 0, we need Main[0...remaining]
            // If start was > pinned.length (page 2+), we need Main[start - pinned.length ... ]
            const mainSkip = Math.max(0, start - pinnedIds.length);
            const mainItems = await __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].job.findMany({
                where: mainWhere,
                skip: mainSkip,
                take: remainingSlots,
                orderBy: baseOrderBy,
                select: {
                    id: true,
                    title: true,
                    metadata: true,
                    job_location: {
                        take: 1,
                        select: {
                            zip_geo: true,
                            address: true
                        }
                    },
                    created_at: true,
                    job_category_selection: {
                        select: {
                            job_category: {
                                select: {
                                    name: true
                                }
                            }
                        },
                        take: 1
                    },
                    job_function_selection: {
                        select: {
                            job_function: {
                                select: {
                                    name: true
                                }
                            }
                        },
                        take: 1
                    },
                    job_detail: {
                        select: {
                            job_title: true,
                            description: true,
                            min_pay: true,
                            max_pay: true,
                            opening_date: true,
                            closing_date: true,
                            review_date: true
                        }
                    }
                }
            });
            resultItems = resultItems.concat(mainItems);
        }
        // Format Response
        let items = resultItems.map((job)=>({
                id: job.id,
                title: job.title || job.job_detail?.job_title || null,
                company: null,
                organization: null,
                location: job.job_location?.[0]?.address || null,
                zipCode: job.job_location?.[0]?.zip_geo || null,
                latitude: null,
                longitude: null,
                salaryRange: null,
                minPay: job.job_detail?.min_pay ? Number(job.job_detail.min_pay) : null,
                maxPay: job.job_detail?.max_pay ? Number(job.job_detail.max_pay) : null,
                type: null,
                level: null,
                workspace: null,
                featured: job.metadata && job.metadata.featured ? true : false,
                slug: null,
                description: job.job_detail?.description || null,
                createdAt: job.created_at ? job.created_at.toISOString() : null,
                jobCategory: job.job_category_selection?.[0]?.job_category ? {
                    name: job.job_category_selection[0].job_category.name
                } : null,
                jobFunction: job.job_function_selection?.[0]?.job_function ? {
                    name: job.job_function_selection[0].job_function.name
                } : null,
                applyUrl: `/jobs/${job.id}`
            }));
        // Enrich coordinates using zip geo view helper for any items with zip codes
        try {
            const zipSet = new Set(items.map((i)=>i.zipCode).filter(Boolean));
            const zipList = Array.from(zipSet);
            const zipRows = await Promise.all(zipList.map((z)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$src$2f$lib$2f$views$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getZipGeoById"])(z)));
            const zipMap = {};
            zipRows.forEach((r)=>{
                if (r) zipMap[r.zipCode] = r;
            });
            items = items.map((it)=>{
                if (it.zipCode && zipMap[it.zipCode]) {
                    return {
                        ...it,
                        latitude: zipMap[it.zipCode].latitude,
                        longitude: zipMap[it.zipCode].longitude
                    };
                }
                return it;
            });
        } catch (e) {
            // non-fatal: leave lat/long null if enrichment fails
            console.warn('zip geo enrichment failed', e);
        }
        const hasMore = start + resultItems.length < total;
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            items,
            total,
            page,
            pageSize,
            hasMore
        });
    } catch (error) {
        console.error("Jobs API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            items: [],
            total: 0,
            page: 1,
            pageSize: 20,
            hasMore: false,
            error: error instanceof Error ? error.message : "Internal Server Error"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__42b053e2._.js.map