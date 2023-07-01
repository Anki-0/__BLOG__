import { __DEV__ } from '@/utils/assertions';
import React from 'react';

interface Props {
  className?: string;
  fill?: string;
}

const DotFilledIcon = React.forwardRef<SVGSVGElement, Props>((props, ref) => {
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
        fill={props?.fill}
        d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
      />
    </svg>
  );
});

if (__DEV__) {
  DotFilledIcon.displayName = 'DotFilledIcon';
}

export default DotFilledIcon;
