// Translation Dictionaries (Spanish & English)
const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      experience: "Experiencia",
      skills: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto"
    },

    about:{
      title: "Sobre Mí",
      description: "<p>Desarrollo sistemas web para organizar procesos de trabajo y convertir datos en información útil. Actualmente realizo mis residencias profesionales y cuento con experiencia en proyectos de soporte técnico, gestión y análisis de datos.</p><p>Trabajo con JavaScript, PHP, MySQL y Python, además de herramientas como React y Next.js. También utilizo herramientas de IA como apoyo en mi trabajo de desarrollo.</p>"
    },
    experience: {
  "title": "Experiencia",
  "residency": {
    "label": "Actualidad",
    "title": "Residencias profesionales",
    "role": "Desarrollo de sistemas web",
    "description": "Actualmente realizo mis residencias profesionales y cuento con experiencia en el desarrollo de diversos sistemas web."
  },
  "minimal": {
    "label": "Startup",
    "title": "MINIMAL CODE",
    "role": "Sistema de soportes técnicos",
    "description": "Desarrollo de un sistema web para gestionar solicitudes de soporte técnico de diferentes empresas, utilizando JavaScript vanilla, PHP y MySQL."
  },
  "entomology": {
    "label": "Colaboración institucional",
    "title": "ITESI · Universidad de Guanajuato",
    "role": "Sistema de Entomología",
    "description": "Desarrollo de un sistema de gestión de colecciones entomológicas en el marco del convenio entre ITESI y la UG, con guías de uso en sus módulos."
  }
},
    welcome: {
      status_badge: "Disponible para nuevos proyectos",
      title: "FULLSTACK DEVELOPER",
      badge: "Fullstack Specialist",
      projects: "Proyectos",
      tech_stack: "Tecnologías",
      about_title: "Sobre Mí",
      about_text_1: "Desarrollador Fullstack y Analista de Datos",
      focus: "ENFOQUE",
      philosophy: "FILOSOFÍA",
      objective: "OBJETIVO",
      impact: "Impacto Real",
      download_cv: "Descargar CV"
    },
    skills: {
      title: "Tecnologías",
      static_prefix: "Trabajo con",
      specialized_prefix: "Especializado en",
      default_hover: "estas herramientas",
      disclaimer: "Pero siempre puedo adaptarme a nuevas tecnologías.",
      frontend: "Frontend & Web",
      backend: "Backend",
      databases: "Bases de datos",
      analysis: "Análisis de datos",
      tools: "Herramientas & DevOps"
    },
    projects: {
      title: "Proyectos",
      visit_site: "Visitar Sitio",
      view_repo: "GitHub",
      items: {
        Entomologia: {
          title: "Sistema de Entomología",
          description: "Aplicacion web para la gestión de insectos en colecciones científicas, con sistemas de préstamos, administración de colecciones y más.",
        },
        Soportes: {
          title: "Sistema de Soportes",
          description: "Aplicacion web para la gestión de soportes técnicos de múltiples empresas."
        },
        Lavanderia: {
          title: "Gestor de Lavanderías SaaS",
          description: "Plataforma SaaS para la administración integral de negocios de lavandería, control de pedidos en tiempo real, seguimiento de turnos, métricas financieras y gestión de clientes."
        },
        DataForge: {
          title: "Data Forge",
          description: "Aplicacion web que permite visualizar, editar y limpiar archivos .CSV y .XLSX. Además permite re-exportar los archivos en diferentes formatos."
        }
      }
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Siempre estoy abierto a nuevas oportunidades.",
      footer: `© ${new Date().getFullYear()} Daniel Cerpa — Ingeniero de Sistemas`,
      built_with: "Construido con HTML5, CSS3, Vanilla JS & GSAP"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      skills: "Technologies",
      projects: "Projects",
      contact: "Contact"
    },

    about:{
      title: "About Me",
      description: "<p>I develop web systems to organize workflows and turn data into useful information. I am currently completing my professional residency and have experience with technical support, management and data analysis projects.</p><p>I work with JavaScript, PHP, MySQL and Python, as well as tools such as React and Next.js. I also use AI tools to support my development work.</p>"
    },
    experience: {
  "title": "Experience",
  "residency": {
    "label": "Current",
    "title": "Professional residency",
    "role": "Web systems development",
    "description": "I am currently completing my professional residency and have experience developing various web systems."
  },
  "minimal": {
    "label": "Startup",
    "title": "MINIMAL CODE",
    "role": "Technical support system",
    "description": "Development of a web system to manage technical support requests for different companies using vanilla JavaScript, PHP and MySQL."
  },
  "entomology": {
    "label": "Institutional collaboration",
    "title": "ITESI · University of Guanajuato",
    "role": "Entomology System",
    "description": "Development of an entomological collection management system under the collaboration agreement between ITESI and UG, with user guides throughout its modules."
  }
},
    welcome: {
      status_badge: "Available for new projects",
      title: "FULLSTACK DEVELOPER",
      badge: "Fullstack Specialist",
      projects: "Projects",
      tech_stack: "Technologies",
      about_title: "About Me",
      about_text_1: "Fullstack Developer and Data Analyst",
      focus: "FOCUS",
      philosophy: "PHILOSOPHY",
      objective: "OBJECTIVE",
      impact: "Real Impact",
      download_cv: "Download CV"
    },
    skills: {
      title: "Technologies",
      static_prefix: "Work with",
      specialized_prefix: "Specialized in",
      default_hover: "these tools",
      disclaimer: "But I can always adapt to new technologies.",
      frontend: "Frontend & Web",
      backend: "Backend",
      databases: "Databases",
      analysis: "Data analysis",
      tools: "Tools & DevOps"
    },
    projects: {
      title: "Projects",
      visit_site: "Visit Site",
      view_repo: "GitHub",
      items: {
        Entomologia: {
          title: "Entomology System",
          description: "Web application for the management of insects in scientific collections, with loan systems, collection management and more."
        },
        Soportes: {
          title: "Technical Support System",
          description: "Web application for the management of technical support of multiple companies."
        },
        Lavanderia: {
          title: "Laundry Management SaaS",
          description: "SaaS platform for comprehensive laundry business management, real-time order tracking, shift scheduling, financial metrics, and customer management."
        },
        DataForge: {
          title: "Data Forge",
          description: "Web application that allows to visualize, edit and clean .CSV and .XLSX files. It also allows to re-export the files in different formats."
        }
      }
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind? I'd love to hear about it. I'm always open to new opportunities.",
      footer: `© ${new Date().getFullYear()} Daniel Cerpa — Systems Engineer`,
      built_with: "Built with HTML5, CSS3, Vanilla JS & GSAP"
    }
  }
};

