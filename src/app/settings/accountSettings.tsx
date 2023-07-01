import React, { useState } from 'react';
import { SettingItem } from './SettingsItems';
import EmailSettingsModal from './Modals/EmailSettings';
import ProfileSettingsModal from './Modals/ProfileSettings';
import UsernameSettingsModal from './Modals/usernameSettings';

const fetchData = {
  email: 'singhankit25apr@gamil.com',
  username: 'ankitsingh',
  name: 'Ankit Singh',
  image: '/avatar.png',
  // image: null,
};

const AccountSettings = () => {
  const [data, setData] = useState<typeof fetchData>(fetchData);

  return (
    <>
      <EmailSettingsModal email={data.email} setData={setData}>
        <SettingItem label="Email address" placeholderValue={data.email} />
      </EmailSettingsModal>

      <UsernameSettingsModal setData={setData} username={data.username}>
        <SettingItem
          label="Username"
          placeholderValue={`${'@'.concat('', data.username)}`}
        />
      </UsernameSettingsModal>

      <ProfileSettingsModal data={data} setData={setData}>
        <SettingItem
          label="Profile information"
          description="Edit your photo, name, bio, etc."
          placeholderValue={`${'@'.concat('', data.name)}`}
          img={fetchData.image}
        />
      </ProfileSettingsModal>
      {/* <SettingItem
        label="Profile design"
        description="Pick colors and fonts, style the header, and make your profile unique."
        varient="link"
      />
      <SettingItem
        label="Recommended reading"
        description="Featured stories, columns, and collections that we think you’ll enjoy based on your reading history."
        varient="checkbox"
      /> */}
    </>
  );
};

export default AccountSettings;
