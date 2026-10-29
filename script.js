// Translation Dictionaries (Spanish & English)
const translations = {
  es: {
    title: "Portfolio",
    hero: {
      role: "Desarrollador <span class=\"role-pill\">Fullstack</span> y Analista de Datos",
      contact: "Contactar",
      body: "<p>Desarrollo sistemas web para organizar procesos de trabajo y convertir datos en información útil.</p><p>Trabajo con <strong>JavaScript, PHP, MySQL y Python</strong>. Realicé mis residencias profesionales y cuento con experiencia en soporte técnico, gestión y análisis de datos.</p>",
      cv: "Descargar CV"
    },
    skills: {
      title: "Tecnologías",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      analysis: "Análisis de datos",
      tools: "Herramientas",
      other: "También he usado"
    },
    experience: {
      title: "Experiencia",
      residency: {
        label: "Concluidas",
        title: "Residencias profesionales",
        description: "Desarrollé un motor de BI a partir de archivos de Excel para el área gerencial de Hernie Transportes: los archivos se cargan, procesan y limpian, y se muestran dashboards dinámicos de forma automatizada."
      },
      minimal: {
        label: "Startup",
        current: "Actualidad",
        description: "Múltiples sistemas web para diferentes clientes. Destaca un sistema para gestionar solicitudes de soporte técnico de distintas empresas (JavaScript, PHP y MySQL) y un sistema web y físico para automatizar el escaneo de boletos y la apertura de torniquetes con escáner y ESP32."
      },
      entomology: {
        label: "Colaboración institucional",
        title: "ITESI · Universidad de Guanajuato",
        description: "Desarrollo de un sistema de gestión de colecciones entomológicas en el marco del convenio entre ITESI y la UG, con guías de uso en sus módulos."
      }
    },
    projects: {
      title: "Proyectos",
      featured: "Destacados",
      all: "Todos",
      items: {
        ISO9001: {
          title: "Sistema ISO 9001",
          description: "Sistema de gestión de calidad alineado a la norma ISO 9001:2015, con acceso por usuario y modo de demostración."
        },
        AuditLine: {
          description: "Plataforma de estudio de tiempos para líneas de producción: cronometra cada elemento, aplica valoración Westinghouse y suplementos, y calcula el tiempo estándar por línea."
        },
        Ciment: {
          description: "Plataforma SaaS para presupuestar obras: reúne presupuestos, análisis y recursos en un mismo espacio para arquitectos, ingenieros, analistas de costos y constructoras."
        },
        Entomologia: {
          title: "Sistema de Entomología",
          description: "Aplicación web para la gestión de insectos en colecciones científicas, con sistemas de préstamos, administración de colecciones y más."
        },
        Soportes: {
          title: "Sistema de Soportes",
          description: "Aplicación web para la gestión de soportes técnicos de múltiples empresas."
        }
      }
    },
    contact: {
      title: "Trabajemos juntos",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Siempre estoy abierto a nuevas oportunidades.",
      copied: "¡Correo copiado!"
    },
    footer: `© ${new Date().getFullYear()} Daniel Cerpa — Ingeniero de Sistemas`
  },
  en: {
    title: "Portfolio",
    hero: {
      role: "<span class=\"role-pill\">Fullstack</span> Developer and Data Analyst",
      contact: "Get in touch",
      body: "<p>I build web systems that organize workflows and turn data into useful information.</p><p>I work with <strong>JavaScript, PHP, MySQL and Python</strong>. I completed my professional residency and have experience with technical support, management and data analysis projects.</p>",
      cv: "Download CV"
    },
    skills: {
      title: "Technologies",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      analysis: "Data analysis",
      tools: "Tools",
      other: "Also used"
    },
    experience: {
      title: "Experience",
      residency: {
        label: "Completed",
        title: "Professional residency",
        description: "Built a BI engine from Excel files for the management team at Hernie Transportes: files are uploaded, processed and cleaned, and dynamic dashboards are shown automatically."
      },
      minimal: {
        label: "Startup",
        current: "Current",
        description: "Multiple web systems for different clients. Highlights include a system to manage technical support requests for several companies (JavaScript, PHP and MySQL) and a web + hardware system that automates ticket scanning and turnstile opening with a scanner and ESP32."
      },
      entomology: {
        label: "Institutional collaboration",
        title: "ITESI · University of Guanajuato",
        description: "Development of an entomological collection management system under the collaboration agreement between ITESI and UG, with user guides throughout its modules."
      }
    },
    projects: {
      title: "Projects",
      featured: "Featured",
      all: "All",
      items: {
        ISO9001: {
          title: "ISO 9001 System",
          description: "Quality management system aligned with the ISO 9001:2015 standard, with user login and a demo mode."
        },
        AuditLine: {
          description: "Time study platform for production lines: time every element, apply Westinghouse rating and allowances, and calculate the standard time per line."
        },
        Ciment: {
          description: "SaaS platform for construction budgeting: brings estimates, analysis and resources into one place for architects, engineers, cost analysts and builders."
        },
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
      title: "Let's work together",
      description: "Have a project in mind? I'd love to hear about it. I'm always open to new opportunities.",
      copied: "Email copied!"
    },
    footer: `© ${new Date().getFullYear()} Daniel Cerpa — Systems Engineer`
  }
};

let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageSwitcher();
  applyLanguage(currentLang);
  initTabs();
  initCopyEmail();
});

