import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import { Content, Popover, Trigger } from '../Popover';
import Tag from '../Tag';

import DotsHorizontalIcon from '@/public/icons/DotsHorizontalIcon';
import styles from './style/card.module.scss';
import Link from 'next/link';

interface Data {
  id: number;
  postTitle: string;
  postContent: string;
  readTime: string;
  tags: string[];
  publishedDate: string;
  postImage: string;
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

const Card = (props: CardProps) => {
  const { data, className } = props;

  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.card__main}>
        <div className={styles.card__top}>
          <div className={styles.user}>
            <div className={styles.user__avatar}>
              <Link href={`/u/${data?.author?.displayName}`}>
                <Image
                  src={`${data?.author?.image}`}
                  alt="author-avatar"
                  quality={40}
                  fill
                />
              </Link>
            </div>

            <div className={styles.user__name}>
              <Link href={`/u/${data?.author?.displayName}`}>
                <span>{data?.author?.displayName}</span>
              </Link>
            </div>

            <div className={styles['user__post-date']}>
              <span>{data?.publishedDate}</span>
            </div>
          </div>
        </div>
        <div className={styles.card__body}>
          <Link href={`/post/${data?.postTitle}`}>
            <div className={styles.heading}>
              <h3>{data?.postTitle}</h3>
            </div>
            <div className={styles['sub-heading']}>
              <p>{data?.postContent}</p>
            </div>
          </Link>
        </div>

        <div className={styles.card__bottom}>
          <div className={styles.right}>
            <div className={styles.tags}>
              <Tag className={styles.tag} size="sm" bordered={false}>
                {['javascript', 'Nodejs'].map((tag) => (
                  <Link key={tag} href={`/tag/${tag}`} passHref>
                    {tag}
                  </Link>
                ))}
              </Tag>
            </div>
            <div className={styles['read-time']}>
              <span>{data?.readTime}</span>
            </div>
          </div>

          <div className={styles.left}>
            <Popover renderArrow>
              <Trigger className={styles['quick--actions']}>
                <div className={styles.dots_horizontal_icon}>
                  <DotsHorizontalIcon />
                </div>
              </Trigger>
              <Content>
                <ul>
                  <li>
                    <div>
                      <button>Mute this author</button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button>Mute this publication</button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button>Report</button>
                    </div>
                  </li>
                </ul>
              </Content>
            </Popover>
          </div>
        </div>
      </div>

      <div className={styles['card__image-wrapper']}>
        <div className={styles.card__image}>
          <Link href={`/post/${data.postTitle}`}>
            <Image
              src={`${data?.postImage}`}
              alt="card-image"
              fill
              quality={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
