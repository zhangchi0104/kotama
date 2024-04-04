/** @format */
"use client";
import { AnimatedComponentPropsWithChildren } from "@/src/utils/typings";
import { softSpringPreset } from "@/src/utils/transitions/springPresets";
import { Spring, motion } from "framer-motion";
import { FC } from "react";
type PopoutTransitionProps = AnimatedComponentPropsWithChildren<{}>;

const PopoutTransition: FC<PopoutTransitionProps> = ({
  children,
  className,
  delay,
  duration,
}) => {
  const MotionComponent = motion.div;

  return (
    <MotionComponent
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={className}
      transition={{ delay, ...softSpringPreset, duration }}
    >
      {children}
    </MotionComponent>
  );
};
export default PopoutTransition;
