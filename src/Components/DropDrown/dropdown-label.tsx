import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import cn from 'classnames';
import styles from './style/dropdown.module.scss';
import { __DEV__ } from '@/utils/assertions';

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Primitive.Label>,
  ComponentPropsWithoutRef<typeof Primitive.Label> & {}
>(({ className, ...props }, ref) => (
  <Primitive.Label
    ref={ref}
    className={cn(styles['dropdown-label'], className)}
    {...props}
  />
));

if (__DEV__) {
  DropdownMenuLabel.displayName = Primitive.Label.displayName;
}

export default DropdownMenuLabel;
