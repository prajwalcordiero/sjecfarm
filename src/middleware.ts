import { NextResponse, type NextRequest } from 'next/server'
import { getSession } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === '/login';
  const isAdminPath = pathname.startsWith('/admin');

  if (isAdminPath && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isPublicPath && session) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
