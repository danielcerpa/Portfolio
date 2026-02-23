import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsContent.css';

function SkillsContent() {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const trackRef = useRef(null);
  const hoveredRef = useRef(null);

  const categories = [
    {
      skills: [
        { name: 'React', logo: 'https://svgl.app/library/react_dark.svg' },
        { name: 'JavaScript', logo: 'https://svgl.app/library/javascript.svg' },
        { name: 'TypeScript', logo: 'https://svgl.app/library/typescript.svg' },
        { name: 'HTML5', logo: 'https://svgl.app/library/html5.svg' },
        { name: 'CSS3', logo: 'https://svgl.app/library/css.svg' },
        { name: 'Node.js', logo: 'https://svgl.app/library/nodejs.svg' },
        { name: 'PostgreSQL', logo: 'https://svgl.app/library/postgresql.svg' },
        { name: 'Python', logo: 'https://svgl.app/library/python.svg' },
        { name: 'Git', logo: 'https://svgl.app/library/git.svg' },
        { name: 'Docker', logo: 'https://svgl.app/library/docker.svg' },
        { name: 'Vite', logo: 'https://svgl.app/library/vite.svg' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/white', invertInLight: true },
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/white', invertInLight: true }
      ]
    }
  ];

  const tripledSkills = [...categories[0].skills, ...categories[0].skills, ...categories[0].skills];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let mouseX = 0;
    let mouseY = 0;
    let isInside = false;

    const checkHover = () => {
      if (!isInside) return;

      const element = document.elementFromPoint(mouseX, mouseY);
      const card = element?.closest('.modern-skill-card');
      const skillName = card?.getAttribute('data-skill') || null;

      if (skillName !== hoveredRef.current) {
        hoveredRef.current = skillName;
        setHoveredSkill(skillName);
      }
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isInside = true;
      checkHover();
    };

    const onMouseEnter = () => {
      isInside = true;
    };

    const onMouseLeave = () => {
      isInside = false;
      hoveredRef.current = null;
      setHoveredSkill(null);
    };

    const interval = setInterval(checkHover, 50);

    track.addEventListener('mouseenter', onMouseEnter);
    track.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      clearInterval(interval);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []); 

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h1 className="skills-title">
          <span className="static-prefix">{t('skills.static_prefix')}</span>
          <span key={hoveredSkill} className="highlight-tech">
            {hoveredSkill || t('skills.default_hover')}
          </span>
        </h1>
      </div>

      <div className="carousel-wrapper">
        <div 
          className="carousel-track" 
          ref={trackRef}
        >
          {tripledSkills.map((skill, sIdx) => (
            <div 
              key={sIdx} 
              className="modern-skill-card"
              data-skill={skill.name}
            >
              <div className="skill-logo-wrapper">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className={`skill-logo ${skill.invertInLight ? 'invert-in-light' : ''}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsContent;
