// Translation Dictionaries (Spanish & English)
const translations = {
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    welcome: {
      title: "FRONTEND DEVELOPER",
      badge: "Frontend Specialist",
      projects: "Proyectos",
      years_exp: "Años Experiencia",
      tech_stack: "Tecnologías",
      about_title: "Sobre Mí",
      about_text_1: "Desarrollador Frontend enfocado en crear experiencias web modernas e intuitivas.",
      about_text_2: "Me especializo en el ecosistema React, transformando diseños complejos en código limpio, mantenible y de alto rendimiento.",
      focus: "ENFOQUE",
      philosophy: "FILOSOFÍA",
      objective: "OBJETIVO",
      impact: "Impacto Real",
      download_cv: "Descargar CV"
    },
    skills: {
      static_prefix: "Trabajo con",
      default_hover: "estas herramientas"
    },
    projects: {
      title: "Proyectos",
      items: {
        Pokedex: {
          title: "Pokedex",
          description: "Pagina web de pokemon con una pokedex regional y nacional general o por juegos, tracker, comparador de stats, etc"
        },
        SGTM: {
          title: "SGTM",
          description: "Sistema de Gestión de base de datos para un taller mecánico, con roles, modulos, reportes, etc."
        },
        portfolio: {
          title: "Portfolio",
          description: "Portfolio personal para mostrar mis proyectos y habilidades"
        }
      }
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
      footer: `© ${new Date().getFullYear()} Daniel Cerpa — Ingeniero de Sistemas`,
      built_with: "Construido con HTML5, CSS3, Vanilla JS & GSAP"
    }
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    welcome: {
      title: "FRONTEND DEVELOPER",
      badge: "Frontend Specialist",
      projects: "Projects",
      years_exp: "Years Experience",
      tech_stack: "Technologies",
      about_title: "About Me",
      about_text_1: "Frontend developer focused on creating modern and intuitive web experiences.",
      about_text_2: "I specialize in the React ecosystem, transforming complex designs into clean, maintainable, and high-performance code.",
      focus: "FOCUS",
      philosophy: "PHILOSOPHY",
      objective: "OBJECTIVE",
      impact: "Real Impact",
      download_cv: "Download CV"
    },
    skills: {
      static_prefix: "Work with",
      default_hover: "these tools"
    },
    projects: {
      title: "Projects",
      items: {
        Pokedex: {
          title: "Pokedex",
          description: "Web page of pokemon with a regional and national pokedex general or by games, tracker, stats comparator, etc"
        },
        SGTM: {
          title: "SGTM",
          description: "Database Management System for a mechanical workshop, with roles, modules, reports, etc."
        },
        portfolio: {
          title: "Portfolio",
          description: "Personal portfolio to show my projects and skills."
        }
      }
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind? I'd love to hear about it. I'm always open to new opportunities and collaborations.",
      footer: `© ${new Date().getFullYear()} Daniel Cerpa — Systems Engineer`,
      built_with: "Built with HTML5, CSS3, Vanilla JS & GSAP"
    }
  }
};

let currentLang = 'es';
let currentHoveredSkill = null;

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageSwitcher();
  initSkillsHover();
  applyLanguage(currentLang);
});

// 1. Language Logic
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update switcher UI classes
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    if (lang === 'en') {
      switcher.classList.remove('is-es');
      switcher.classList.add('is-en');
    } else {
      switcher.classList.remove('is-en');
      switcher.classList.add('is-es');
    }
  }

  // Update element contents by data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedValue(t, keyPath);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update skill header
  const highlightEl = document.getElementById('highlightTech');
  if (highlightEl) {
    highlightEl.textContent = currentHoveredSkill || t.skills.default_hover;
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
}

function initLanguageSwitcher() {
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
    });
  }
}

// 2. Navbar Logic (Scroll effect & active section tracking)
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = ['home', 'skills', 'projects', 'contact'];

  const handleScroll = () => {
    // Glassmorphism shadow on scroll
    if (window.scrollY > 20) {
      navbar?.classList.add('navbar--scrolled');
    } else {
      navbar?.classList.remove('navbar--scrolled');
    }

    // Active link highlighting
    let currentSection = 'home';
    const offsets = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return { id, top: Infinity };
      return { id, top: el.getBoundingClientRect().top };
    });

    const visible = offsets
      .filter(({ top }) => top <= window.innerHeight * 0.4)
      .sort((a, b) => b.top - a.top);

    if (visible.length > 0) {
      currentSection = visible[0].id;
    }

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('data-section');
      if (sectionId === currentSection) {
        link.classList.add('navbar-link--active');
        if (!link.querySelector('.navbar-indicator')) {
          const indicator = document.createElement('span');
          indicator.className = 'navbar-indicator';
          link.appendChild(indicator);
        }
      } else {
        link.classList.remove('navbar-link--active');
        const indicator = link.querySelector('.navbar-indicator');
        if (indicator) indicator.remove();
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial run

  // Click scroll handler
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// 3. Skills Carousel Hover Tracker
function initSkillsHover() {
  const track = document.getElementById('carouselTrack');
  const highlightEl = document.getElementById('highlightTech');
  if (!track || !highlightEl) return;

  let mouseX = 0;
  let mouseY = 0;
  let isInside = false;

  const checkHover = () => {
    if (!isInside) return;
    const element = document.elementFromPoint(mouseX, mouseY);
    const card = element?.closest('.modern-skill-card');
    const skillName = card?.getAttribute('data-skill') || null;

    if (skillName !== currentHoveredSkill) {
      currentHoveredSkill = skillName;
      const defaultText = translations[currentLang].skills.default_hover;
      highlightEl.textContent = skillName || defaultText;
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
    currentHoveredSkill = null;
    const defaultText = translations[currentLang].skills.default_hover;
    highlightEl.textContent = defaultText;
  };

  setInterval(checkHover, 50);

  track.addEventListener('mouseenter', onMouseEnter);
  track.addEventListener('mouseleave', onMouseLeave);
  window.addEventListener('mousemove', onMouseMove);
}
