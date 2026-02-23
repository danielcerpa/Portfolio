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
        { name: 'React', logo: '/svgs/react_light.svg' },
        { name: 'JavaScript', logo: '/svgs/javascript.svg' },
        { name: 'TypeScript', logo: '/svgs/typescript.svg' },
        { name: 'HTML5', logo: '/svgs/html5.svg' },
        { name: 'CSS3', logo: '/svgs/css.svg', invertInLight: true },
        { name: 'Next.js', logo: '/svgs/nextjs_icon_dark.svg', invertInLight: true },
        { name: 'PostgreSQL', logo: '/svgs/postgresql.svg', invertInLight: true },
        { name: 'Python', logo: '/svgs/python.svg', invertInLight: true },
        { name: 'Git', logo: '/svgs/git.svg', invertInLight: true },
        { name: 'Docker', logo: '/svgs/docker.svg', invertInLight: true },
        { name: 'Vite', logo: '/svgs/vite.svg' },
        { name: 'GitHub', logo: '/svgs/github_dark.svg', invertInLight: true },
        { name: 'MySQL', logo: '/svgs/mysql-icon-light.svg', invertInLight: true }
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
