import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import ChevronRightIcon from '@/public/icons/ChevronRightIcon';
import cn from 'classnames';
import styles from './style/dropdown.module.scss';
import { __DEV__ } from '@/utils/assertions';

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof Primitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof Primitive.SubTrigger> & {}
>(({ className, children, ...props }, ref) => (
  <Primitive.SubTrigger
    ref={ref}
    className={cn(styles['dropdown-subTrigger'], className)}
    {...props}
  >
    {children}
    <ChevronRightIcon className={styles['dropdown-ChevronRightIcon']} />
  </Primitive.SubTrigger>
));

if (__DEV__) {
  DropdownMenuSubTrigger.displayName = Primitive.SubTrigger.displayName;
}

export default DropdownMenuSubTrigger;
