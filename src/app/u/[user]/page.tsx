import React from 'react';

import styles from './styles/profilePage.module.scss';
import Avatar from '@/Components/Avatar';
import cn from 'classnames';
import Button from '@/Components/Button';
import StoryCard from '@/Components/Story_Card';
import Link from 'next/link';
// import ChevronLeftIcon from '@/public/icons/ChevronLeftIcon';
// import ChevronRightIcon from '@/public/icons/ChevronRightIcon';

const data = [
  {
    id: 1,
    postImage: '/post-1.png',
    title: 'All unite here in this paradise of the Bembex',
    author: {
      image: '/avatar.png',
      username: '@ankit',
      displayName: 'Ankit Singh',
    },
  },
  {
    id: 2,
    postImage: '/ai-post.png',
    title:
      'Finding Opportunities in Hype: The Generative AI Boom Shows No Signs of Slowing on Wall Street',
    author: {
      image: '/author-1.jpg',
      username: '@emy',
      displayName: 'Emilie',
    },
  },
  {
    id: 3,
    postImage: '/chatgpt-post.jpg',
    title: 'The Driving Force Behind ChatGPT',
    author: {
      image: '/author-2.jpg',
      username: '@whatsai',
      displayName: 'Louis Bouchard',
    },
  },
  {
    id: 4,
    postImage: '/XSS-post.png',
    title:
      'Exploring Cross-Site Scripting (XSS): Risks, Vulnerabilities, and Prevention Measures',
    author: {
      image: '/logo.png',
      username: '@contywrite',
      displayName: 'Vladyslav Arzamastsev',
    },
  },
  {
    id: 5,
    postImage: '/nextjs-post.png',
    title:
      'Exploring Next.js 13’s Image Component: Supercharge Your Image Handling',
    author: {
      image: '/avatar-pixel.jpg',
      username: '@senerali3',
      displayName: 'Șener Ali',
    },
  },
  {
    id: 6,
    postImage: '/terrible.png',
    title: '60 terrible tips for a C++ developer, part 1 (tips 1–5)',
    author: {
      image: '/avatar-00.png',
      username: '@Code_Analysis',
      displayName: 'Andrey Karpov',
    },
  },
  {
    id: 7,
    postImage: '/picoctf_post.webp',
    title:
      'PicoCTF asm3 challenge: Master the Art of Reverse Engineering — StackZero',
    author: {
      image: '/avatar-002.jpeg',
      username: '@stackzero',
      displayName: 'StackZero',
    },
  },
];

interface ProfilePageProps {
  params: {
    user: string;
  };
}

const Page = (props: ProfilePageProps) => {
  const { params } = props;
  return (
    <div className={cn(styles['profile-wrapper'], 'center')}>
      <div className={styles.user}>
        <Avatar
          shape="box"
          size="large"
          src="/avatar-002.jpeg"
          className={styles.user__avatar}
          quality={80}
        />

        <div className={styles.wrapper}>
          <div className={styles.user__info}>
            <h1 className={styles['user__display-name']}>Ankit Singh</h1>
            <span className={styles['user__username']}>
              {decodeURIComponent(params.user)}
            </span>
          </div>

          <div className={styles['subscribe-btn']}>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <section className="related__stories">
        <nav className={styles.tablist}>
          <div className={styles.tabs} id="tabs">
            {[
              'Stories',
              'Favorites',
              'Bookmarks',
              'Comments',
              'About',
              'Science',
              'ChatGPT',
            ].map((tab, index) => (
              <Link href="#" passHref key={index}>
                <p>
                  <span>{tab}</span>
                </p>
              </Link>
            ))}
          </div>
          {/* <div className={styles['sroll-left--btn']}>
            <button>
              <ChevronLeftIcon />
            </button>
          </div>
          <div className={styles['sroll-right--btn']}>
            <button>
              <ChevronRightIcon />
            </button>
          </div> */}
        </nav>
        <div className={styles.stories}>
          {data.map((data) => (
            <StoryCard key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
