// Translation Dictionaries (Spanish & English)
const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },

    about:{
      title: "Sobre Mí",
      description: "<p>Soy un Ingeniero de Sistemas enfocado en el desarrollo web y el análisis de datos. Me gusta crear aplicaciones y soluciones efectivas que resuelvan problemas cotidianos en el mundo laboral.</p><p>Mis habilidades se centran en el desarrollo vanilla (<span class=\"tech-highlight tech-html\">HTML</span>, <span class=\"tech-highlight tech-css\">CSS</span>, <span class=\"tech-highlight tech-js\">JavaScript</span> y múltiples librerías) para lograr interfaces mas fluidas y responsivas que otras personas puedan comprender facilmente, complementándome con frameworks como <span class=\"tech-highlight tech-react\">React</span> y <span class=\"tech-highlight tech-next\">Next.js</span>.</p><p>Para el análisis de datos me gusta trabajar con <span class=\"tech-highlight tech-python\">Python</span> y su ecosistema de librerías como <span class=\"tech-highlight tech-pandas\">Pandas</span>, <span class=\"tech-highlight tech-numpy\">NumPy</span>, <span class=\"tech-highlight tech-matplotlib\">Matplotlib</span> y <span class=\"tech-highlight tech-duckdb\">DuckDB</span>. En bases de datos trabajo con <span class=\"tech-highlight tech-postgres\">PostgreSQL</span> y <span class=\"tech-highlight tech-mysql\">MySQL</span> (especializándome en este último).</p>"
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
      static_prefix: "Trabajo con",
      specialized_prefix: "Especializado en",
      default_hover: "estas herramientas",
      disclaimer: "Pero siempre puedo adaptarme a nuevas tecnologías.",
      frontend: "Frontend & Web",
      backend: "Backend",
      databases: "Datos",
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
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },

    about:{
      title: "About Me",
      description: "<p>I am a Systems Engineer focused on web development and data analysis. I like creating effective applications and solutions that solve everyday problems in the workplace.</p><p>My skills are centered on vanilla development (<span class=\"tech-highlight tech-html\">HTML</span>, <span class=\"tech-highlight tech-css\">CSS</span>, <span class=\"tech-highlight tech-js\">JavaScript</span> and multiple libraries) to achieve more fluid and responsive interfaces that others can easily understand, complemented by frameworks like <span class=\"tech-highlight tech-react\">React</span> and <span class=\"tech-highlight tech-next\">Next.js</span>.</p><p>For data analysis, I like working with <span class=\"tech-highlight tech-python\">Python</span> and its ecosystem of libraries such as <span class=\"tech-highlight tech-pandas\">Pandas</span>, <span class=\"tech-highlight tech-numpy\">NumPy</span>, <span class=\"tech-highlight tech-matplotlib\">Matplotlib</span> and <span class=\"tech-highlight tech-duckdb\">DuckDB</span>. In databases, I work with <span class=\"tech-highlight tech-postgres\">PostgreSQL</span> and <span class=\"tech-highlight tech-mysql\">MySQL</span> (specializing in the latter).</p>"
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
      static_prefix: "Work with",
      specialized_prefix: "Specialized in",
      default_hover: "these tools",
      disclaimer: "But I can always adapt to new technologies.",
      frontend: "Frontend & Web",
      backend: "Backend",
      databases: "Data",
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
let currentHoveredSkill = null;

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initLanguageSwitcher();
  initSkillsHover();
  applyLanguage(currentLang);
  initInteractiveGrid();
  initAnimations();
  initProjectsCarousel();
  initCopyEmail();
});

