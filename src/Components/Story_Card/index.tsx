import React from 'react';
import styles from './styles/stody-card.module.scss';
import Image from 'next/image';
import Avatar from '../Avatar';
import Tag from '../Tag';
import Link from 'next/link';

interface Data {
  id: number;
  postTitle: string;
  postContent: string;
  readTime: string;
  createdAt: string;
  postImage: string;
  tags?: {
    id: string;
    tag_name: string;
  }[];
  author: {
    id: string;
    image: string;
    displayName: string;
    username: string;
  };
}
[];

interface CardProps {
  className?: string;
  data: Data;
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const StoryCard = (props: CardProps) => {
  const { data, className } = props;

  return (
    <article className={styles['story-card']}>
      <div className={styles.card__image__wrapper}>
        <Link href={`/post/${data.postTitle}/?language=en`}>
          <Image
            src={data.postImage}
            alt="card-image"
            fill
            quality={60}
            placeholder="blur"
            blurDataURL={rgbDataURL(221, 223, 227)}
          />
        </Link>
      </div>

      <div className={styles.card__body}>
        <div className={styles.card__title__wrapper}>
          <h2 className={styles.title}>
            <Link href={`/post/${data.postTitle}`}>{data.postTitle}</Link>
          </h2>

          <div className={styles.card__tags}>
            {data.tags?.map(({ tag_name, id }) => (
              <Link href={`/tag/${tag_name}`} passHref key={id}>
                <Tag size="sm" className={styles.tag}>
                  {tag_name}
                </Tag>
              </Link>
            ))}
          </div>

          <p className={styles['sub-title']}>{data.postContent}</p>
        </div>

        <div className={styles.card__meta}>
          <div className={styles.user}>
            <Link href={`/u/${data.author.username}`}>
              <Avatar
                src={data.author.image}
                alt="user-avatar"
                size="large"
                shape="box"
              />
            </Link>

            <div className={styles['user-details']}>
              <Link href={`/u/${data.author.username}`}>
                <span className={styles.username}>
                  {props.data?.author?.username}
                </span>
              </Link>
              <span className={styles.user__display_name}>
                {data.author.displayName}
              </span>
            </div>
          </div>

          <div className={styles.date}>
            <span>{data.createdAt}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