let currentLang = 'es';

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initLanguageSwitcher();
  applyLanguage(currentLang);
  initInteractiveGrid();
  initAnimations();
  initProjectsCarousel();
  initCopyEmail();
});

// 0. Theme Management (Google Antigravity Dark/Light)
let currentTheme = localStorage.getItem('portfolio-theme') || 'light';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  // Update theme switch attributes
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('data-theme-state', theme);
    themeToggleBtn.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  // Update Navbar logo
  const logoImg = document.querySelector('.navbar-logo .logo-img');
  if (logoImg) {
    logoImg.src = theme === 'dark' ? './public/DC.svg' : './public/DC black.svg';
  }

  // Update SVGs that adapt to light/dark mode
  document.querySelectorAll('[data-theme-svg]').forEach(img => {
    const type = img.getAttribute('data-theme-svg');
    if (type === 'github') {
      img.src = theme === 'dark' ? './public/github_dark.svg' : './public/github_light.svg';
    } else if (type === 'react') {
      img.src = theme === 'dark' ? './public/react_dark.svg' : './public/react_light.svg';
    } else if (type === 'mysql') {
      img.src = theme === 'dark' ? './public/mysql-icon-dark.svg' : './public/mysql-icon-light.svg';
    } else if (type === 'php') {
      img.src = theme === 'dark' ? './public/php_dark.svg' : './public/php.svg';
    }
  });
}

