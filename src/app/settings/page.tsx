'use client';

import cn from 'classnames';
import React from 'react';
import styles from './styles/settings.module.scss';
import { SettingItem } from './SettingsItems';
import AccountSettings from './accountSettings';

export const SettingsNavData = [
  'Account',
  // 'Publishing',
  // 'Notifications',
  // 'Security and apps',
  'Preferences',
];

const Page = () => {
  const [selectedSetting, setSelectedSetting] = React.useState('Account');

  return (
    <main className={cn(styles.settings, 'center')}>
      <div className={styles.settings__header}>
        <h1>Settings</h1>
      </div>
      <nav className={styles.settings__nav}>
        <ul>
          {SettingsNavData.map((item, index) => (
            <li key={index}>
              <button onClick={() => setSelectedSetting(item)}>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="body">
        {selectedSetting === 'Account' && <AccountSettings />}
      </div>
    </main>
  );
};

export default Page;
