/** @format */

import { cn } from '@/src/utils/shadcn';
import { BaseStyleProps } from '@/src/utils/typings';
import { Post } from '@/src/utils/typings/api/base';
import { useCallback } from 'react';
import TimelinePost from './TimelinePost';
import ListView from '@/src/components/VerticalListView';
import PostsTimelineEmptyFallback from './PostsTmelineEmptyFallback';
type PostsTimelineProps = {
  posts: Post[];
  heading: string;
} & BaseStyleProps;
const PostsTimeline: React.FC<PostsTimelineProps> = ({
  posts,
  heading,
  className,
}) => {
  const renderFn = useCallback((it: Post, index: number) => {
    const commonClass = cn('py-3', 'self-center');
    const dateClasses = cn(commonClass, 'text-muted-foreground');
    const titleClasses = cn(commonClass, 'pl-8 text-foreground');
    return (
      <TimelinePost
        {...it}
        key={`timeline-post-${index}`}
        dataClasses={dateClasses}
        titleClasses={titleClasses}
      />
    );
  }, []);

  return (
    <div className={className}>
      <p className='font-semibold text-2xl'>{heading}</p>
      <ListView
        emptyFallback={<PostsTimelineEmptyFallback className={'w-full mt-6'} />}
        id={`${heading}-timeline`}
        as='ul'
        className='posts-timeline mt-2 mx-4'
        data={posts}
        render={renderFn}
      />
    </div>
  );
};

export default PostsTimeline;
