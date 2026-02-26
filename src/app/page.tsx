import CTABanner from "@/components/home/CTABanner";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import HeroSection from "@/components/home/HeroSection";
import { db } from "@/lib/db";

export default async function Home() {
  // Guarded fetch in case JobCategory model changes
  let categories: { name: string; slug: string; count: number }[] = [];
  try {
    const catClient = (db as any)?.job_category;
    if (catClient?.findMany) {
      const categoriesData = await catClient.findMany({
        take: 10
      });

      categories = categoriesData.map((c: any) => ({
        name: c.name,
        slug: c.slug,
        count: 0, // Placeholder
      }));
    }
  } catch (err) {
    console.warn("Category fetch skipped (model missing?)", err);
  }

  return (
    <div className="flex flex-col">
      <HeroSection categories={categories} />
      <FeaturedJobs />
      <CTABanner />
    </div>
  );
}
