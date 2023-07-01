import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';

import { __DEV__ } from '@/utils/assertions';
import styles from './style/dropdown.module.scss';

type SeparatorProps = ComponentPropsWithoutRef<typeof Primitive.Separator>;

const Separator = React.forwardRef<
  ElementRef<typeof Primitive.Separator>,
  SeparatorProps
>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <Primitive.Separator
      ref={ref}
      className={classNames(styles['dropdown-separator'], className)}
      {...restProps}
    />
  );
});

if (__DEV__) {
  Separator.displayName = 'Separator';
}

export default Separator;
