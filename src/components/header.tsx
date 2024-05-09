import Link from 'next/link';
import { DesktopNavigation } from '@/components/desktop-navigation';
import { MobileNavigation } from '@/components/mobile-navigation';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <nav className="mx-auto flex items-center justify-between p-4 container">
        <Link href="/" className="shrink-0">
          <Home />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
}
