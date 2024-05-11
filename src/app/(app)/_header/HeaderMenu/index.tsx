/** @format */

import clsx from 'clsx';
import HeaderImage from './HeaderImage';
import { FC } from 'react';
/** @format */
const headerMenuContainerStyle = clsx(
  'flex',
  'flex-row',
  'justify-center',
  'items-center',
  'mx-auto',
  'px-4',
  'space-x-8'
);
type HeaderMenuProps = {
  className?: string;
};
const headerMenuItemStyle = clsx('text-md', 'cursor-pointer', 'py-2 px-4');
const HeaderMenu: FC<HeaderMenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <HeaderImage className='mr-4' />
      <div className={headerMenuContainerStyle}>
        <div className={headerMenuItemStyle}>Home</div>
        <div className={headerMenuItemStyle}>Blog</div>
        <div className={headerMenuItemStyle}>About Me</div>
        <div className={headerMenuItemStyle}>Friends</div>
      </div>
    </div>
  );
};
export default HeaderMenu;
