/** @format */

import clsx from 'clsx';
import theme from '@/src/theme';
/** @format */
const headerMenuContainerStyle = clsx(
  'flex',
  'flex-row',
  'justify-center',
  'items-center',
  'mx-auto',
  'py-2',
  'px-4',
  'rounded-full',
  'border-solid',
  'border-[1px]',
  theme.palette.border.primary,
  'shadow-sm',
  'shadow-slate-700',
  'space-x-8'
);
const headerMenuItemStyle = clsx('text-md', 'cursor-pointer');
const HeaderMenu = () => {
  return (
    <div className={headerMenuContainerStyle}>
      <div className={headerMenuItemStyle}>Home</div>
      <div className={headerMenuItemStyle}>Blog</div>
      <div className={headerMenuItemStyle}>About Me</div>
      <div className={headerMenuItemStyle}>Friends</div>
    </div>
  );
};
export default HeaderMenu;
