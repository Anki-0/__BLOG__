'use client';

import React, {
  forwardRef,
  useMemo,
  useState,
  useEffect,
  useRef,
  CSSProperties,
} from 'react';
import styles from './styles/avatar.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const PREFIX_CLS = 'avatar';
export type AvatarSize = 'large' | 'small' | 'default' | number;

export interface IAvatarProps {
  shape?: 'circle' | 'box';
  size?: AvatarSize;
  src?: string; // Src of image avatar
  icon?: React.ReactNode; //Icon to be used in avatar
  style?: React.CSSProperties;
  text?: string;

  className?: string;
  alt?: string;
  quality?: number; // Avatar image Quality

  // eslint-disable-next-line no-unused-vars
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  onError?: () => boolean;
}
const Avatar = (props: IAvatarProps, ref: React.Ref<HTMLSpanElement>) => {
  const {
    shape = 'box',
    size = 'default',
    quality = 80,
    src,
    icon,
    className,
    alt,
    text,
    onClick,
    style,
    ...rest
  } = props;
  // show text if src not provided
  const showText = !src;
  const imgRef = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    imgRef?.current?.complete && setReady(true);
  }, []);

  const avatarStyles: CSSProperties = {
    borderRadius: shape === 'circle' ? '50%' : '',
    width: typeof size === 'number' ? `${size / 10}rem` : '',
    height: typeof size === 'number' ? `${size / 10}rem` : '',
    border: showText && !icon ? 'none' : '',
    boxShadow: showText && !icon ? 'none' : '',
    ...style,
  };

  // className
  const avatarClassName = classNames(
    styles[PREFIX_CLS],
    styles[`${PREFIX_CLS}__shape-${shape}`],
    styles[`${PREFIX_CLS}__size-${size}`],
    {
      // [styles[`${PREFIX_CLS}__small`]]: size === 'small',
      // [styles[`${PREFIX_CLS}__large`]]: size === 'large',
      // [`${PREFIX_CLS}-has-color`]: color && !isInternalColor,
      // [`${PREFIX_CLS}-rtl`]: direction === 'rtl',
    },
    className,
  );

  const getState = useMemo(() => {
    return !ready && src ? 'loading' : 'ready';
  }, [src, ready]);

  return (
    <span
      ref={ref}
      className={avatarClassName}
      onClick={(event) => onClick && onClick(event)}
      style={avatarStyles}
      data-state={getState}
      {...rest}
    >
      {!icon && showText && <div className={styles[`${PREFIX_CLS}__bg`]} />}
      {!showText && (
        <Image
          data-state={getState}
          ref={imgRef}
          src={src}
          alt={alt as string}
          quality={quality}
          sizes="33vw"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={classNames(styles.avatar__image, `avatar--${getState}`)}
          onLoad={() => setReady(true)}
          fill
        />
      )}
      {showText && !icon && text && (
        <span className={styles[`${PREFIX_CLS}__text`]}>{text}</span>
      )}
      {icon && <span className={styles[`${PREFIX_CLS}__icon`]}>{icon}</span>}
    </span>
  );
};

export default forwardRef(Avatar);
