import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Ensure this path is correct

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggler" aria-label="Toggle theme">
      {theme === 'light' ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}
    </button>
  );
};

export default ThemeToggler;