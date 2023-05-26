import React, { ReactNode, createContext, useContext } from 'react';
import { PopoverProps as RadixPopoveProps } from '@radix-ui/react-popover';
import { PopoverProps } from './popover';

type PopoverContextType = Omit<PopoverProps, keyof RadixPopoveProps>;

const PopoverContext = createContext<PopoverContextType>(
  {} as PopoverContextType
);

export const PopoverProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: PopoverContextType;
}) => {
  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
};

export const usePopoverContext = (): PopoverContextType =>
  useContext(PopoverContext);
