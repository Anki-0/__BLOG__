'use client';

import React, { CSSProperties, forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';
import CrossIcon from '@/public/icons/crossIcon';
import classNames from 'classnames';
import styles from './style/tag.module.scss';

/**
 * TODO: - add preset for custom Colorful Tag
 *       - add status tag eg: success, processing, error, warrning
 *       - implement dragable tags using @dnd-kit
 */

const PREFIX_CLS = 'tag';

type tagSize = 'md' | 'sm' | 'default';

type PresetStatusColorType =
  | 'success'
  | 'processing'
  | 'error'
  | 'warrning'
  | 'default';
type PresetColorType =
  | 'magenta'
  | 'red'
  | 'volcano'
  | 'orange'
  | 'gold'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'geekblue'
  | 'purple';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  closable?: boolean;
  color?: PresetColorType | PresetStatusColorType;
  closeIcon?: React.ReactNode;
  size?: tagSize;
  /* Callback executed when tag is closed */
  //eslint-disable-next-line no-unused-vars
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  bordered?: boolean;
  borderRounded?: boolean | number;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const [visible, setVisible] = React.useState(true);
  const {
    className,
    closable,
    closeIcon,
    onClose,
    icon,
    size = 'default',
    children,
    bordered = true,
    borderRounded = false,
    style,
  } = props;

  // className
  const tagClassName = classNames(
    styles[PREFIX_CLS],
    styles[`${PREFIX_CLS}__size-${size}`],
    {
      [styles[`${PREFIX_CLS}-hidden`]]: !visible,
      [styles[`${PREFIX_CLS}-borderless`]]: !bordered,
      // [`${PREFIX_CLS}-has-color`]: color && !isInternalColor,
      // [`${PREFIX_CLS}-rtl`]: direction === 'rtl',
    },
    className,
  );

  // Tag Styles
  const tagStyle: CSSProperties = {
    borderRadius:
      typeof borderRounded === 'number'
        ? `${borderRounded / 10}rem`
        : typeof borderRounded === 'boolean' && borderRounded
        ? '0.4rem'
        : '0',
    ...style,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) return;

    setVisible(false);
  };

  // if the tag is closable it will render close-icon
  // use can also provide closeIcon and it will override the static one.
  const closeIconNode = React.useMemo<React.ReactNode>(() => {
    if (closable) {
      return (
        <span
          data-name="tag"
          role="img"
          className={styles[`${PREFIX_CLS}-close-icon`]}
          onClick={handleCloseClick}
        >
          {closeIcon ? closeIcon : <CrossIcon />}
        </span>
      );
    }

    return null;
  }, [closable, closeIcon, handleCloseClick]);

  // childs cotains icon and children
  // it will render icon depening upon the user passes the custom icon component or not
  const childs = icon ? (
    <>
      <span role="img" className={styles[`${PREFIX_CLS}-icon`]}>
        {icon}
      </span>
      <span>{children}</span>
    </>
  ) : (
    children
  );

  return (
    <span ref={ref} className={tagClassName} style={tagStyle}>
      {childs}
      {closeIconNode}
    </span>
  );
});

if (__DEV__) {
  Tag.displayName = 'Tag';
}

export default Tag;
