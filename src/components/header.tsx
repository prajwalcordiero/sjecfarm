import Link from 'next/link';
import { Leaf, LogIn } from 'lucide-react';
import { getSession } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogoutButton } from './logout-button';

export async function Header() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            Farm Fresh Finds
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {session ? (
              <LogoutButton />
            ) : (
              <Button asChild variant="ghost">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Admin Login
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
