import { __DEV__ } from '@/utils/assertions';
import React from 'react';

interface Props {
  className?: string;
  fill?: string;
}

const SearchIcon = React.forwardRef<SVGSVGElement, Props>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width='16.001'
      height='15.998'
      viewBox='0 0 16.001 15.998'
      className={props?.className}
    >
      <path
        id='icon'
        d='M11.742,10.344a6.5,6.5,0,1,0-1.4,1.4h0a1.17,1.17,0,0,0,.1.115l3.85,3.85a1,1,0,0,0,1.415-1.414l-3.85-3.85a1.007,1.007,0,0,0-.115-.1ZM12,6.5A5.5,5.5,0,1,1,6.5,1,5.5,5.5,0,0,1,12,6.5Z'
        transform='translate(0.001 -0.002)'
        fill={props?.fill}
      />
    </svg>
  );
});

if (__DEV__) {
  SearchIcon.displayName = 'searchIcon';
}

export default SearchIcon;
