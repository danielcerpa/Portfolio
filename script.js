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
      disclaimer: "Pero siempre puedo adaptarme a nuevas tecnologías."
    },
    projects: {
      title: "Proyectos",
      items: {
        Entomologia: {
          title: "Sistema de Entomología",
          description: "Aplicacion web para la gestión de insectos en colecciones científicas, con sistemas de préstamos, administración de colecciones y más.",
        },
        Soportes: {
          title: "Sistema de Soportes",
          description: "Aplicacion web para la gestión de soportes técnicos de múltiples empresas."
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
      disclaimer: "But I can always adapt to new technologies."
    },
    projects: {
      title: "Projects",
      items: {
        Entomologia: {
          title: "Entomology System",
          description: "Web application for the management of insects in scientific collections, with loan systems, collection management and more."
        },
        Soportes: {
          title: "Technical Support System",
          description: "Web application for the management of technical support of multiple companies."
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
  initNavbar();
  initLanguageSwitcher();
  initSkillsHover();
  applyLanguage(currentLang);
  initInteractiveGrid();
  initAnimations();
  initProjectsCarousel();
  initCopyEmail();
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

  let isScrollTicking = false;
  const updateNavbarOnScroll = () => {
    const navbarHeight = navbar ? navbar.offsetHeight : 70;

    // Glassmorphism shadow on scroll
    if (window.scrollY > 20) {
      navbar?.classList.add('navbar--scrolled');
    } else {
      navbar?.classList.remove('navbar--scrolled');
    }

    // Active link highlighting
    let currentSection = 'home';
    
    // Check if user scrolled to bottom of page (select contact)
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
      currentSection = 'contact';
    } else {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top - navbarHeight - 40 };
      });

      const visible = offsets
        .filter(({ top }) => top <= 0)
        .sort((a, b) => b.top - a.top);

      if (visible.length > 0) {
        currentSection = visible[0].id;
      }
    }

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('data-section');
      link.classList.toggle('navbar-link--active', sectionId === currentSection);
    });
  };

  const handleScroll = () => {
    if (!isScrollTicking) {
      requestAnimationFrame(() => {
        updateNavbarOnScroll();
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
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
        let top = 0;
        let el = targetEl;
        while (el) {
          top += el.offsetTop;
          el = el.offsetParent;
        }
        const targetPosition = top - navbarHeight - 15;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    });
  });
}

