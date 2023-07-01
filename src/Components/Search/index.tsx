'use client';

import React, { useState } from 'react';
import style from './styles/_search.module.scss';
import useMediaQuery from '@/hook/useMediaQuery';
import Button from '../Button';
import SearchIcon from 'public/icons/SearchIcon';
import useIsClient from '@/hook/useIsClient';
import { Trigger, Popover, Content } from '../Popover';

const Search = () => {
  const mq = useMediaQuery('(min-width: 620px)');
  const isClient = useIsClient();
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (searchValue.length > 4) {
      setOpen(true);
    } else setOpen(false);
  }, [searchValue]);

  if (!isClient) {
    return null;
  }

  return mq ? (
    <Popover open={open}>
      <Trigger asChild>
        <div className={style.searchBox}>
          <form
            noValidate
            className={style['searchBox__form']}
            action=''
            role='search'
          >
            <input
              className={style['searchBox__form--input']}
              type='search'
              placeholder='Discover Anything'
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
              maxLength={512}
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </form>
        </div>
      </Trigger>

      {open && (
        <Content
          forceMount
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
          // onEscapeKeyDown={(e) => setOpen(false)}
        >
          <ul>
            <li>
              <a href='#'>test</a>
            </li>
            <li>
              <a href='#'>test2</a>
            </li>
            <li>
              <a href='#'>test3</a>
            </li>
          </ul>
        </Content>
      )}
    </Popover>
  ) : (
    <Button className={style['search--icon']} icon={<SearchIcon />} />
  );
};

export default Search;
