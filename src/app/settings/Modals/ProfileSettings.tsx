import Dialog from '@/Components/Dialog';
import React, { useState } from 'react';
import styles from '../styles/settings.module.scss';
import { isEmailValid } from '@/utils/_helpers';
import Image from 'next/image';

interface ProfileSettingsProps {
  children?: React.ReactNode;
  data: any;
  setData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      username: string;
      name: string;
      image: string;
    }>
  >;
}

const ProfileSettingsModal = (props: ProfileSettingsProps) => {
  const { data } = props;
  const [name, setName] = React.useState<string | undefined>(data?.name);
  const [bio, setBio] = React.useState<string | undefined>(data?.bio);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  // i.e if name is smaller or equal to 50.
  const isNameLenghtValid = name ? name.length <= 50 : true;
  const isBioLenghtValid = bio ? bio?.length <= 160 : true;

  //   const [email, setEmail] = React.useState(props.email);

  const handleCancel = () => {
    // setEmail(() => props.email);
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      // props.setData((prev) => ({ ...prev, email: email as string }));
      setConfirmLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog
      closable
      okText="Save"
      okType={!isNameLenghtValid || !isBioLenghtValid ? 'danger' : 'success'}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      cancelButtonProps={{ disable: confirmLoading }}
      okButtonProps={{ disable: !isNameLenghtValid || !isBioLenghtValid }}
      //   confirmLoading={confirmLoading}
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
            Profile information
          </Dialog.Title>

          <Dialog.Body className={styles['profile__setting--modal-body']}>
            <div className={styles['profile__avatar']}>
              <span>Photo</span>
              <div className={styles.wrapper}>
                <div className={styles.avatar}>
                  <Image
                    src={data.image ?? '/test.png'}
                    fill={true}
                    quality={100}
                    alt="profile-photo"
                  />
                </div>

                <div className={styles['avatar-action-container']}>
                  <div className={styles['action-buttons']}>
                    <div id={styles.update__button}>Update</div>
                    <div id={styles.remove__button}>Remove</div>
                  </div>
                  <p className={styles.description}>
                    Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                    per side.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.name__container}>
              <fieldset
                className={styles['input-container']}
                data-isValid={isNameLenghtValid}
              >
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </fieldset>
              <div className={styles['suggestion-text-container']}>
                <p
                  className={styles['suggestion-text']}
                  data-isValid={isNameLenghtValid}
                >
                  {isNameLenghtValid
                    ? `Appears on your Profile page, as your byline, and in your
              responses.`
                    : `Name may only contain a maximum of 50 characters.`}
                </p>

                <div className={styles['text-limit-indicator']}>
                  <p>
                    <span data-isValid={isNameLenghtValid}>{name?.length}</span>
                    /50
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bio__container}>
              <fieldset
                className={styles['input-container']}
                data-isValid={isBioLenghtValid}
              >
                <label htmlFor="bio">Bio</label>
                <input
                  id="bio"
                  type="text"
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.currentTarget.value)}
                />
              </fieldset>
              <div className={styles['suggestion-text-container']}>
                <p
                  className={styles['suggestion-text']}
                  data-isValid={isBioLenghtValid}
                >
                  {isBioLenghtValid
                    ? `Appears on your Profile and next to your stories.`
                    : `Bio may only contain a maximum of 160 characters.`}
                </p>

                <div className={styles['text-limit-indicator']}>
                  <p>
                    <span data-isValid={isBioLenghtValid}>
                      {bio?.length ?? 0}
                    </span>
                    /160
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Body>
          <Dialog.Footer className={styles['setting__modal--footer']} />
        </Dialog.Content>
      )}
    </Dialog>
  );
};

export default ProfileSettingsModal;
