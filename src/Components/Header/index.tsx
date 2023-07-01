'use client';

import React from 'react';

import style from './styles/header.module.scss';
import AuthActions from './Auth-Actions';
import Search from '../Search';
import User from './User';
import ThemeToggler from '../ThemeToggleSwitch';
import Logo from '@/public/Logo';
import Link from 'next/link';

const isAuth = true;

const Header = () => {
  return (
    <div className={style['header']}>
      <div className={style['header__left-portion']}>
        <Search />
      </div>

      <div className={style['logo']}>
        <Link href="/">
          <div className={style['logo__svg']}>
            <Logo />
          </div>
          <span className={style['logo__text']}>BLOG</span>
        </Link>
      </div>

      <div className={style['header__right-portion']}>
        {isAuth ? (
          <>
            <ThemeToggler />
            <User />
          </>
        ) : (
          <AuthActions />
        )}
      </div>
    </div>
  );
};

export default Header;
