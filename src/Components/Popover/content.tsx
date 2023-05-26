'use client';
import React, {
  CSSProperties,
  ComponentProps,
  ElementRef,
  forwardRef,
} from 'react';

import { Content as _Content, Arrow, Close } from '@radix-ui/react-popover';

import { PopoverPlacement, getPlacement } from './utils';
import CrossIcon from 'public/icons/crossIcon';
import { __DEV__ } from '@/utils/assertions';

import { usePopoverContext } from './popover-context';
import styles from './style/popover.module.scss';

interface PopoverContentProps
  extends Omit<
    ComponentProps<typeof _Content>,
    'avoidCollisions' | 'side' | 'align'
  > {
  placement?: PopoverPlacement;
}

// Popover Content
export const Content = forwardRef<
  ElementRef<typeof _Content>,
  PopoverContentProps
>((props, ref) => {
  const {
    shouldFlip,
    style,
    arrowHeight = 8,
    arrowWidth = 14,
    renderArrow,
    // disableShadow,
    // isBordered,
    renderCloseIcon,
  } = usePopoverContext();

  const { children, placement, ...restProps } = props;
  const { side, align } = getPlacement(placement);

  const arrowStyles: CSSProperties = {
    width: arrowWidth,
    height: arrowHeight,
  };

  const closeNode = (
    <Close aria-label="Close" className={styles['popover__close']}>
      <CrossIcon />
    </Close>
  );

  return (
    <_Content
      {...restProps}
      ref={ref}
      side={side}
      align={align}
      avoidCollisions={shouldFlip}
      style={style}
      className={styles.Popover__Content}
    >
      {children}

      {renderCloseIcon && closeNode}

      {renderArrow && (
        <Arrow
          width={arrowWidth}
          height={arrowHeight}
          style={arrowStyles}
          asChild
        >
          <div className={styles.arrow} />
        </Arrow>
      )}
    </_Content>
  );
});

if (__DEV__) {
  Content.displayName = 'popover-content';
}
