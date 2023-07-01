'use client';

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import StoryCard from '../Story_Card';
import { Posts, getPosts } from '@/lib/api/posts';

import styles from './styles.module.scss';

const LIMIT = 20;

interface PostFeedProps {
  data?: Posts[];
}
export const InfiniteScrollComponent = (props: PostFeedProps) => {
  const [posts, setPosts] = useState<any>(props.data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost: () => Promise<void> = async () => {
    const _posts = await getPosts({
      revalidate: 60,
      pagination: {
        limit: LIMIT,
        offset: posts.length,
      },
    });

    if (_posts.length <= 0) {
      setHasMore(false);
    }

    setTimeout(() => {
      setPosts((prev: any) => prev.concat(_posts));
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePost}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
      endMessage={
        <p
          style={{
            textAlign: 'center',
            margin: '3rem 0',
            fontSize: '1.6rem',
          }}
        >
          Yay! You have seen it all
        </p>
      }
    >
      <div className={styles['data-post-wrapper']}>
        {posts?.map((d: any) => (
          <StoryCard key={d.id} data={d} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
