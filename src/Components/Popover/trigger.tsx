'use client';
import React, { ComponentProps } from 'react';
import { Trigger as _Trigger } from '@radix-ui/react-popover';

type PopoverTriggerProps = ComponentProps<typeof _Trigger>;

// Popover trigger
export const Trigger = (props: PopoverTriggerProps) => {
  const { children, ...restProps } = props;

  return <_Trigger {...restProps}>{children}</_Trigger>;
};
