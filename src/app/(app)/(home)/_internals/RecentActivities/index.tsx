/** @format */

import { Post } from '@/src/utils/typings/api/base';
import ListView from './VerticalTimeline';
import { cn } from '~/utils/shadcn';
import { BaseStyleProps } from '~/utils/typings';
import TimelinePost from './_interals/TimelinePost';
import { useCallback } from 'react';

/** @format */
type RecentActivitiesProps = BaseStyleProps;
const RecentActivities = ({ className }: RecentActivitiesProps) => {
  const baseClass = 'grid xl:grid-cols-2 grid-cols px-4 py-2';
  const classNames = cn(baseClass, className);
  const postsNames: Post[] = [
    {
      postId: 1,
      title: 'Nextjs 14 的 App Router 初体验',
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      postId: 2,
      title: 'Nextjs 14 的 App Router 初体验',
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      postId: 3,
      title: 'Nextjs 14 的 App Router 初体验',
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      postId: 4,
      title: 'Nextjs 14 的 App Router 初体验',
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      postId: 5,
      title: 'Nextjs 14 的 App Router 初体验',
      createdAt: new Date(),
      updatedAt: null,
    },
  ];
  const renderFn = useCallback((it: Post, index: number) => {
    const commonClass = cn('py-2', 'self-center');
    const dateClasses = cn(commonClass, 'text-muted-foreground');
    const titleClasses = cn(commonClass, 'text-foreground');
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
    <div className={classNames}>
      <div className='col-span-1'>
        <ListView
          as='div'
          className='vertical-timeline grid grid-cols-[auto_1fr]'
          id='posts-timeline'
          data={postsNames}
          render={renderFn}
        />
      </div>
      <div className='col-span-1'>
        <p>Row 1</p>
        <p>Row 2</p>
      </div>
    </div>
  );
};

export default RecentActivities;
