import React from 'react';

const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
export const ThemeContext = React.createContext(defaultTheme);
