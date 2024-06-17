import { SignUp } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

const SignUpPage = async () => {
  const user = await currentUser();

  if (user) {
    redirect('/thank-you');
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;

// If you don't have any dynamic params, export an empty array
export async function generateStaticParams() {
  return [];
}
