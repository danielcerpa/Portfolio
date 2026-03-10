import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === 'en';

  const toggle = () => i18n.changeLanguage(isEN ? 'es' : 'en');

  return (
    <div className={`lang-switcher-wrapper ${isEN ? 'is-en' : 'is-es'}`} onClick={toggle} role="button">
      <span className="switch-label-ext es">ES</span>
      <div className="switch-toggle-base">
        <div className="switch-toggle-thumb"></div>
      </div>
      <span className="switch-label-ext en">EN</span>
    </div>
  );
}

export default LanguageSwitcher;
