/** @format */

'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/src/components/ui/button';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/src/components/ui/skeleton';
const DynamicDropdownMenu = dynamic(() =>
  import('@/src/components/ui/dropdown-menu').then((mod) => mod.DropdownMenu)
);
const DynamicDropdownMenuTrigger = dynamic(
  () =>
    import('@/src/components/ui/dropdown-menu').then(
      (mod) => mod.DropdownMenuTrigger
    ),
  {
    loading: () => <Skeleton className='w-5 h-5' />,
  }
);
const DynamicDropdownMenuContent = dynamic(() =>
  import('@/src/components/ui/dropdown-menu').then(
    (mod) => mod.DropdownMenuContent
  )
);
const DynamicDropdownMenuItem = dynamic(
  () =>
    import('@/src/components/ui/dropdown-menu').then(
      (mod) => mod.DropdownMenuItem
    ),
  {
    loading: () => <Skeleton className='w-5 h-5' />,
  }
);

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <DynamicDropdownMenu>
      <DynamicDropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className={className}>
          <SunIcon className='h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DynamicDropdownMenuTrigger>
      <DynamicDropdownMenuContent align='end'>
        <DynamicDropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DynamicDropdownMenuItem>
        <DynamicDropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DynamicDropdownMenuItem>
        <DynamicDropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DynamicDropdownMenuItem>
      </DynamicDropdownMenuContent>
    </DynamicDropdownMenu>
  );
}
export default ModeToggle;
