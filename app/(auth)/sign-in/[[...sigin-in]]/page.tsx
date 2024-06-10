// Use the 'use client' directive to mark this as a client component
'use client';

import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router'; // Use next/router for client components
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const SignInPage = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && isLoaded) {
      router.push('/thank-you');
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;

// Static parameters function
export async function generateStaticParams() {
  return [];
}
