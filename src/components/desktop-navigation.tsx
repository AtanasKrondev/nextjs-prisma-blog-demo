import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export function DesktopNavigation() {
  return (
    <div className="hidden lg:flex xl:gap-x-4">
      <Link href="/" className={buttonVariants({ variant: 'link' })}>
        Home
      </Link>
      <Link href="/about" className={buttonVariants({ variant: 'link' })}>
        About
      </Link>
      <ModeToggle />
    </div>
  );
}
