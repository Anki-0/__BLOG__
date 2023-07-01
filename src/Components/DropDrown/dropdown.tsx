'use client';

import React from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import { DropDownProvider } from './dropdown-context';

export interface DropDrownProps extends Primitive.DropdownMenuProps {
  renderArrow?: boolean;
}

const Dropdown = (props: DropDrownProps) => {
  const { renderArrow, children, ...rest } = props;

  return (
    <DropDownProvider value={{ renderArrow }}>
      <Primitive.Root {...rest}>{children}</Primitive.Root>
    </DropDownProvider>
  );
};

export default Dropdown;
