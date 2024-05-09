import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';
import { auth, signIn, signOut } from '@/auth';
import { LogIn, LogOut } from 'lucide-react';

export async function DesktopNavigation() {
  const session = await auth();

  return (
    <div className="hidden lg:flex xl:gap-x-4">
      <Link href="/" className={buttonVariants({ variant: 'link' })}>
        Home
      </Link>
      {session?.user ? (
        <>
          <div className="flex items-center gap-x-2 text-sm font-medium">
            <Avatar>
              {session.user.image && <AvatarImage src={session.user.image} />}
              <AvatarFallback>
                {session.user.name?.substring(0, 1)}
              </AvatarFallback>
            </Avatar>

            {`${session.user.name} (${session.user.email})`}
          </div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit" variant="link">
              Sign Out <LogOut />
            </Button>
          </form>
        </>
      ) : (
        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          <Button type="submit" variant="link">
            Sign in <LogIn />
          </Button>
        </form>
      )}

      <ModeToggle />
    </div>
  );
}
