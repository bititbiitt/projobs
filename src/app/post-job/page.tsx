import PostJobForm from '@/components/postjob/PostJobForm';

export const metadata = {
  title: 'Post Job - ProJobs',
  description: 'Create a new job posting',
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-10">
      <PostJobForm />
    </main>
  );
}
