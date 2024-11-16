/** @format */

import { Post } from '~/utils/typings/api/base';
import { cn } from '~/utils/shadcn';

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
    <li className='posts-timeline-item flex flex-row'>
      <p className={cn('mr-8 text-right', dataClasses)}>
        {createdAt.toLocaleDateString()}
      </p>
      <p
        className={cn(
          'grow vertical-timeline-item before:bg-teal-500 after:bg-teal-500',
          titleClasses
        )}
      >
        {title}
      </p>
    </li>
  );
};
export default TimelinePost;
