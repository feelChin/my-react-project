import React, { useState } from 'react';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../localstorage';

export const RootContext = React.createContext(null);

export const RootProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(getLocalStorage('user')));
  const [theme, setTheme] = useState(JSON.parse(getLocalStorage('theme')));

  document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');

  const signin = (info) => {
    setUser(info)
    setLocalStorage('user', info)
  };

  const signout = () => {
    setUser(null)
    setTheme(null)
    removeLocalStorage('theme')
    removeLocalStorage('user')
  };

  const value = { user, signin, signout, theme, setTheme };

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

