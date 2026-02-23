import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'light';
    return false; // Predeterminado a oscuro
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  const toggle = () => setIsLight(!isLight);

  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {isLight ? (
        <Moon className="theme-btn-icon" size={20} strokeWidth={2.5} />
      ) : (
        <Sun className="theme-btn-icon" size={20} strokeWidth={2.5} />
      )}
    </button>
  );
}

export default ThemeSwitcher;

