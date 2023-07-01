'use client';

import styles from './styles/button.module.scss';
import classNames from 'classnames';
import React, { forwardRef } from 'react';

/**
 * TODO: - add button varient styles
 *          -- primary
 *          -- secondary
 *          -- danger
 *          -- info
 *          -- dashed
 *          -- text
 *          -- link
 *          -- ghost
 *
 * - add loading spinner icon component
 */

export type btnType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'info'
  | 'dashed'
  | 'text'
  | 'link'
  | 'ghost';
type btnShape = 'default' | 'round' | 'circle';
type btnSizes = 'sm' | 'md' | 'lg' | 'default';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  varient?: btnType;
  size?: btnSizes;
  icon?: React.ReactNode;
  button?: btnShape;
  loading?: boolean;
  disable?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    varient = 'default',
    className,
    loading = false,
    icon,
    size = 'default',
    disable,
    ...rest
  } = props;

  const buttonVarientClasses = classNames(
    styles.btn,
    styles[`btn--varient-${varient}`],
    // {
    // [styles['btn--varient-default']]: varient === 'default',
    // [styles['btn--varient-success']]: varient === 'success',
    // [styles['btn--varient-text']]: varient === 'text',
    // },
    className,
  );

  const buttonSizeClasses = classNames(styles['btn--size-default'], {
    [styles['btn--sm']]: size === 'sm',
    [styles['btn--md']]: size === 'md',
    [styles['btn--lg']]: size === 'lg',
  });

  const buttonWithIconOnlyStyle: React.CSSProperties =
    children === undefined && icon
      ? {
          padding:
            size === 'sm'
              ? 'var(--spacing-2)'
              : size === 'md'
              ? 'var(--spacing-3)'
              : size === 'lg'
              ? 'var(--spacing-4)'
              : 'var(--spacing-2)',
        }
      : {};

  const iconNode = (
    <span className={styles[`btn--${varient}-icon`]}>{icon}</span>
  );

  const loadingIconNode = loading && '...loading';

  return (
    <button
      ref={ref}
      className={`${buttonVarientClasses} ${buttonSizeClasses} `}
      style={buttonWithIconOnlyStyle}
      type="button"
      disabled={disable}
      {...rest}
    >
      {icon && !loading ? iconNode : loadingIconNode}
      {children}
    </button>
  );
});

if (process.env.NODE_ENV === 'development') {
  Button.displayName = 'Button';
}

export default Button;
