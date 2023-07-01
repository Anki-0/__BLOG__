import React, { ReactNode, createContext, useContext } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '.';

type DailogContextType = Omit<DialogProps, keyof DialogPrimitive.DialogProps>;

const DailogContext = createContext<DailogContextType>({} as DailogContextType);

export const DialogProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: DailogContextType;
}) => {
  return (
    <DailogContext.Provider value={value}>{children}</DailogContext.Provider>
  );
};

export const useDialogContext = (): DailogContextType =>
  useContext(DailogContext);
