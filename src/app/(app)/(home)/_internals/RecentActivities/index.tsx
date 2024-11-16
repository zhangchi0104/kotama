/** @format */

import { Post } from '@/src/utils/typings/api/base';
import { cn } from '~/utils/shadcn';
import { BaseStyleProps } from '~/utils/typings';

import PostsTimeline from './_interals/PostsTimeline';

/** @format */
type RecentActivitiesProps = BaseStyleProps;
const RecentActivities = ({ className }: RecentActivitiesProps) => {
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

  return (
    <div
      className={cn(
        'divide-y divide-y-muted flex flex-col items-stretch',
        className
      )}
    >
      <PostsTimeline
        posts={postsNames.slice(0, 2)}
        heading='Recent Posts'
        className='mb-4'
      />
      <PostsTimeline posts={[]} heading='Moments' className='pt-4' />
    </div>
  );
};

export default RecentActivities;
