import React, { useState, useEffect, useContext} from 'react';
import { ThemeContext } from './themeContext';
import MoonIcon from '../assets/icon-moon.svg'; 
import SunIcon  from '../assets/icon-sun.svg'
import '../App.css'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section className={`theme-container ${theme}`}>
      <div className="nav-container">
        <div className={`devfinder ${theme}`}>devfinder</div> 
        <div onClick={toggleTheme} className="theme-switcher">
          <span className={`theme-text ${theme}`}>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          <img src={theme === 'dark' ? SunIcon : MoonIcon} alt="Theme Icon" className="theme-icon" />
        </div>
      </div>
    </section>
  );
};

export default ThemeToggle;
