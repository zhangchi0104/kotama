/** @format */
import { useEffect } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignInOut = ({ className }: { className?: string }) => {
  const { userId } = auth();

  return (
    <div className={className}>
      <SignedOut>
        <SignInButton>
          <FontAwesomeIcon icon={faArrowRightToBracket} className={'w-5 h-5'} />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default SignInOut;