// 0. Theme Management (Google Antigravity Dark/Light)
let currentTheme = localStorage.getItem('portfolio-theme') || 
  (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  // Update theme toggle button attributes
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
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

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('portfolio-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// 1. Language Logic
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update switcher UI label and attributes
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    const langCode = switcher.querySelector('.lang-code');
    if (langCode) {
      langCode.textContent = lang.toUpperCase();
    }
    switcher.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  }

  // Update element contents by data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedValue(t, keyPath);
    if (value !== undefined) {
      if (el.classList.contains('hero-title')) {
        const words = value.split(' ');
        el.innerHTML = words.map(word => {
          const charSpans = word.split('').map(char => `<span class="hero-char" style="opacity: 1;">${char}</span>`).join('');
          return `<span class="hero-word">${charSpans}</span>`;
        }).join(' ');
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

  // Update skill header
  const highlightEl = document.getElementById('highlightTech');
  const staticPrefixEl = document.querySelector('[data-i18n="skills.static_prefix"]');
  if (highlightEl) {
    highlightEl.textContent = currentHoveredSkill || t.skills.default_hover;
  }
  if (staticPrefixEl) {
    if (currentHoveredSkill) {
      const activeCard = document.querySelector(`.modern-skill-card[data-skill="${currentHoveredSkill}"]`);
      const isSpec = activeCard?.getAttribute('data-specialized') === 'true';
      staticPrefixEl.textContent = isSpec ? t.skills.specialized_prefix : t.skills.static_prefix;
    } else {
      staticPrefixEl.textContent = t.skills.static_prefix;
    }
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
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

// 3. Skills Hover Tracker (Static grouped sections)
function initSkillsHover() {
  const highlightEl = document.getElementById('highlightTech');
  if (!highlightEl) return;

  const cards = document.querySelectorAll('.modern-skill-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const skillName = card.getAttribute('data-skill') || null;
      const isSpecialized = card.getAttribute('data-specialized') === 'true';
      const staticPrefixEl = document.querySelector('[data-i18n="skills.static_prefix"]');
      
      currentHoveredSkill = skillName;
      const t = translations[currentLang].skills;
      if (skillName) {
        highlightEl.textContent = skillName;
        if (staticPrefixEl) {
          staticPrefixEl.textContent = isSpecialized ? (t.specialized_prefix || "Especializado en") : t.static_prefix;
        }
      }
    });

    card.addEventListener('mouseleave', () => {
      currentHoveredSkill = null;
      const t = translations[currentLang].skills;
      highlightEl.textContent = t.default_hover;
      const staticPrefixEl = document.querySelector('[data-i18n="skills.static_prefix"]');
      if (staticPrefixEl) {
        staticPrefixEl.textContent = t.static_prefix;
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
  let targetX = -500;
  let targetY = -500;
  let currentX = -500;
  let currentY = -500;
  let isLoopRunning = false;

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
  
  homeSec.addEventListener('mousemove', (e) => {
    if (!isHomeVisible) return;
    targetX = e.pageX;
    targetY = e.pageY;
    startLoop();
  }, { passive: true });

  homeSec.addEventListener('mouseleave', () => {
    targetX = -500;
    targetY = -500;
    startLoop();
  });
}

// 5. Antigravity Animations (Anime.js + GSAP)
function initAnimations() {
  // Register ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Section reveal and exit animations (accurately bounded to full section visibility)
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      if (sec.id === 'home') return;
      const targetChild = sec.firstElementChild || sec;
      gsap.fromTo(targetChild, 
        { opacity: 0, y: 35 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 88%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            fastScrollEnd: true
          }
        }
      );
    });

    // Refresh ScrollTrigger to compute exact coordinates after layout & assets settle
    ScrollTrigger.refresh();
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // Initial Load Animations (Typing effect + Anime.js stagger)
  if (typeof anime !== 'undefined') {
    const heroBrand = document.querySelector('.hero-brand');
    const heroActions = document.querySelector('.hero-actions');
    
    // Hide elements initially
    if (heroBrand) heroBrand.style.opacity = '0';
    if (heroActions) heroActions.style.opacity = '0';

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent.trim();
      const words = text.split(' ');
      heroTitle.innerHTML = words.map(word => {
        const charSpans = word.split('').map(char => `<span class="hero-char" style="opacity: 0;">${char}</span>`).join('');
        return `<span class="hero-word">${charSpans}</span>`;
      }).join(' ');
      heroTitle.style.opacity = '1';

      const allChars = heroTitle.querySelectorAll('.hero-char');
      let i = 0;
      function type() {
        if (i < allChars.length) {
          allChars[i].style.opacity = '1';
          i++;
          setTimeout(type, 30); // 30ms per character
        } else {
          // Play the rest of the animations once typing finishes
          if (typeof anime !== 'undefined') {
            anime.timeline({loop: false})
              .add({
                targets: '.hero-brand',
                opacity: [0, 1],
                translateY: [-20, 0],
                easing: "easeOutExpo",
                duration: 800
              })
              .add({
                targets: '.hero-actions',
                opacity: [0, 1],
                translateY: [20, 0],
                easing: "easeOutExpo",
                duration: 800
              }, '-=400');
          }
        }
      }
      // Small delay before typing starts
      setTimeout(type, 300);
    }
  }
}

// 6. Projects Carousel Logic (Static text container, image-only slide track, typewriter effect for title and description)
function initProjectsCarousel() {
  const visualTrack = document.getElementById('projectsVisualTrack');
  const prevBtn = document.getElementById('projectPrevBtn');
  const nextBtn = document.getElementById('projectNextBtn');
  const visualSlides = document.querySelectorAll('.project-visual-slide');
  const infoSlides = document.querySelectorAll('.project-info-slide');

  if (!visualTrack || visualSlides.length === 0) return;

  let currentProjectIndex = 0;
  const totalProjects = visualSlides.length;
  let typingTimeout = null;
  let erasingTimeout = null;
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
    if (typingTimeout) clearTimeout(typingTimeout);
    if (erasingTimeout) clearTimeout(erasingTimeout);

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

