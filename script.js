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
      about_text_1: "Desarrollador enfocado en crear experiencias modernas e intuitivas.",
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
        Entomologia: {
          title: "Sistema de Entomología",
          description: "Sistema para la gestión y estudio entomológico desarrollado mediante convenio de ITESI con la UG. Contiene una guia de uso con driverjs en cada uno de sus modulos"
        },
        Soportes: {
          title: "Sistema de Soportes",
          description: "Sistema desarrollado en JS Vanilla en MINIMAL CODE (startup) para gestionar soportes técnicos a diferentes empresas."
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
      about_text_1: "Developer focused on creating modern and intuitive experiences.",
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
        Entomologia: {
          title: "Entomology System",
          description: "Entomology management and research system developed through an agreement between ITESI and UG. It contains a usage guide with driverjs in each of its modules."
        },
        Soportes: {
          title: "Technical Support System",
          description: "Vanilla JS system developed at MINIMAL CODE (startup) to manage technical support tickets for various companies."
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
  initInteractiveGrid();
  initAnimations();
  initProjectsCarousel();
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
      if (el.classList.contains('carousel-desc') || el.classList.contains('carousel-title')) {
        el.setAttribute('data-full-text', value);
        if (el.closest('.project-info-slide.active')) {
          el.textContent = value;
          el.classList.add('typing-done');
        }
      } else {
        el.textContent = value;
      }
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

  let isScrollTicking = false;
  const updateNavbarOnScroll = () => {
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

    if (skillName !== currentHoveredSkill) {
      currentHoveredSkill = skillName;
      const defaultText = translations[currentLang].skills.default_hover;
      highlightEl.textContent = skillName || defaultText;
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
    const defaultText = translations[currentLang].skills.default_hover;
    highlightEl.textContent = defaultText;
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
  
  window.addEventListener('mousemove', (e) => {
    // Update CSS variables for the mask-image radial gradient
    // Use pageX/pageY so it tracks correctly when scrolling down the page
    root.style.setProperty('--mouse-x', e.pageX + 'px');
    root.style.setProperty('--mouse-y', e.pageY + 'px');
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
      gsap.fromTo(sec, 
        { opacity: 0, y: 100 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse"
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
      heroTitle.textContent = '';
      heroTitle.style.opacity = '1';
      
      let i = 0;
      function type() {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(type, 35); // 35ms per character
        } else {
          // Play the rest of the animations once typing finishes
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

  function startTypewriterSequence(titleEl, titleText, descEl, descText) {
    if (typingTimeout) clearTimeout(typingTimeout);
    
    if (titleEl) {
      titleEl.textContent = '';
      titleEl.classList.remove('typing-done');
    }
    if (descEl) {
      descEl.textContent = '';
      descEl.classList.remove('typing-done');
    }

    // Step 1: Type Title
    let titleIdx = 0;
    function typeTitleStep() {
      if (titleEl && titleIdx < titleText.length) {
        titleEl.textContent += titleText.charAt(titleIdx);
        titleIdx++;
        typingTimeout = setTimeout(typeTitleStep, 18);
      } else {
        if (titleEl) titleEl.classList.add('typing-done');
        // Step 2: Type Description after title
        typeDescStep();
      }
    }

    let descIdx = 0;
    function typeDescStep() {
      if (descEl && descIdx < descText.length) {
        descEl.textContent += descText.charAt(descIdx);
        descIdx++;
        typingTimeout = setTimeout(typeDescStep, 12);
      } else {
        if (descEl) descEl.classList.add('typing-done');
        isTransitioning = false;
      }
    }

    typeTitleStep();
  }

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

    // 2. Start typewriter sequence immediately for new slide title & description
    const newActiveSlide = infoSlides[currentProjectIndex];
    const newTitleEl = newActiveSlide?.querySelector('.carousel-title');
    const newDescEl = newActiveSlide?.querySelector('.carousel-desc');

    const titleText = newTitleEl ? (newTitleEl.getAttribute('data-full-text') || newTitleEl.textContent.trim()) : '';
    const descText = newDescEl ? (newDescEl.getAttribute('data-full-text') || newDescEl.textContent.trim()) : '';

    startTypewriterSequence(newTitleEl, titleText, newDescEl, descText);
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

  window.addEventListener('resize', () => {
    switchProject(currentProjectIndex);
  });

  // Initial trigger & centering for first slide
  switchProject(0);
}

