import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Apply class to document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-skin text-white shadow-lg z-50"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;