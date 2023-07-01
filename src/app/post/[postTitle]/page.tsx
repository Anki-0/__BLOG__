import React from 'react';

import Image from 'next/image';
import Avatar from '@/Components/Avatar';

import { getPostsByTitle } from '@/lib/api/posts';
import Tag from '@/Components/Tag';

import styles from './postPage.module.scss';
import classNames from 'classnames';
import { MDXRemoteInit } from '@/Components/MDX';
import Link from 'next/link';

interface PostPageProps {
  params: {
    postTitle: string;
  };
}

const Post = async (props: PostPageProps) => {
  const { params } = props;

  const post = await getPostsByTitle({
    revalidate: 60,
    title: decodeURIComponent(params.postTitle),
  });

  const PostImageNode = post.postImage && (
    <div className={styles['post-image']}>
      <Image src={post.postImage} alt="post-image" quality={80} fill />
    </div>
  );

  return (
    <div className={styles['post-wrapper']}>
      <main className={styles['post-main']}>
        <article>
          <div className={styles['post-header']}>
            {PostImageNode}

            <div className={styles['post-title']}>
              <h1>{post.postTitle}</h1>
            </div>

            <div className={styles['post-tags']}>
              {post.tags?.map(({ id, tag_name }) => (
                <Link key={id} href={`/tag/${tag_name}`}>
                  <Tag size="sm" borderRounded={0}>
                    {tag_name}
                  </Tag>
                </Link>
              ))}
            </div>

            <div className={styles['post-meta']}>
              <div className={styles['author']}>
                <Avatar
                  src={post.author.image}
                  alt="avatar image"
                  shape="circle"
                  size={48}
                />

                <div>
                  <span>Written by</span>
                  <span className={styles['author-name']}>
                    @{post.author.username}
                  </span>
                </div>
              </div>

              <div className={styles['published__date']}>
                <div>
                  <span>Published on</span>
                  <span className={styles['author-name']}>
                    {post.createdAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="MDX-Syntax-Highlight"
            className={classNames(styles['post-content'])}
          >
            <MDXRemoteInit source={post.postContent} />
            {/* <MDXRemote {...serializedMDX} components={{ CopyButton }} /> */}
          </div>
        </article>
      </main>

      {/* <div className="right">
        <div className="user">
          <Avatar src={author.image} alt="author-image" size={131} />
          <div className="username">
            <span>{author.displayName}</span>
          </div>
          <div className="about">
            <span>
              Hello everyone, my name is Tirlochan and I am a web developer from
              India primarily focused on backend development using Node.js,
              express.js and MongoDB.
            </span>
          </div>

          <Button varient="success">Follow</Button>
        </div>
      </div> */}
    </div>
  );
};

export default Post;
