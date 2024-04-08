/** @format */
'use client';
import { useMediaQuery } from '@/src/utils/hooks';
import { PropsWithChildren, FC } from 'react';
import breakpoints from '~/utils/constants/breakpoints';
type MobileOnlyProps = PropsWithChildren<{
  breakpoint: keyof typeof breakpoints;
}>;
const MobileOnly: FC<MobileOnlyProps> = ({ children, breakpoint = 'sm' }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[breakpoint]})`);
  if (isMobile) {
    return <>{children}</>;
  }
  return null;
};
export default MobileOnly;
