import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

const middleware = (req: NextRequest) => {
  const { userId } = getAuth(req);

  if (userId) {
    return NextResponse.redirect(new URL('/thank-you', req.url));
  }

  return NextResponse.next();
};

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
