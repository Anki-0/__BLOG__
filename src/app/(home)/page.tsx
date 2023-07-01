import React, { Suspense } from 'react';

import Tag from '@/Components/Tag';
import Link from 'next/link';
import styles from './homePage.module.scss';
import Image from 'next/image';
import Button from '@/Components/Button';
import { PostFeed } from '@/Components/PostFeed';
import { getPosts } from '@/lib/api/posts';

const recommendedTags = [
  'Web development',
  'Art',
  'UI',
  'ChatGPT',
  'Writting',
  'Machine Learing',
  'Reactjs',
  'Gme Design',
  'Metaverse',
];

const recentlySavedArticles = [
  {
    id: 1,
    url: '/',
    articleName: 'This Pattern Will Make Your React Hooks Cleaner',
    author: {
      avatar: '/author-1.jpg',
    },
  },
  {
    id: 2,
    url: '/',
    articleName: 'Introduction to recommender systems',
    author: {
      avatar: '/author-2.jpg',
    },
  },
  {
    id: 3,
    url: '/',
    articleName: 'Let’s test the tagging system too.',
    author: {
      avatar: '/avatar.png',
    },
  },
  {
    id: 4,
    url: '/',
    articleName:
      'How about a tagging system in Medium based on controlled vocabulary?',
    author: {
      avatar: '/logo.png',
    },
  },
];

async function Home() {
  return (
    <div className="center">
      <div className={styles.main__wrapper}>
        <main className={styles.home__main}>
          <div className={styles.posts}>
            <Suspense fallback={<h1>loading feeds...</h1>}>
              <PostFeed />
            </Suspense>
          </div>
        </main>

        {/* <div className={styles.sider}>
          <div className={styles.sider__wrapper}>
          <div className={styles['recommended-tags']}>
          <h2>Recommended Topics</h2>

              <div className={styles.tags}>
                {recommendedTags
                  .sort((a, b) => {
                    return a.length - b.length;
                  })
                  .map((tag, tagId) => (
                    <Link href={`/tag/${tag}`} key={tagId}>
                      <Tag>{tag}</Tag>
                    </Link>
                  ))}
              </div>
            </div>

            <div className={styles['recently-saved-articles']}>
              <h2>Recently saved</h2>
              <ul>
                {recentlySavedArticles.map((article) => (
                  <li key={article.id}>
                    <div className={styles.avatar}>
                      <Image
                        src={article.author.avatar}
                        alt="author-avatar"
                        quality={40}
                        fill
                      />
                    </div>
                    <p>
                      <Link href={article.url} passHref>
                        {article.articleName}
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>

              <Button varient="text" className={styles['see-more--btn']}>
                See all(12)
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
