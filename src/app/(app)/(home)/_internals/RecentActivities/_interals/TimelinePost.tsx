/** @format */

import { Post } from '~/utils/typings/api/base';
import { cn } from '~/utils/shadcn';
import { BaseStyleProps } from '~/utils/typings';

type TimelinePostProps = Post & {
  dataClasses?: string;
  titleClasses?: string;
};
const TimelinePost = ({
  title,
  createdAt,
  dataClasses,
  titleClasses,
}: TimelinePostProps) => {
  return (
    <>
      <p className={cn('mr-4 text-right', dataClasses)}>
        {createdAt.toLocaleDateString()}
      </p>
      <p
        className={cn(
          'vertical-timeline-item before:bg-teal-500 after:bg-teal-500',
          titleClasses
        )}
      >
        {title}
      </p>
    </>
  );
};
export default TimelinePost;
