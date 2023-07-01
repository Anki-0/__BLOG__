import { __DEV__ } from '@/utils/assertions';
import React from 'react';

interface Props {
  className?: string;
  fill?: string;
}

const DividerHorizontalIcon = React.forwardRef<SVGSVGElement, Props>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        className={props?.className}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
          fill={props?.fill}
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  },
);

if (__DEV__) {
  DividerHorizontalIcon.displayName = 'CheckIcon';
}

export default DividerHorizontalIcon;
