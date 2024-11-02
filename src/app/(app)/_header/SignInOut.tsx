/** @format */

import {
  SignInButton,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Skeleton } from '~/components/ui/skeleton';

import { EnterIcon } from '@radix-ui/react-icons';

const SignInOut = async ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ClerkLoading>
        <Skeleton className='w-6 h-6' />
      </ClerkLoading>
      <SignedOut>
        <SignInButton mode='modal'>
          <EnterIcon className='w-5 h-5' />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default SignInOut;
