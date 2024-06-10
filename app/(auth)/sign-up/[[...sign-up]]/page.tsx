// pages/(auth)/sign-up/[[...sign-up]]/page.tsx

// Use the 'use client' directive to mark this as a client component
'use client';

import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/router'; // Use next/router for client components
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const SignUpPage = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && isLoaded) {
      router.push('/thank-you');
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
