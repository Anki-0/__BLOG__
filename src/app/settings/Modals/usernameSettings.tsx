import Dialog from '@/Components/Dialog';
import React, { useState } from 'react';
import styles from '../styles/settings.module.scss';
import { isEmailValid, isUsernameValid } from '@/utils/_helpers';

interface EmailSettingsProps {
  children?: React.ReactNode;
  username: string;
  setData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      username: string;
      name: string;
      image: string;
    }>
  >;
}

const UsernameSettingsModal = (props: EmailSettingsProps) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [username, setUsername] = React.useState(props.username);

  const isValid = isUsernameValid(username);

  const handleCancel = () => {
    setUsername(() => props.username);
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      props.setData((prev) => ({ ...prev, username: username as string }));
      setConfirmLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog
      closable
      okText="Save"
      okType={isUsernameValid(username as string) ? 'success' : 'danger'}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      cancelButtonProps={{ disable: confirmLoading }}
      okButtonProps={{ disable: !isUsernameValid(username) }}
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
            Username
          </Dialog.Title>
          <Dialog.Description className={styles['setting__modal--description']}>
            Make changes to your profile here. Click save when youre done.
          </Dialog.Description>
          <Dialog.Body className={styles['email__setting--modal-body']}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              data-type={isValid ? 'valid' : 'invalid'}
            />

            <div className={styles['suggestion-text-container']}>
              <p className={styles['suggestion-text']} data-isValid={isValid}>
                {isValid
                  ? `medium.com/@${username}`
                  : `Username must be at most 30 characters long.`}
              </p>

              <div className={styles['text-limit-indicator']}>
                <p>
                  <span data-isValid={isValid}>{username.length ?? 0}</span>
                  /20
                </p>
              </div>
            </div>
          </Dialog.Body>
          <Dialog.Footer className={styles['setting__modal--footer']} />
        </Dialog.Content>
      )}
    </Dialog>
  );
};

export default UsernameSettingsModal;
