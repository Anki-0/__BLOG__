import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { __DEV__ } from '@/utils/assertions';
import cn from 'classnames';
import styles from './style/dropdown.module.scss';

const Item = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {}
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(styles['dropdown-item'], className)}
    {...props}
  />
));

if (__DEV__) {
  Item.displayName = DropdownMenuPrimitive.Item.displayName;
}

export default Item;
