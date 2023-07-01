import React from 'react';
import { UserMenu } from './UserMenu';
import Avatar from '../Avatar';

const menuItems = [
  { id: 1, name: '@ankit', separator: true, href: '/u/@ankit' },
  { id: 2, name: 'Edit Profile', separator: true, href: '/settings' },
  { id: 3, name: 'Reader', separator: true, href: '/reader' },
  { id: 4, name: 'Settings', separator: true, href: '/profile' },
  { id: 5, name: 'Help', separator: true, href: '#' },
  { id: 6, name: 'Contact', separator: true, href: '/contact' },
  { id: 7, name: 'Log out', separator: false, className: 'logout' },
];

const User = () => {
  return (
    <UserMenu menuData={menuItems}>
      <Avatar src="/avatar.png" alt="user avatar" size="large" shape="box" />
    </UserMenu>
  );
};

export default User;
