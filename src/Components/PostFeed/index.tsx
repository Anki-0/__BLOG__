import React from 'react';
import { getPosts } from '@/lib/api/posts';

import { InfiniteScrollComponent } from './InfiniteScroll';

const getInititalPosts = async () => {
  return await getPosts({
    revalidate: 60,
    pagination: { limit: 20, offset: 0 },
  });
};

export const PostFeed = async () => {
  const initialPosts = await getInititalPosts();

  return <InfiniteScrollComponent data={initialPosts} />;
};
