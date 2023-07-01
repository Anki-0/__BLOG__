'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import styles from './styles/themeToggle.module.scss';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div
      className={styles.switch}
      data-isdark={theme === 'dark'}
      onClick={toggleTheme}
    >
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
}
