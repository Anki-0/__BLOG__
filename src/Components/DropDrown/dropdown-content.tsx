'use client';

import { __DEV__ } from '@/utils/assertions';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import React, { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react';
import { useDropDownContext } from './dropdown-context';
import styles from './style/dropdown.module.scss';
import classNames from 'classnames';

interface ContentProps
  extends ComponentPropsWithoutRef<typeof Primitive.Content> {}

const Content = React.forwardRef<
  ElementRef<typeof Primitive.Content>,
  ContentProps
>((props, ref) => {
  const { children, className, sideOffset = 4, ...restProps } = props;

  const { renderArrow } = useDropDownContext();

  return (
    <Primitive.Portal>
      <Primitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={classNames(styles['dropdown-content'], className)}
        {...restProps}
      >
        {children}
        {renderArrow && (
          <Primitive.Arrow className={styles['dropdown-arrow']}>
            <div className={styles.arrow} />
          </Primitive.Arrow>
        )}
      </Primitive.Content>
    </Primitive.Portal>
  );
});

if (__DEV__) {
  Content.displayName = 'Dropdown Content';
}

const DropDownSubContent = forwardRef<
  ElementRef<typeof Primitive.SubContent>,
  ComponentPropsWithoutRef<typeof Primitive.SubContent>
>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Primitive.SubContent
      ref={ref}
      className={classNames(styles['dropdown-subcontent'], className)}
      {...restProps}
    >
      {children}
    </Primitive.SubContent>
  );
});

if (__DEV__) {
  DropDownSubContent.displayName = 'Dropdown SubContent';
}

export { Content, DropDownSubContent };
