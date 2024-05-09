import { getAllPosts } from '@/lib/fetch';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-full">
      <p>{JSON.stringify(posts, null, 2)}</p>
    </main>
  );
}