function initThemeToggle() {
  applyTheme(currentTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

// 1. Language Logic
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update language switch attributes
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.setAttribute('data-lang-state', lang);
    switcher.setAttribute('aria-checked', lang === 'en' ? 'true' : 'false');
    switcher.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  }

  // Update element contents by data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedValue(t, keyPath);
    if (value !== undefined) {
      if (el.classList.contains('hero-title')) {
        el.textContent = value;
      } else if (el.classList.contains('carousel-desc') || el.classList.contains('carousel-title')) {
        el.setAttribute('data-full-text', value);
        if (el.closest('.project-info-slide.active')) {
          el.textContent = value;
          el.classList.add('typing-done');
        }
      } else if (el.classList.contains('about-description')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });


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
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

  let isScrollTicking = false;

  const updateNavbarOnScroll = () => {
    const scrollY = window.scrollY;
    
    // Glassmorphism shadow on scroll
    navbar?.classList.toggle('navbar--scrolled', scrollY > 20);

    // Active link highlighting
    let currentSection = 'home';
    const scrollBottom = window.innerHeight + scrollY;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollBottom >= docHeight - 60) {
      currentSection = 'contact';
    } else {
      const scrollPos = scrollY + 120;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPos) {
          currentSection = el.id;
          break;
        }
      }
    }

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('data-section');
      link.classList.toggle('navbar-link--active', sectionId === currentSection);
    });

    isScrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      isScrollTicking = true;
      requestAnimationFrame(updateNavbarOnScroll);
    }
  }, { passive: true });

  updateNavbarOnScroll(); // Initial run

  // Click scroll handler with exact navbar offset
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetEl.offsetTop - navbarHeight - 15;
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    });
  });
}

// 4. Interactive Grid Logic (Fluid LERP Inertial Physics)
function initInteractiveGrid() {
  const homeSec = document.getElementById('home');
  if (!homeSec) return;

  const spotlight = homeSec.querySelector('.bg-spotlight');
  if (!spotlight) return;

  // Only enable cursor spotlight on devices with fine pointer (mouse)
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  let isHomeVisible = true;
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight * 0.45;
  let currentX = targetX;
  let currentY = targetY;
  let isLoopRunning = false;

  // Set initial spotlight center position
  spotlight.style.setProperty('--mouse-x', currentX.toFixed(2) + 'px');
  spotlight.style.setProperty('--mouse-y', currentY.toFixed(2) + 'px');

  // Disable spotlight calculations when home section is not in viewport
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isHomeVisible = entry.isIntersecting;
        spotlight.style.display = isHomeVisible ? 'block' : 'none';
        if (isHomeVisible && !isLoopRunning) {
          startLoop();
        }
      });
    }, { threshold: 0 });
    observer.observe(homeSec);
  }

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function tick() {
    if (!isHomeVisible) {
      isLoopRunning = false;
      return;
    }

    currentX = lerp(currentX, targetX, 0.12);
    currentY = lerp(currentY, targetY, 0.12);

    spotlight.style.setProperty('--mouse-x', currentX.toFixed(2) + 'px');
    spotlight.style.setProperty('--mouse-y', currentY.toFixed(2) + 'px');

    const dx = Math.abs(targetX - currentX);
    const dy = Math.abs(targetY - currentY);

    if (dx > 0.1 || dy > 0.1) {
      requestAnimationFrame(tick);
    } else {
      isLoopRunning = false;
    }
  }

  function startLoop() {
    if (!isLoopRunning) {
      isLoopRunning = true;
      requestAnimationFrame(tick);
    }
  }
  
  // Track mouse movement globally when over the page while home is visible
  window.addEventListener('mousemove', (e) => {
    if (!isHomeVisible) return;
    targetX = e.pageX;
    targetY = e.pageY;
    startLoop();
  }, { passive: true });
}

