import { NextResponse } from 'next/server';
import { MeiliSearch } from 'meilisearch';
import { db } from '@/lib/db';

// Initialize Meilisearch Client
// Note: In production, use process.env.MEILISEARCH_HOST and process.env.MEILISEARCH_KEY
const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST || 'http://127.0.0.1:7700',
  apiKey: process.env.MEILISEARCH_KEY || 'masterKey',
});

const INDEX_NAME = 'projobs_search';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const taxonomy = searchParams.get('taxonomy');
  const query = searchParams.get('q');

  if (taxonomy === 'categories') {
    const cats = await (db as any)?.job_category?.findMany?.({ select: { name: true, category_id: true } }) ?? [];
    return NextResponse.json(cats.map((c: any) => ({ name: c.name, id: c.category_id })));
  }

  if (taxonomy === 'functions') {
    const funcs = await (db as any)?.job_function?.findMany?.({ select: { name: true, function_id: true } }) ?? [];
    return NextResponse.json(funcs.map((f: any) => ({ name: f.name, id: f.function_id })));
  }

  if (taxonomy === 'locations') {
    // TODO: Implement locations taxonomy
    return NextResponse.json([]);
  }

  if (!query) {
    return NextResponse.json([]);
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
    } catch (e: any) {
      if (e.code === 'index_not_found') {
        await client.createIndex(INDEX_NAME, { primaryKey: 'id' });
        await seedData(index);
      }
    }
    // --------------------------------------

    const runSearch = async () => index.search(query, {
      limit: 100, // Increased limit to ensure we get enough mixed results to sort
      attributesToRetrieve: ['text', 'type'],
      attributesToSearchOn: ['text'],
      showMatchesPosition: true,
    });

    let searchResults = await runSearch();

    // If nothing comes back (stale/empty index), force a reseed once and retry
    if (searchResults.hits.length === 0) {
      await seedData(index);
      searchResults = await runSearch();
    }

    console.log(`Query: "${query}" -> Hits: ${searchResults.hits.length}`);

    // Return objects with text and type
    const results = searchResults.hits
      .map((hit: any) => ({ 
        text: hit.text, 
        type: hit.type || 'unknown' 
      }))
      .filter((item: any) => typeof item.text === 'string' && item.text.length > 0);
    
    return NextResponse.json(results);

  } catch (error) {
    console.error("Meilisearch Error:", error);
    // Fallback: If Meilisearch is down, return empty to prevent UI crash
    return NextResponse.json([]);
  }
}

async function seedData(index: any) {
  console.log("Seeding Meilisearch Index from Database...");
  const catClient = (db as any)?.jobCategory;
  const funcClient = (db as any)?.jobFunction;
  const categories = catClient?.findMany ? await catClient.findMany() : [];
  const functions = funcClient?.findMany ? await funcClient.findMany() : [];
  const jobs = await db.job.findMany();

  // Transform data into flat searchable objects
  const categoryDocs = categories.map((c: any) => ({
    id: `cat-${c.category_id}`,
    text: c.name,
    type: 'category'
  }));

  const functionDocs = functions.map((f: any) => ({
    id: `func-${f.function_id}`,
    text: f.name,
    type: 'function'
  }));

  const jobDocs = jobs.map((j) => ({
    id: `job-${j.id}`,
    text: j.title || '',
    company: (j.metadata && (j.metadata as any).company) || null,
    type: 'job'
  })).filter(doc => doc.text.length > 0);
  
  // Also index company names separately for better discovery
  const companyDocs = Array.from(new Set(jobs.map(j => (j.metadata && (j.metadata as any).company) || null)))
    .filter(Boolean)
    .map((c, i) => ({
       id: `comp-${i}`,
       text: c,
       type: 'company'
    }));

  const organizationDocs = Array.from(new Set(jobs.map(j => (j.metadata && (j.metadata as any).organization) || null)))
    .filter(Boolean)
    .map((a, i) => ({
       id: `organization-${i}`,
       text: a,
       type: 'organization'
    }));

  const documents = [...categoryDocs, ...functionDocs, ...jobDocs, ...companyDocs, ...organizationDocs];

  const task = await index.addDocuments(documents);
  console.log(`Seeding task enqueued: ${task.taskUid}`);
  
  // Wait for the indexing to finish before searching (crucial for first-run experience)
  await (client as any).waitForTask(task.taskUid);
  console.log(`Seeding complete.`);
}
