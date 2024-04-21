/** @format */
"use client";
import { useIsMobile } from "@/src/utils/hooks/viewports";
import { PropsWithChildren, FC } from "react";
import breakpoints from "~/utils/constants/breakpoints";
import { useIsClient } from "usehooks-ts";
type MobileOnlyProps = PropsWithChildren<{
  breakpoint: keyof typeof breakpoints;
}>;
const MobileOnly: FC<MobileOnlyProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }
  if (!isMobile) {
    return null;
  }
  return <>{children}</>;
};
export default MobileOnly;
