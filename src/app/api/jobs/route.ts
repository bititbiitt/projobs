import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getZipGeoById } from '@/lib/views';

const PAGE_SIZE_DEFAULT = 20;

const dateRanges: Record<string, number> = {
  '24h': 1,
  week: 7,
  month: 30,
  '3months': 90,
};

function mapSalaryOrder(salary: string | null | undefined) {
  if (!salary) return null;
  const digits = salary.replace(/[^0-9.-]/g, '');
  const num = Number(digits);
  return Number.isFinite(num) ? num : null;
}

export async function GET(request: Request) {
  try {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get('q') || '';
  const location = searchParams.get('location') || '';
  const radius = searchParams.get('radius') || '';

  const getAll = (key: string) => searchParams.getAll(key).map((v) => v.trim()).filter(Boolean);

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

  const andConditions: any[] = [];

  if (q) {
    andConditions.push({
      OR: [
        // Strict prefix matching for main fields
        { title: { startsWith: q, mode: 'insensitive' } },
        { job_function: { name: { startsWith: q, mode: 'insensitive' } } },
        { job_category: { name: { startsWith: q, mode: 'insensitive' } } },
        { organization: { startsWith: q, mode: 'insensitive' } },
        // Fallback Search: Search partial match in Job Details Description
        // This ensures queries like "COBOL" or "12345" return results even if not in the title.
        { job_detail: { description: { contains: q, mode: 'insensitive' } } }
      ],
    });
  }

  if (location) {
    // TODO: Implement geospatial search
    // For now, simple string match
    andConditions.push({ location: { contains: location, mode: 'insensitive' } });
  }

  if (categories.length) {
    andConditions.push({ jobCategory: { slug: { in: categories } } });
  }

  if (jobFunctions.length) {
    andConditions.push({ jobFunction: { slug: { in: jobFunctions } } });
  }

  if (jobTypes.length) {
    andConditions.push({ type: { in: jobTypes } });
  }

  if (jobLevels.length) {
    andConditions.push({ level: { in: jobLevels } });
  }

  if (workSites.length) {
    andConditions.push({ workspace: { in: workSites } });
  }

  const salaryBuckets: Record<string, string[]> = {
    '0-30': ['0', '30'],
    '31-60': ['31', '60'],
    '61-100': ['61', '100'],
    '101-150': ['101', '150'],
    '151-200': ['151', '200'],
    '201-250': ['201', '250'],
    '251-300': ['251', '300'],
    '301-350': ['301', '350'],
    '350plus': ['351'],
  };

  const salarySort = salarySelections.find((v) => v === 'highest' || v === 'lowest') || '';
  const salaryFilters = salarySelections.filter((v) => salaryBuckets[v]);

  if (salaryFilters.length) {
    const salaryOr = salaryFilters.map((bucketKey) => {
      const bounds = salaryBuckets[bucketKey];
      const minK = parseInt(bounds[0], 10);
      const maxK = bounds.length > 1 ? parseInt(bounds[1], 10) : null;
      
      const filterMin = minK * 1000;
      const filterMax = maxK ? maxK * 1000 : null;

      // Overlap logic: 
      // Job.maxPay >= Filter.min AND Job.minPay <= Filter.max
      const condition: any = {
        AND: [
          { maxPay: { gte: filterMin } } // Job must reach at least the start of the bucket
        ]
      };

      if (filterMax !== null) {
        condition.AND.push({ minPay: { lte: filterMax } }); // Job start must be within (or before) the bucket end
      }

      return condition;
    });
    
    andConditions.push({ OR: salaryOr });
  }

  // Radius logic is handled in the 'if (location)' block above

  const where = andConditions.length ? { AND: andConditions } : {};

  // Base sort order (excluding feature pinning which is handled manually)
  let baseOrderBy: any[] = [{ created_at: 'desc' }];

  if (dateRange === 'oldest') {
    baseOrderBy = [{ createdAt: 'asc' }];
  } else if (salarySort === 'highest') {
    baseOrderBy = [{ salary_range: 'desc' }, { created_at: 'desc' }];
  } else if (salarySort === 'lowest') {
    baseOrderBy = [{ salary_range: 'asc' }, { created_at: 'desc' }];
  }

  // NOTE: No explicit `featured` column exists in the current schema.
  // Disable pinned/featured handling and fetch a single unified list.
  const pinnedJobs: any[] = [];
  const pinnedIds: string[] = [];

  // 2. Determine "Main List" Constraints
  // The main list is "All jobs matching filters, excluding the ones we just pinned".
  const mainWhere = { ...where };
  const totalMain = await db.job.count({ where: mainWhere });
  const total = totalMain;
  
  // 3. Calculate Pagination for the "Virtual List"
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  let resultItems: any[] = [];

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
    
    const mainItems = await db.job.findMany({
      where: mainWhere,
      skip: mainSkip,
      take: remainingSlots,
      orderBy: baseOrderBy,
      select: {
        id: true,
        title: true,
        metadata: true,
        is_featured: true,
        created_at: true
      },
    });
    
    resultItems = resultItems.concat(mainItems);
  }

  // Format Response
  let items: any[] = resultItems.map((job) => ({
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
    featured: typeof job.is_featured !== 'undefined' ? Boolean(job.is_featured) : ((job.metadata && (job.metadata as any).featured) ? true : false),
    slug: null,
    description: job.job_detail?.description || null,
    createdAt: job.created_at ? job.created_at.toISOString() : null,
    jobCategory: job.job_category_selection?.[0]?.job_category ? { name: job.job_category_selection[0].job_category.name } : null,
    jobFunction: job.job_function_selection?.[0]?.job_function ? { name: job.job_function_selection[0].job_function.name } : null,
    applyUrl: `/jobs/${job.id}`,
  }));

  // Enrich coordinates using the zip_geo_view directly for any items with zip codes
  try {
    const zipSet = new Set(items.map(i => i.zipCode).filter(Boolean));
    const zipList = Array.from(zipSet) as string[];
    if (zipList.length > 0) {
      // Build a safe IN list (simple escaping for single quotes)
      const inList = zipList.map(z => `'${String(z).replace(/'/g, "''")}'`).join(',');
      const rows: any[] = await db.$queryRawUnsafe(`SELECT zip_code, latitude, longitude FROM zip_geo_view WHERE zip_code IN (${inList})`);
      const zipMap: Record<string, any> = {};
      rows.forEach(r => { if (r && r.zip_code) zipMap[String(r.zip_code)] = r; });
      items = items.map(it => {
        if (it.zipCode && zipMap[it.zipCode]) {
          return { ...it, latitude: zipMap[it.zipCode].latitude ? Number(zipMap[it.zipCode].latitude) : null, longitude: zipMap[it.zipCode].longitude ? Number(zipMap[it.zipCode].longitude) : null };
        }
        return it;
      });
    }
  } catch (e) {
    // non-fatal: leave lat/long null if enrichment fails
    console.warn('zip geo enrichment failed', e);
  }

  const hasMore = start + resultItems.length < total;

  return NextResponse.json({
    items,
    total,
    page,
    pageSize,
    hasMore,
  });
} catch (error: any) {
    console.error("Jobs API Error:", error);
    return NextResponse.json({
      items: [],
      total: 0,
      page: 1,
      pageSize: 20,
      hasMore: false,
      error: error instanceof Error ? error.message : "Internal Server Error"
    }, { status: 500 });
  }
}

