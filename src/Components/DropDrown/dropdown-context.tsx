import React, { ReactNode, createContext, useContext } from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { DropDrownProps } from './dropdown';

type DropDownContextType = Omit<DropDrownProps, keyof DropdownMenuProps>;

const DropDownContext = createContext<DropDownContextType>(
  {} as DropDownContextType,
);

export const DropDownProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: DropDownContextType;
}) => {
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

export const useDropDownContext = (): DropDownContextType =>
  useContext(DropDownContext);
