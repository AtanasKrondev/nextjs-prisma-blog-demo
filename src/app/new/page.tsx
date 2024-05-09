import { auth } from '@/auth';
import { notFound, redirect } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createPost } from '@/lib/fetch';
import { Textarea } from '@/components/ui/textarea';

export default async function NewPost() {
  const session = await auth();
  if (!session) {
    notFound();
  }

  async function createInvoice(formData: FormData) {
    'use server';

    const data = {
      title: (formData.get('title') as string) ?? '',
      content: (formData.get('content') as string) ?? '',
      imageUrl: formData.get('imageUrl') as string,
      userId: session?.user?.id!,
    };

    await createPost(data);
    redirect('/');
  }

  return (
    <main className="min-h-screen">
      <form action={createInvoice} className="p-4 space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" />
        </div>
        <div>
          <Label htmlFor="imageUrl">Featured image URL</Label>
          <Input id="imageUrl" name="imageUrl" placeholder="https://..." />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" name="content" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
