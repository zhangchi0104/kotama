/** @format */
import clsx from 'clsx';
import MenuBar from './HeaderMenu';
import SignInOut from './SignInOut';
import ModeToggle from './DarkModeButton';
import MobileHeaderMenu from './MobileHeaderMenu';
import LanguageSwitcher from './LanguageSwitcher';
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
      <MenuBar className='items-center justify-start flex-row hidden md:flex' />
      <div className='flex items-center'>
        <LanguageSwitcher className='mr-6 px-2' />
        <ModeToggle className='mr-6 px-2' />
        <SignInOut className='w-6' />
      </div>
    </header>
  );
};
export default Header;