// Subtle section entrances; text is readable immediately.
function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('section:not(#home)').forEach(section => {
    gsap.from(section.firstElementChild || section, {
      y: 16,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: section, start: 'top 92%', once: true }
    });
  });
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// 6. Projects Carousel Logic (Static text container, image-only slide track, immediately visible text)
function initProjectsCarousel() {
  const visualTrack = document.getElementById('projectsVisualTrack');
  const prevBtn = document.getElementById('projectPrevBtn');
  const nextBtn = document.getElementById('projectNextBtn');
  const visualSlides = document.querySelectorAll('.project-visual-slide');
  const infoSlides = document.querySelectorAll('.project-info-slide');

  if (!visualTrack || visualSlides.length === 0) return;

  let currentProjectIndex = 0;
  const totalProjects = visualSlides.length;
  let isTransitioning = false;

  // Store initial target full text for each title and description
  infoSlides.forEach((slide) => {
    const titleEl = slide.querySelector('.carousel-title');
    const descEl = slide.querySelector('.carousel-desc');
    if (titleEl && !titleEl.getAttribute('data-full-text')) {
      titleEl.setAttribute('data-full-text', titleEl.textContent.trim());
    }
    if (descEl && !descEl.getAttribute('data-full-text')) {
      descEl.setAttribute('data-full-text', descEl.textContent.trim());
    }
  });

  function switchProject(targetIndex) {
    const newIndex = (targetIndex + totalProjects) % totalProjects;
    currentProjectIndex = newIndex;

    const firstSlide = visualSlides[0];
    if (firstSlide) {
      const slideWidth = firstSlide.offsetWidth;
      const computedGap = parseFloat(window.getComputedStyle(visualTrack).gap) || 32;
      const infoWrapper = document.querySelector('.projects-info-wrapper');
      const sliderLeft = visualTrack.parentElement ? visualTrack.parentElement.getBoundingClientRect().left : 0;
      const containerLeft = infoWrapper ? infoWrapper.getBoundingClientRect().left : sliderLeft;
      const relativeLeft = containerLeft - sliderLeft;
      const offset = relativeLeft - (currentProjectIndex * (slideWidth + computedGap));
      visualTrack.style.transform = `translateX(${offset}px)`;
    }

    visualSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentProjectIndex);
    });

    infoSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentProjectIndex);
    });

    const mobileActionSlides = document.querySelectorAll('.mobile-action-slide');
    mobileActionSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentProjectIndex);
    });

    const newActiveSlide = infoSlides[currentProjectIndex];
    const newTitleEl = newActiveSlide?.querySelector('.carousel-title');
    const newDescEl = newActiveSlide?.querySelector('.carousel-desc');

    if (newTitleEl) {
      const titleText = newTitleEl.getAttribute('data-full-text') || newTitleEl.textContent.trim();
      newTitleEl.textContent = titleText;
    }
    if (newDescEl) {
      const descText = newDescEl.getAttribute('data-full-text') || newDescEl.textContent.trim();
      newDescEl.textContent = descText;
    }

    // Update editorial counter
    const counterCurrent = document.querySelector('.counter-current');
    const counterTotal = document.querySelector('.counter-total');
    if (counterCurrent) {
      counterCurrent.textContent = String(currentProjectIndex + 1).padStart(2, '0');
    }
    if (counterTotal) {
      counterTotal.textContent = String(totalProjects).padStart(2, '0');
    }

    isTransitioning = false;
  }

  // Cursor tracking for hover button inside each visual slide card (GPU Accelerated & Scroll-proof)
  visualSlides.forEach((slide) => {
    const btn = slide.querySelector('.carousel-hover-btn');
    if (!btn) return;

    let isHovering = false;
    let btnRaf = null;
    let lastClientX = 0;
    let lastClientY = 0;

    const updateBtnPos = () => {
      if (isHovering) {
        const rect = slide.getBoundingClientRect();
        // Check if cursor is still within the slide bounds after scroll
        if (
          lastClientX < rect.left ||
          lastClientX > rect.right ||
          lastClientY < rect.top ||
          lastClientY > rect.bottom
        ) {
          slide.classList.remove('is-hovered');
          isHovering = false;
          btnRaf = null;
          return;
        }

        const x = lastClientX - rect.left;
        const y = lastClientY - rect.top;
        btn.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

        // Split hover logic for projects with both website and repository
        const linkLeft = slide.getAttribute('data-link-left');
        const linkRight = slide.getAttribute('data-link-right');
        if (linkLeft && linkRight) {
          const isLeft = x < rect.width / 2;
          const targetLink = isLeft ? linkLeft : linkRight;
          btn.setAttribute('href', targetLink);

          const span = btn.querySelector('span');
          const svg = btn.querySelector('svg');
          if (isLeft) {
            if (span && span.textContent !== 'GitHub') span.textContent = 'GitHub';
            if (svg && !svg.getAttribute('data-is-github')) {
              svg.setAttribute('data-is-github', 'true');
              svg.innerHTML = `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`;
            }
          } else {
            const visitText = currentLang === 'es' ? 'Visitar Sitio' : 'Visit Site';
            if (span && span.textContent !== visitText) span.textContent = visitText;
            if (svg && svg.getAttribute('data-is-github')) {
              svg.removeAttribute('data-is-github');
              svg.innerHTML = `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`;
            }
          }
        }
      }
      btnRaf = null;
    };

    slide.addEventListener('mouseenter', (e) => {
      isHovering = true;
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      slide.classList.add('is-hovered');
      if (!btnRaf) {
        btnRaf = requestAnimationFrame(updateBtnPos);
      }
    });

    slide.addEventListener('mousemove', (e) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      if (!isHovering) {
        isHovering = true;
        slide.classList.add('is-hovered');
      }

      if (!btnRaf) {
        btnRaf = requestAnimationFrame(updateBtnPos);
      }
    }, { passive: true });

    // Ensure button repositioning remains accurate when scrolling over the slide
    window.addEventListener('scroll', () => {
      if (isHovering && !btnRaf) {
        btnRaf = requestAnimationFrame(updateBtnPos);
      }
    }, { passive: true });

    slide.addEventListener('mouseleave', () => {
      isHovering = false;
      slide.classList.remove('is-hovered');
      // Reset button default text/icon when leaving
      const span = btn.querySelector('span');
      const svg = btn.querySelector('svg');
      if (span) span.textContent = currentLang === 'es' ? 'Visitar Sitio' : 'Visit Site';
      if (svg) {
        svg.removeAttribute('data-is-github');
        svg.innerHTML = `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`;
      }
    });

    slide.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href) {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      switchProject(currentProjectIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      switchProject(currentProjectIndex + 1);
    });
  }

  let lastWindowWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWindowWidth) {
      lastWindowWidth = window.innerWidth;
      switchProject(currentProjectIndex);
    }
  });

  // Initial trigger & centering for first slide
  switchProject(0);
}

// 7. Copy Email to Clipboard
function initCopyEmail() {
  const btn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('copyToast');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = btn.getAttribute('data-email') || 'dvillanuevacerpa@gmail.com';

    function showToast() {
      if (toast) {
        toast.textContent = currentLang === 'es' ? '¡Copiado!' : 'Copied!';
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showToast).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        console.error('Failed to copy email', err);
      }
      document.body.removeChild(textarea);
    }
  });
}

