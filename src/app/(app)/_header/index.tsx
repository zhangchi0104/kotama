/** @format */
import clsx from 'clsx';
import HeaderMenu from './HeaderMenu';
import SignInOut from './SignInOut';
import ModeToggle from './DarkModeButton';
import MobileHeaderMenu from './MobileHeaderMenu';
import MobileOnly from '@/src/components/utils/MobileOnly';
import DesktopOnly from '@/src/components/utils/DesktopOnly';
import { Suspense } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { BaseStyleProps } from '@/src/utils/typings';

const Header: React.FC<BaseStyleProps> = ({ className }) => {
  const headerContainerStyle = clsx(
    'abs-center-x',
    'w-full',
    'foreground',
    'px-8',
    'pt-2',
    'flex',
    'items-center',
    'justify-between',
    'container',
    className
  );
  return (
    <div id='header' className={headerContainerStyle}>
      <MobileOnly>
        <MobileHeaderMenu />
      </MobileOnly>
      <DesktopOnly>
        <HeaderMenu className='items-center justify-start flex-row flex' />
      </DesktopOnly>
      <div className='flex items-center space-x-8'>
        <ModeToggle className='h-5 w-5' />
        <LanguageSwitcher className='px-2' />
        <Suspense fallback={<div>Loading...</div>}>
          <SignInOut className='w-5' />
        </Suspense>
      </div>
    </div>
  );
};
export default Header;
