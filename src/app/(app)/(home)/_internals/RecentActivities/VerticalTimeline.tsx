/** @format */

import { BaseStyleProps } from "@/src/utils/typings";
import React from "react";
import { cn } from "~/utils/shadcn";

type ListProps<T extends any = any> = {
  data: T[];
  as?: React.ElementType;
  render: (item: T, index: number) => React.ReactNode;
  id: string;
} & BaseStyleProps;
const ListView = <T,>(props: ListProps<T>): React.ReactNode => {
  const { data, render, as, ...conatinerProps } = props;
  return React.createElement(
    as || "div",
    {
      ...conatinerProps,
    },
    data.map((item, index) => render(item, index)),
  );
};

export default ListView;
