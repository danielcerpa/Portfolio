import { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const techLogos = {
  'React': '/react_dark.svg',
  'Vite': '/vite.svg',
  'JavaScript': '/javascript.svg',
  'CSS': '/css.svg',
  'HTML5': '/html5.svg',
  'TypeScript': '/typescript.svg',
  'MySQL': '/mysql-icon-dark.svg',
};

function Projects() {
  const { t } = useTranslation();

  const [projects] = useState([
    {
      key: 'Pokedex',
      tech: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
      github: 'https://github.com/VillanuevaDaniel/Pokedex',
      link: 'https://pokedex-dvc.vercel.app/'
    },
    {
      key: 'SGTM',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
      github: 'https://github.com/VillanuevaDaniel',
      link: '#'
    },
    {
      key: 'portfolio',
      tech: ['React', 'Vite', 'JavaScript'],
      github: 'https://github.com/VillanuevaDaniel',
      link: '#'
    }
  ]);

  return (
    <div className="projects-section-wrapper">
      <div className="section-header">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="modern-project-card">
            <div className="project-card-top">
              <Folder className="folder-icon" size={32} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link"><Github size={20} /></a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <div className="project-card-content">
              <h3 className="project-title">{t(`projects.items.${project.key}.title`)}</h3>
              <p className="project-description">{t(`projects.items.${project.key}.description`)}</p>
            </div>
            
            <div className="project-card-footer">
              <div className="project-tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-logo-wrapper" title={tech}>
                    <img 
                      src={techLogos[tech] || techLogos['JavaScript']} 
                      alt={tech} 
                      className="tech-logo-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