// 3. Skills Carousel (Auto-scroll + Mouse/Touch Drag + Hover Tracker)
function initSkillsHover() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const track = document.getElementById('carouselTrack');
  const highlightEl = document.getElementById('highlightTech');
  if (!wrapper || !track || !highlightEl) return;

  let currentOffset = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startOffset = 0;
  let isHovered = false;
  let isTouchDirectionDetermined = false;
  let isHorizontalDrag = false;
  const speed = 0.75; // auto-scroll speed (px per frame)

  const getSetWidth = () => track.scrollWidth / 3;

  function wrapOffset(val) {
    const setWidth = getSetWidth();
    if (setWidth <= 0) return val;
    while (val <= -setWidth) {
      val += setWidth;
    }
    while (val > 0) {
      val -= setWidth;
    }
    return val;
  }

  function updateTransform() {
    track.style.transform = `translateX(${currentOffset}px)`;
  }

  // Continuous auto-scroll loop
  function tick() {
    if (!isDragging && !isHovered) {
      currentOffset -= speed;
      currentOffset = wrapOffset(currentOffset);
      updateTransform();
    }
    requestAnimationFrame(tick);
  }

  // Separate Dragging logic for Mouse (PC) & Touch (Mobile)
  let isTouchActive = false;

  function onMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    startOffset = currentOffset;
    wrapper.classList.add('is-dragging');
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    currentOffset = wrapOffset(startOffset + deltaX);
    updateTransform();
  }

  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove('is-dragging');
  }

  function onTouchStart(e) {
    if (!e.touches || e.touches.length === 0) return;
    isTouchActive = true;
    isDragging = false;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startOffset = currentOffset;
  }

  function onTouchMove(e) {
    if (!isTouchActive || !e.touches || e.touches.length === 0) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    if (!isDragging) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 5) {
        // Vertical swipe: allow native page scroll without interference
        isTouchActive = false;
        return;
      }
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
        // Horizontal swipe: activate carousel drag
        isDragging = true;
        wrapper.classList.add('is-dragging');
      } else {
        return;
      }
    }

    currentOffset = wrapOffset(startOffset + deltaX);
    updateTransform();
  }

  function onTouchEnd() {
    isTouchActive = false;
    if (isDragging) {
      isDragging = false;
      wrapper.classList.remove('is-dragging');
    }
  }

  wrapper.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('touchend', onTouchEnd);
  window.addEventListener('touchcancel', onTouchEnd);

  // Hover tracker for highlightTech
  let mouseX = 0;
  let mouseY = 0;

  const checkHover = () => {
    if (!isHovered) return;
    const element = document.elementFromPoint(mouseX, mouseY);
    const card = element?.closest('.modern-skill-card');
    const skillName = card?.getAttribute('data-skill') || null;
    const isSpecialized = card?.getAttribute('data-specialized') === 'true';
    const staticPrefixEl = document.querySelector('[data-i18n="skills.static_prefix"]');

    if (skillName !== currentHoveredSkill) {
      currentHoveredSkill = skillName;
      const t = translations[currentLang].skills;
      if (skillName) {
        highlightEl.textContent = skillName;
        if (staticPrefixEl) {
          staticPrefixEl.textContent = isSpecialized ? (t.specialized_prefix || "Especializado en") : t.static_prefix;
        }
      } else {
        highlightEl.textContent = t.default_hover;
        if (staticPrefixEl) {
          staticPrefixEl.textContent = t.static_prefix;
        }
      }
    }
  };

  wrapper.addEventListener('mouseenter', (e) => {
    isHovered = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    checkHover();
  });

  wrapper.addEventListener('mouseleave', () => {
    isHovered = false;
    currentHoveredSkill = null;
    const t = translations[currentLang].skills;
    highlightEl.textContent = t.default_hover;
    const staticPrefixEl = document.querySelector('[data-i18n="skills.static_prefix"]');
    if (staticPrefixEl) {
      staticPrefixEl.textContent = t.static_prefix;
    }
  });

  wrapper.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    checkHover();
  });

  // Start continuous loop
  requestAnimationFrame(tick);
}

// 4. Interactive Grid Logic
function initInteractiveGrid() {
  const root = document.documentElement;
  const homeSec = document.getElementById('home');
  
  window.addEventListener('mousemove', (e) => {
    if (homeSec) {
      const rect = homeSec.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      root.style.setProperty('--mouse-x', x + 'px');
      root.style.setProperty('--mouse-y', y + 'px');
    }
  });

  // Magnetic Hover states for interactive elements (Anime.js)
  const interactables = document.querySelectorAll('.cv-download-btn, .navbar-link, .modern-contact-card');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      if (typeof anime !== 'undefined') {
        anime({
          targets: el,
          scale: 1.05,
          duration: 300,
          easing: 'easeOutElastic(1, .8)'
        });
      }
    });
    el.addEventListener('mouseleave', (e) => {
      if (typeof anime !== 'undefined') {
        anime({
          targets: el,
          scale: 1,
          duration: 300,
          easing: 'easeOutElastic(1, .8)'
        });
      }
    });
  });
}

// 5. Antigravity Animations (Anime.js + GSAP)
function initAnimations() {
  // Register ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      if (sec.id === 'home') return; // Handled by Anime.js
      const targetChild = sec.firstElementChild || sec;
      gsap.fromTo(targetChild, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none play reverse"
          }
        }
      );
    });

    // Project Cards stagger
    gsap.from('.project-row', {
      scrollTrigger: {
        trigger: '.projects-list',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
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
    isTransitioning = false;
  }

  // Cursor tracking for hover button inside each visual slide card
  visualSlides.forEach((slide) => {
    const btn = slide.querySelector('.carousel-hover-btn');
    if (!btn) return;

    slide.addEventListener('mousemove', (e) => {
      const rect = slide.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
      slide.classList.add('is-hovered');
    });

    slide.addEventListener('mouseleave', () => {
      slide.classList.remove('is-hovered');
    });

    slide.addEventListener('click', () => {
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

