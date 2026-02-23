import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === 'en';

  const toggle = () => i18n.changeLanguage(isEN ? 'es' : 'en');

  return (
    <button
      className="lang-btn"
      onClick={toggle}
      aria-label={isEN ? 'Cambiar a español' : 'Switch to English'}
    >
      <span className="lang-text">{isEN ? 'ES' : 'EN'}</span>
    </button>
  );
}

export default LanguageSwitcher;
