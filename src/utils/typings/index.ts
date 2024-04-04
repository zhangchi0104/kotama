/** @format */

import { PropsWithChildren } from 'react';
type AnimatedComponentPropsBase = {
  duration?: number;
  delay?: number;
};
export type BaseProps = {
  className?: string;
};
export type AnimatedComponentProps<T extends {} = {}> =
  AnimatedComponentPropsBase & BaseProps;

export type AnimatedComponentPropsWithChildren<T extends {} = {}> =
  PropsWithChildren<AnimatedComponentProps<T>>;

export type AnimatedComponentPropsWithRef<T extends {} = {}> =
  AnimatedComponentProps<T> & { ref?: React.Ref<T> };
