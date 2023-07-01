import React from 'react';
import styles from './styles/tagPage.module.scss';
import StoryCard from '@/Components/Story_Card';

interface Params {
  params: {
    tagName: string;
  };
}

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
    id: 5,
    postImage: '/terrible.png',
    title: '60 terrible tips for a C++ developer, part 1 (tips 1–5)',
    author: {
      image: '/avatar-00.png',
      username: '@Code_Analysis',
      displayName: 'Andrey Karpov',
    },
  },
  {
    id: 6,
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

const Page = ({ params }: Params) => {
  return (
    <main className="center">
      <div className={styles.header}>
        <h1>#{decodeURI(params.tagName)} stories</h1>
        <span>(5,049 results)</span>
      </div>

      <div className={styles.cards}>
        {data.map((data) => (
          <StoryCard key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
};

export default Page;
