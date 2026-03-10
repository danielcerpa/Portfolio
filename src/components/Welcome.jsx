import { Terminal, Zap, Target, Cpu, Code, Rocket, ChevronDown, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Welcome.css';

function Welcome() {
  const { t } = useTranslation();


  return (
    <div className="welcome-wallpaper">
      <div className="welcome-content">

        <div className="intro-section">
          <h1 className="dev-name">Daniel Cerpa</h1>
          <h2 className="dev-title">{t('welcome.title')}</h2>
          <div className="badge-download-row">
            <a href="/CV_Villanueva_Cerpa_Daniel.pdf" download className="cv-download-btn">
              <Download size={16} />
              <span>{t('welcome.download_cv')}</span>
            </a>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-icon-wrapper blue">
              <Zap size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">2</span>
              <span className="stat-label">{t('welcome.years_exp')}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper blue">
              <Terminal size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">{t('welcome.projects')}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper blue">
              <Target size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">11</span>
              <span className="stat-label">{t('welcome.tech_stack')}</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h3 className="card-title">{t('welcome.about_title')}</h3>
          <div className="about-text">
            <p>{t('welcome.about_text_1')}</p>
            <p>{t('welcome.about_text_2')}</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <Target size={20} className="highlight-icon" />
              <div className="highlight-info">
                <span className="highlight-label">{t('welcome.focus')}</span>
                <span className="highlight-desc">UX/UI & DevEx</span>
              </div>
            </div>
            <div className="highlight-card">
              <Cpu size={20} className="highlight-icon" />
              <div className="highlight-info">
                <span className="highlight-label">{t('welcome.philosophy')}</span>
                <span className="highlight-desc">Clean Code</span>
              </div>
            </div>
            <div className="highlight-card">
              <Rocket size={20} className="highlight-icon" />
              <div className="highlight-info">
                <span className="highlight-label">{t('welcome.objective')}</span>
                <span className="highlight-desc">{t('welcome.impact')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="scroll-indicator">
        <span className="scroll-label">scroll</span>
        <ChevronDown size={16} className="scroll-chevron" />
      </div>
    </div>
  );
}

export default Welcome;
