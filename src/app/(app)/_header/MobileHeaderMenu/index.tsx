/** @format */
'use client';
import { Button } from '@/src/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/src/components/ui/drawer';
import { cn } from '@/src/utils/shadcn';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface MobileHeaderMenuProps {
  className?: string;
}
const MobileHeaderMenu: React.FC<MobileHeaderMenuProps> = ({ className }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <FontAwesomeIcon icon={faBars} />
      </DrawerTrigger>
      <Content />
    </Drawer>
  );
};
const Content = () => (
  <DrawerContent>
    <div className='w-full px-8 py-4 mb-8 space-y-4'>
      <div>Home</div>
      <div>Blog</div>
      <div>About me</div>
    </div>
  </DrawerContent>
);
export default MobileHeaderMenu;
