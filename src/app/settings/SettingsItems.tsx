import Image from 'next/image';
import React, { CSSProperties } from 'react';
import styles from './styles/settings.module.scss';
import Link from 'next/link';
import ChevronRightIcon from '@/public/icons/ChevronRightIcon';
import ArrowTopRightIcon from '@/public/icons/ArrowTopRightIcon';

interface SettingsItemProps {
  label: string;
  className?: string;
  description?: string;
  placeholderValue?: string;
  img?: React.ReactNode;
  varient?: 'checkbox' | 'link' | 'list' | 'default';
  type?: 'danger' | 'default';
  dropDown?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SettingItem = (props: SettingsItemProps) => {
  const { varient = 'default', type = 'default' } = props;

  const renderDefaultLayout = () => {
    return (
      <>
        {props.placeholderValue && (
          <span className={styles['settings__item--value-placeholder']}>
            {props.placeholderValue}
          </span>
        )}
        {props.img && (
          <div className={styles.img}>
            <Image
              alt="img"
              src={props.img as string}
              quality={80}
              fill={true}
            />
          </div>
        )}
      </>
    );
  };

  const renderLinkLayout = () => {
    return (
      <Link href={'#'}>
        {props.placeholderValue && (
          <span className={styles['settings__item--value-placeholder']}>
            {props.placeholderValue}
          </span>
        )}

        <div className={styles['link-icon']}>
          <ArrowTopRightIcon />
        </div>
      </Link>
    );
  };

  const renderCheckBoxLayout = () => {
    return <input type="checkbox" />;
  };

  // label styles
  const labelStyle: CSSProperties = {
    color: `${type === 'danger' && 'var(--clr-red-5)'}`,
  };

  return (
    <div className={styles.settings__item}>
      <div className={styles['settings__item--label']}>
        <span style={labelStyle}>{props.label}</span>
        {props.description && (
          <div className={styles['settings__item--label-description']}>
            <span>{props.description}</span>
          </div>
        )}
      </div>

      <div className={styles['settings__item--value']}>
        {varient === 'default' && renderDefaultLayout()}
        {varient === 'link' && renderLinkLayout()}
        {varient === 'checkbox' && renderCheckBoxLayout()}
      </div>
    </div>
  );
};
