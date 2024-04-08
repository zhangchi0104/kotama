/** @format */

import theme from '@/src/utils/constants/theme';
import { getSession } from '@auth0/nextjs-auth0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const SignInOut = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className='p-2 flex'>
        <a
          href='/api/auth/login'
          className={'flex items-center justify-center'}
        >
          <FontAwesomeIcon icon={faArrowRightToBracket} className={'w-5 h-5'} />
        </a>
      </div>
    );
  }
  return (
    <div className='p-2 flex'>
      <a href='/api/auth/logout' className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className={'w-5 h-5'} />
      </a>
    </div>
  );
};

export default SignInOut;
