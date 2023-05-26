'use client';

import React, { CSSProperties, ComponentProps } from 'react';
import { PopoverProvider } from './popover-context';
import { Root } from '@radix-ui/react-popover';

export interface PopoverProps extends ComponentProps<typeof Root> {
  // triggerType?: TriggerType;
  disableAnimation?: boolean;

  // Overrides the side and align preferences to prevent collisions with boundary edges.
  shouldFlip?: boolean;

  // Arrow Props
  renderArrow?: boolean;
  arrowWidth?: number;
  arrowHeight?: number;

  // Overrides default styles
  style?: CSSProperties;
  isBordered?: boolean;
  renderCloseIcon?: boolean;
}

export const Popover = (props: PopoverProps) => {
  const {
    children,
    shouldFlip,
    style,
    arrowHeight,
    arrowWidth,
    renderArrow,
    isBordered,
    renderCloseIcon,
    ...restProps
  } = props;

  return (
    <PopoverProvider
      value={{
        shouldFlip,
        style,
        arrowHeight,
        arrowWidth,
        renderArrow,
        isBordered,
        renderCloseIcon,
      }}
    >
      <Root {...restProps}>{children}</Root>
    </PopoverProvider>
  );
};
