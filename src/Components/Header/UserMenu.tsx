import React, { Fragment } from 'react';
import DropDown from '../DropDrown';
import styles from './styles/header.module.scss';
import Link from 'next/link';

export type MenuData = {
  id: number;
  name: string;
  separator: boolean;
  className?: string;
  href?: string;
}[];

interface UserMenuProps {
  children?: React.ReactNode;
  menuData?: MenuData;
}

export const UserMenu = (props: UserMenuProps) => {
  const { menuData, children } = props;

  return (
    <DropDown renderArrow>
      <DropDown.Trigger>{children}</DropDown.Trigger>
      <DropDown.Portal>
        <DropDown.Content className={styles['user__menu']} align="end">
          {menuData?.map((item) => (
            <Fragment key={item.id}>
              {item.href ? (
                <Link href={item.href} shallow passHref>
                  <DropDown.Item
                    className={item.className && styles[item.className]}
                  >
                    {item.name}
                  </DropDown.Item>
                </Link>
              ) : (
                <DropDown.Item
                  className={item.className && styles[item.className]}
                >
                  {item.name}
                </DropDown.Item>
              )}
              {item.separator && <DropDown.Separator />}
            </Fragment>
          ))}
        </DropDown.Content>
      </DropDown.Portal>
    </DropDown>
  );
};
