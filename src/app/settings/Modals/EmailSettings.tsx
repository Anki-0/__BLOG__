import Dialog from '@/Components/Dialog';
import React, { useState } from 'react';
import styles from '../styles/settings.module.scss';
import { isEmailValid } from '@/utils/_helpers';

interface EmailSettingsProps {
  children?: React.ReactNode;
  email: string;
  setData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      username: string;
      name: string;
      image: string;
    }>
  >;
}

const EmailSettingsModal = (props: EmailSettingsProps) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [email, setEmail] = React.useState(props.email);

  const handleCancel = () => {
    setEmail(() => props.email);
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      props.setData((prev) => ({ ...prev, email: email as string }));
      setConfirmLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog
      closable
      okText="Save"
      okType={isEmailValid(email as string) ? 'success' : 'danger'}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      cancelButtonProps={{ disable: confirmLoading }}
      okButtonProps={{ disable: !isEmailValid(email) }}
      confirmLoading={confirmLoading}
    >
      <Dialog.Trigger
        className={styles['modal--trigger']}
        onClick={() => setOpen(true)}
      >
        {props.children}
      </Dialog.Trigger>

      {open && (
        <Dialog.Content className={styles.setting__modal} forceMount>
          <Dialog.Title className={styles['setting__modal--title']}>
            Email address
          </Dialog.Title>
          <Dialog.Description className={styles['setting__modal--description']}>
            Make changes to your profile here. Click save when youre done.
          </Dialog.Description>
          <Dialog.Body className={styles['email__setting--modal-body']}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              data-type={isEmailValid(email) ? 'valid' : 'invalid'}
            />
            <div
              className={styles.description}
              data-type={isEmailValid(email) ? 'valid' : 'invalid'}
            >
              {isEmailValid(email) ? (
                <p>You can sign into Medium with this email address.</p>
              ) : (
                <p>Please enter a valid email.</p>
              )}
            </div>
          </Dialog.Body>
          <Dialog.Footer className={styles['setting__modal--footer']} />
        </Dialog.Content>
      )}
    </Dialog>
  );
};

export default EmailSettingsModal;
