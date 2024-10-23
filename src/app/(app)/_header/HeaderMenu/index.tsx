/** @format */

import clsx from 'clsx';
import HeaderImage from './HeaderImage';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
/** @format */
const menuBarContainerStyle = clsx(
  'flex',
  'flex-row',
  'justify-center',
  'items-center',
  'mx-auto',
  'px-4',
  'space-x-8'
);
type MenuBarProps = {
  className?: string;
};
const menuBarItemStyle = clsx('text-md', 'cursor-pointer', 'py-2 px-4');
const MenuBar: FC<MenuBarProps> = ({ className }) => {
  const t = useTranslations('Home.MenuBar');
  return (
    <div className={className}>
      <HeaderImage className='mr-4' />
      <div className={menuBarContainerStyle}>
        <div className={menuBarItemStyle}>{t('home')}</div>
        <div className={menuBarItemStyle}>{t('blog')}</div>
        <div className={menuBarItemStyle}>{t('aboutMe')}</div>
        <div className={menuBarItemStyle}>{t('friends')}</div>
      </div>
    </div>
  );
};
export default MenuBar;
