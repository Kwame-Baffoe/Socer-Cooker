"use client"; // Marking the component as a client component

import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router'; // Correctly imported for client components
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
