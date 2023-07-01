'use client';

import React from 'react';
import Button from '../Button';

import style from './styles/header.module.scss';

function AuthActions() {
  return (
    <div className={style['auth__actions']}>
      <div className={style['auth__actions--login']}>
        <Button>Login</Button>
      </div>
      <div className={style['auth__actions--signup']}>
        <Button>signup</Button>
      </div>
    </div>
  );
}

export default AuthActions;
