import { __DEV__ } from '@/utils/assertions';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import styles from './style/dropdown.module.scss';
import classNames from 'classnames';
import CheckIcon from '@/public/icons/CheckIcon';
import DividerHorizontalIcon from '@/public/icons/DividerHorizontalIcon';

type CheckboxItemProps = ComponentPropsWithoutRef<
  typeof Primitive.CheckboxItem
>;

const CheckboxItem = React.forwardRef<
  ElementRef<typeof Primitive.CheckboxItem>,
  CheckboxItemProps
>((props, ref) => {
  const { children, className, ...restProps } = props;
  return (
    <Primitive.CheckboxItem
      ref={ref}
      className={classNames(styles['dropdown-checkboxItem'], className)}
      {...restProps}
    >
      <Primitive.ItemIndicator className={styles['dropdown-itemIndicator']}>
        <Primitive.ItemIndicator>
          {props.checked === 'indeterminate' && (
            <DividerHorizontalIcon
              className={styles['dropdown-dividerHorizontalIcon']}
            />
          )}
          {props.checked === true && (
            <CheckIcon className={styles['dropdown-checkIcon']} />
          )}
        </Primitive.ItemIndicator>
      </Primitive.ItemIndicator>

      {children}
    </Primitive.CheckboxItem>
  );
});

if (__DEV__) {
  CheckboxItem.displayName = 'CheckboxItem';
}

export default CheckboxItem;
