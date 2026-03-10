import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [email] = useState('dvillanuevacerpa@gmail.com');
  const [github] = useState('github.com/VillanuevaDaniel');
  const [linkedin] = useState('linkedin.com/in/danielvillanuevacerpa');
  const [twitter] = useState('@danidev04');

  return (
    <div className="contact-section-wrapper">
      <div className="section-header">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-description">
            {t('contact.description')}
          </p>
          
          <div className="contact-grid">
            <a href={`mailto:${email}`} className="modern-contact-card">
              <Mail className="contact-icon blue" size={24} />
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">{email}</span>
              </div>
              <ArrowRight className="card-arrow" size={18} />
            </a>

            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="modern-contact-card">
              <Github className="contact-icon" size={24} />
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">{github}</span>
              </div>
              <ArrowRight className="card-arrow" size={18} />
            </a>

            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="modern-contact-card">
              <Linkedin className="contact-icon blue" size={24} />
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">{linkedin}</span>
              </div>
              <ArrowRight className="card-arrow" size={18} />
            </a>

            <a href={`https://twitter.com/${twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="modern-contact-card">
              <Twitter className="contact-icon blue" size={24} />
              <div className="contact-details">
                <span className="contact-label">Twitter</span>
                <span className="contact-value">{twitter}</span>
              </div>
              <ArrowRight className="card-arrow" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="minimal-footer">
        <p>{t('contact.footer', { year: new Date().getFullYear(), role: t('contact.role') })}</p>
      </div>
    </div>
  );
}

export default Contact;
