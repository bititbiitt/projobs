import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#172554] to-[#1e7a8a] py-16 md:py-20 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
          Create your profile, upload your resume, and start applying in minutes.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/register" 
            className="w-full sm:w-auto bg-white text-navy font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Create Free Account
          </Link>
          <Link
            href="/jobs"
            className="w-full sm:w-auto border border-white text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:text-navy transition-all duration-200"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
