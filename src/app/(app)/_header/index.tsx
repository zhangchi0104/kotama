/** @format */
import theme from '@/src/theme';
import clsx from 'clsx';
import HeaderMenu from './HeaderMenu';
import SignInOut from './SignInOut';
import HeaderImage from './HeaderImage';

const headerContainerStyle = clsx(
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'w-1/2',
  'px-24',
  'absolute',
  'left-1/2',
  'translate-x-[-50%]',
  'py-2',
  theme.palette.text.primary
);
const Header = () => {
  return (
    <header id='header' className={headerContainerStyle}>
      <HeaderImage />
      <HeaderMenu />
      <SignInOut />
    </header>
  );
};
export default Header;
