import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getAllPosts, getPostById } from '@/lib/fetch';
import { format, formatDistanceToNow } from 'date-fns';
import { notFound } from 'next/navigation';

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostById(id);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 max-w-full space-y-4">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      {post.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.imageUrl}
          alt="Image"
          className="rounded-md object-cover w-full aspect-video"
        />
      )}
      <div className="flex items-center">
        <Avatar>
          {post.user.image && <AvatarImage src={post.user.image} />}
          <AvatarFallback>{post.user.name?.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground text-sm">{`${
          post.user.name
        } @ ${format(post.createdAt, 'dd.MM.yy, HH:mm')} (${formatDistanceToNow(
          post.createdAt,
          {
            addSuffix: true,
          }
        )})`}</span>
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </main>
  );
}
