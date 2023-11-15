/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { PiMoonBold, PiSunBold } from 'react-icons/pi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const themeColor = theme === 'light' ? 'light' : 'dark';
    document.documentElement.className = themeColor;
  }, [theme]);

  const handleTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <>
      {theme === 'light' && (
        <button
          type="button"
          onClick={() => handleTheme('dark')}
          className="group flex items-center transition-colors duration-200 text-rich font-medium hover:text-mandarin"
        >
          <PiMoonBold className="text-4xl sm:text-3xl border border-platinum shadow hover:shadow-none rounded-full p-1" />
        </button>
      )}
      {theme === 'dark' && (
        <button
          type="button"
          onClick={() => handleTheme('light')}
          className="group items-center font-medium transition-colors duration-200 dark:text-platinum dark:hover:text-mandarin "
        >
          <PiSunBold className="text-4xl sm:text-3xl  border border-slate-700 shadow shadow-slate-700 hover:shadow-none rounded-full p-1" />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
