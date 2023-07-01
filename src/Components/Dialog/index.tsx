'use client';

import React, {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  CSSProperties,
} from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import styles from './styles/dialog.module.scss';

import cn from 'classnames/bind';
import { __DEV__ } from '@/utils/assertions';
import CrossIcon from '@/public/icons/crossIcon';
import { DialogProvider, useDialogContext } from './dialog-context';
import Button, { type ButtonProps, type btnType } from '../Button';

const cx = cn.bind(styles);

//////////////////////////////////////////////
////           Root Dialog                ////
//////////////////////////////////////////////
// const InternalDialog = DialogPrimitive.Root;

export interface DialogProps extends DialogPrimitive.DialogProps {
  // Whether a close (x) button is visible on top right of the modal dialog or not
  closable?: boolean;
  /** Custom close icon */
  closeIcon?: React.ReactNode;
  /** Text of the Cancel button */
  cancelText?: React.ReactNode;
  /** Text of the OK button */
  okText?: React.ReactNode;
  /** Button `type` of the OK button */
  okType?: btnType;
  /** Button `type` of the CANCEL button */
  cancelType?: btnType;
  /** Whether to apply loading visual effect for OK button or not */
  confirmLoading?: boolean;
  /** Width of the modal dialog */
  width?: number;
  /** Whether show mask or not */
  mask?: boolean;

  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;

  /** Specify a function that will be called when a user clicks the OK button */
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const InternalDialog = (props: DialogProps) => {
  const {
    closable,
    closeIcon,
    cancelText,
    okText,
    onCancel,
    onOk,
    okType,
    cancelType,
    confirmLoading,
    width,
    cancelButtonProps,
    okButtonProps,
    children,
    ...restProps
  } = props;

  return (
    <DialogPrimitive.Root {...restProps}>
      <DialogProvider
        value={{
          closable,
          closeIcon,
          onOk,
          confirmLoading,
          onCancel,
          cancelText,
          okText,
          okType,
          cancelType,
          width,
          cancelButtonProps,
          okButtonProps,
        }}
      >
        {children}
      </DialogProvider>
    </DialogPrimitive.Root>
  );
};

//////////////////////////////////////////////
////         Dialog Trigger               ////
//////////////////////////////////////////////
const DialogTrigger = DialogPrimitive.Trigger;

//////////////////////////////////////////////
////         Dialog Portal                ////
//////////////////////////////////////////////
const DialogPortal = (props: DialogPrimitive.DialogPortalProps) => {
  const { className, children, ...restProps } = props;
  return (
    <DialogPrimitive.Portal className={cx(className)} {...restProps}>
      {children}
    </DialogPrimitive.Portal>
  );
};

//////////////////////////////////////////////
////         Dialog Overlay               ////
//////////////////////////////////////////////
const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cx(styles.DialogOverlay, className)}
      {...restProps}
    />
  );
});

//////////////////////////////////////////////
////         Dialog Content               ////
//////////////////////////////////////////////
const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>((props, ref) => {
  const { className, children, style, ...restProps } = props;
  const { closable = false, closeIcon, width, onCancel } = useDialogContext();

  const DialogContentStyles: CSSProperties = {
    maxWidth: `${(width as number) / 10}rem`,
    ...style,
  };

  // if the tag is closable it will render close-icon
  // use can also provide closeIcon and it will override the static one.
  const closeIconNode = React.useMemo<React.ReactNode>(() => {
    if (closable) {
      return (
        <DialogPrimitive.Close
          className={styles.CloseIcon}
          asChild
          onClick={(e) => onCancel?.(e)}
        >
          <button aria-label="Close">
            {closeIcon ? closeIcon : <CrossIcon />}
          </button>
        </DialogPrimitive.Close>
      );
    }

    return null;
  }, [closable, closeIcon, onCancel]);

  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        ref={ref}
        className={cx(styles.DialogContent, className)}
        style={DialogContentStyles}
        {...restProps}
      >
        {closeIconNode}
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

//////////////////////////////////////////////
////         Dialog Title                 ////
//////////////////////////////////////////////
const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cx(styles.DialogTitle, className)}
      {...restProps}
    />
  );
});

//////////////////////////////////////////////
////         Dialog Description           ////
//////////////////////////////////////////////

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cx(styles.DialogDescription, className)}
      {...restProps}
    />
  );
});

//////////////////////////////////////////////
////            Dialog Footer             ////
//////////////////////////////////////////////

const DialogFooter = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...restProps } = props;

  const {
    okText = 'OK',
    cancelText = 'Cancel',
    onOk,
    cancelButtonProps,
    okButtonProps,
    onCancel,
    okType,
    confirmLoading,
  } = useDialogContext();

  const dialogFooterNode = (
    <>
      <Button
        size="sm"
        varient="default"
        onClick={(e) => onCancel?.(e)}
        {...cancelButtonProps}
      >
        {cancelText}
      </Button>
      <Button
        size="sm"
        varient={okType}
        onClick={(e) => onOk?.(e)}
        loading={confirmLoading}
        {...okButtonProps}
      >
        {okText}
      </Button>
    </>
  );

  return (
    <div className={cx(styles.DialogFooter, className)} {...restProps}>
      {children ?? dialogFooterNode}
    </div>
  );
};

//////////////////////////////////////////////
////            Dialog Body               ////
//////////////////////////////////////////////

const DialogBody = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...restProps } = props;

  const { okText } = useDialogContext();

  return (
    <div className={cx(styles.DialogBody, className)} {...restProps}>
      {children}
    </div>
  );
};

if (__DEV__) {
  DialogFooter.displayName = 'DialogFooter';
  DialogBody.displayName = 'DialogBody';
  DialogPortal.displayName = DialogPrimitive.Portal.displayName;
  DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
  DialogContent.displayName = DialogPrimitive.Content.displayName;
  DialogTitle.displayName = DialogPrimitive.Title.displayName;
  DialogDescription.displayName = DialogPrimitive.Description.displayName;
}

type InternalDialogType = typeof InternalDialog;
type CompondComponent = InternalDialogType & {
  Trigger: typeof DialogTrigger;
  Portal: typeof DialogPortal;
  Overlay: typeof DialogOverlay;
  Content: typeof DialogContent;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Footer: typeof DialogFooter;
  Body: typeof DialogBody;
};

const Dialog = InternalDialog as CompondComponent;

Dialog.Trigger = DialogTrigger;
Dialog.Portal = DialogPortal;
Dialog.Overlay = DialogOverlay;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Body = DialogBody;

export default Dialog;
