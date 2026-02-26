import Link from 'next/link';
import { db } from '@/lib/db';
import { Building2, MapPin, ArrowRight } from 'lucide-react';

export default async function FeaturedJobs() {
  let featuredJobs: any[] = [];
  try {
        featuredJobs = await db.job.findMany({
      where: { is_featured: true },
      take: 6,
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        title: true,
        metadata: true,
        created_at: true,
        is_featured: true
      }
    });
  } catch (err) {
    console.warn("Featured jobs fetch skipped (db not connected?)", err);
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-2">Featured Opportunities</h2>
            <p className="text-gray-500">Top positions from leading companies</p>
          </div>
          <Link 
            href="/jobs" 
            className="flex items-center gap-2 text-navy hover:text-primary-teal font-medium border border-gray-200 hover:border-primary-teal/30 px-4 py-2 rounded-lg transition-all"
          >
            View All Jobs <ArrowRight size={16} />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Link key={job.id} href={typeof job.id === 'string' ? `/jobs/${job.id}` : '#'} className="group block">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full flex flex-col">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-50 p-2.5 rounded-xl text-navy group-hover:bg-white group-hover:shadow-sm transition-all">
                   <Building2 size={24} className="opacity-70" />
                  </div>
                  {false}
                </div>

                {/* Content */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary-teal transition-colors">{job.title}</h3>
                  <p className="text-gray-600 font-medium text-sm mb-3">{(job.metadata && (job.metadata as any).company) || '—'}</p>
                  
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <MapPin size={14} />
                    {job.job_location?.[0]?.address || job.job_location?.[0]?.zip_geo || '—'}
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  <span className="px-3 py-1 bg-gray-50 rounded-md text-xs font-medium text-gray-600 border border-gray-100 capitalize">
                    {(job.job_detail?.job_type_id ? String(job.job_detail.job_type_id) : '')}
                  </span>
                  <span className="px-3 py-1 bg-gray-50 rounded-md text-xs font-medium text-gray-600 border border-gray-100 capitalize">
                    {''}
                  </span>
                   <span className="px-3 py-1 bg-accent-green/10 text-green-700 rounded-md text-xs font-bold border border-green-100/50">
                    {'—'}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
