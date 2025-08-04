import React, { useCallback, useEffect, useMemo } from 'react';
import { ThemeContext } from './contexts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { toast } from '../utils/toast.js';

// Theme Provider com localStorage
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme-dark-mode', false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
    toast.success(`Tema ${!isDarkMode ? 'escuro' : 'claro'} ativado`);
  }, [isDarkMode, setIsDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};