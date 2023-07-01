'use client';

import React from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';

const Trigger = (props: Primitive.DropdownMenuTriggerProps) => {
  const { children, ...rest } = props;

  return <Primitive.Trigger {...rest}>{children}</Primitive.Trigger>;
};

export default Trigger;
