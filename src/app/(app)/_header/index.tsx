/** @format */
import clsx from 'clsx';
import HeaderMenu from './HeaderMenu';
import SignInOut from './SignInOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ModeToggle from './DarkModeButton';
import MobileHeaderMenu from './MobileHeaderMenu';
const headerContainerStyle = clsx(
  'absolute',
  'w-full',
  'foreground',
  'px-4',
  'pt-2',
  'flex',
  'items-center',
  'justify-between'
);
const Header = () => {
  return (
    <header id='header' className={headerContainerStyle}>
      <div className='md:hidden'>
        <MobileHeaderMenu className='md:hidden' />
      </div>
      <HeaderMenu className='items-center justify-start flex-row hidden md:flex' />
      <div className='flex'>
        <ModeToggle className='mr-4' />
        <SignInOut />
      </div>
    </header>
  );
};
export default Header;
