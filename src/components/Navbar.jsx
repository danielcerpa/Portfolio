import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';
function Navbar() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'home',     label: t('nav.home') },
    { id: 'skills',   label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact',  label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const visible = offsets
        .filter(({ top }) => top <= window.innerHeight * 0.4)
        .sort((a, b) => b.top - a.top);

      if (visible.length > 0) {
        setActiveSection(visible[0].id);
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => scrollTo('home')}>
          DV<span className="navbar-logo-dot">.</span>
        </button>

        <ul className="navbar-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`navbar-link${activeSection === id ? ' navbar-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {activeSection === id && <span className="navbar-indicator" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-controls">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