// Theme: stored choice, otherwise follow the OS
// localStorage can throw (private mode, blocked storage), so the theme just won't persist there
const storage = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

let currentTheme = storage.get('portfolio-theme')
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

const themeSvgs = {
  github: ['./public/github_dark.svg', './public/github_light.svg'],
  react: ['./public/react_dark.svg', './public/react_light.svg'],
  mysql: ['./public/mysql-icon-dark.svg', './public/mysql-icon-light.svg'],
  php: ['./public/php_dark.svg', './public/php.svg']
};

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  storage.set('portfolio-theme', theme);

  document.getElementById('themeToggleBtn')
    ?.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');

  document.querySelectorAll('[data-theme-svg]').forEach(img => {
    img.src = themeSvgs[img.dataset.themeSvg][theme === 'dark' ? 0 : 1];
  });
}

function initThemeToggle() {
  applyTheme(currentTheme);
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

// Language
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;

  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.textContent = lang === 'es' ? 'EN' : 'ES';
    switcher.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getNestedValue(t, el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = getNestedValue(t, el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
}

function initLanguageSwitcher() {
  document.getElementById('langSwitcher')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'es' ? 'en' : 'es');
  });
}

// Notion-like database views: each tab filters its target's children by data-tags ("all" shows everything)
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tablist => {
    const target = document.getElementById(tablist.dataset.target);
    const tabs = tablist.querySelectorAll('.tab');

    const select = (tab) => {
      const value = tab.dataset.value;
      tabs.forEach(t => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      [...target.children].forEach(item => {
        item.hidden = value !== 'all' && !item.dataset.tags.split(' ').includes(value);
      });
    };

    tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
      tab.addEventListener('click', () => select(tab));
    });
    select(tablist.querySelector('.tab.is-active') || tabs[0]);
  });
}

// Copy email to clipboard, fall back to mailto
function initCopyEmail() {
  const btn = document.getElementById('copyEmailBtn');
  const label = document.getElementById('copyEmailLabel');
  if (!btn || !label) return;
  const email = btn.dataset.email;

  btn.addEventListener('click', () => {
    if (!navigator.clipboard) { window.location.href = `mailto:${email}`; return; }
    navigator.clipboard.writeText(email).then(() => {
      label.textContent = translations[currentLang].contact.copied;
      setTimeout(() => { label.textContent = ''; }, 2000);
    }).catch(() => { window.location.href = `mailto:${email}`; });
  });
}
