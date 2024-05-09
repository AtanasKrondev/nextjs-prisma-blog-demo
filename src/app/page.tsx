import { format, formatDistanceToNow } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { getAllPosts } from '@/lib/fetch';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="min-h-screen p-4 max-w-full grid gap-4 grid-cols-1 md:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription className="flex items-center">
              <Avatar>
                {post.user.image && <AvatarImage src={post.user.image} />}
                <AvatarFallback>
                  {post.user.name?.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
              <span>{`${post.user.name} @ ${format(
                post.createdAt,
                'dd.MM.yy, HH:mm'
              )} (${formatDistanceToNow(post.createdAt, {
                addSuffix: true,
              })})`}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="md:flex gap-2">
            {post.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.imageUrl}
                alt="Image"
                className="rounded-md object-cover w-full aspect-square	md:w-[200px]"
              />
            )}
            <ReactMarkdown>
              {post.content.substring(0, 100) + '...'}
            </ReactMarkdown>
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({ variant: 'default' })}
              href={`/post/${post.id}`}
            >
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
