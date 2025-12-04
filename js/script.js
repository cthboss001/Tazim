// Portfolio Website - Main JavaScript
// Discord-inspired interactive features

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// DOM Content Loaded
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
});

// ========================================
// Initialize Portfolio
// ========================================
function initializePortfolio() {
  // Load theme
  loadTheme();
  
  // Populate content
  populatePersonalInfo();
  populateEducation();
  populateSkills();
  populateProjects();
  populateExperience();
  populateCertifications();
  populateAchievements();
  
  // Initialize features
  initNavigation();
  initThemeToggle();
  initTypingAnimation();
  initScrollAnimations();
  initProjectFilters();
  initContactForm();
  initScrollTop();
  
  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

// ========================================
// Theme Management
// ========================================
function loadTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');
  
  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Active link on scroll
  const sections = document.querySelectorAll('.section, .hero');
  
  window.addEventListener('scroll', debounce(() => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    let current = 'home';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, 100));
}

// ========================================
// Populate Personal Information
// ========================================
function populatePersonalInfo() {
  const data = portfolioData.personal;
  
  // Hero section
  document.getElementById('hero-name').textContent = data.name;
  document.getElementById('hero-description').textContent = data.bio.substring(0, 100) + '...';
  document.getElementById('nav-name').textContent = data.name;
  document.getElementById('footer-name').textContent = data.name;
  document.getElementById('footer-author').textContent = data.name;
  document.getElementById('download-resume').href = data.resumeLink;
  
  // Profile image
  const profileImage = document.getElementById('profile-image');
  profileImage.src = data.profileImage;
  profileImage.onerror = function() {
    this.src = `https://via.placeholder.com/400x400/1e1e2e/00D9FF?text=${encodeURIComponent(data.name)}`;
  };
  
  // Social icons
  populateSocialIcons('hero-social', data.social);
  populateSocialIcons('contact-social', data.social);
  populateSocialIcons('footer-social', data.social);
  
  // About section
  document.getElementById('about-bio').textContent = data.bio;
  document.getElementById('about-objective').textContent = data.objective;
  
  // Info cards
  document.querySelector('#info-location .info-value').textContent = data.location;
  document.querySelector('#info-email .info-value').textContent = data.email;
  document.querySelector('#info-phone .info-value').textContent = data.phone;
  document.querySelector('#info-dob .info-value').textContent = data.dob;
  
  // Contact section
  document.querySelector('#contact-email .contact-value').textContent = data.email;
  document.querySelector('#contact-email .contact-value').href = `mailto:${data.email}`;
  document.querySelector('#contact-phone .contact-value').textContent = data.phone;
  document.querySelector('#contact-location .contact-value').textContent = data.location;
}

function populateSocialIcons(containerId, social) {
  const container = document.getElementById(containerId);
  const icons = {
    github: 'fa-brands fa-github',
    linkedin: 'fa-brands fa-linkedin',
    facebook: 'fa-brands fa-facebook',
    twitter: 'fa-brands fa-twitter'
  };
  
  container.innerHTML = '';
  Object.entries(social).forEach(([platform, url]) => {
    const link = document.createElement('a');
    link.href = url;
    link.className = 'social-icon';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', platform);
    link.innerHTML = `<i class="${icons[platform]}"></i>`;
    container.appendChild(link);
  });
}

// ========================================
// Typing Animation
// ========================================
function initTypingAnimation() {
  const typingText = document.getElementById('typing-text');
  const roles = portfolioData.personal.tagline;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Wait before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // Wait before typing next role
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// ========================================
// Populate Education
// ========================================
function populateEducation() {
  const timeline = document.getElementById('education-timeline');
  timeline.innerHTML = '';
  
  portfolioData.education.forEach((edu, index) => {
    const item = document.createElement('div');
    item.className = 'education-item hidden-anim';
    item.style.transitionDelay = `${index * 0.1}s`;
    
    const achievementsList = edu.achievements.map(achievement => 
      `<li>${achievement}</li>`
    ).join('');
    
    item.innerHTML = `
      <div class="education-card">
        <div class="education-header">
          <div class="education-logo">${edu.logo}</div>
          <div class="education-info">
            <h3>${edu.degree}</h3>
            <p class="education-institution">${edu.institution}</p>
            <div class="education-meta">
              <span><i class="fas fa-calendar"></i> ${edu.duration}</span>
              <span><i class="fas fa-map-marker-alt"></i> ${edu.location}</span>
              ${edu.cgpa ? `<span class="education-cgpa"><i class="fas fa-star"></i> CGPA: ${edu.cgpa}</span>` : ''}
              ${edu.gpa ? `<span class="education-cgpa"><i class="fas fa-star"></i> GPA: ${edu.gpa}</span>` : ''}
              ${edu.group ? `<span><i class="fas fa-flask"></i> ${edu.group}</span>` : ''}
              ${edu.board ? `<span><i class="fas fa-university"></i> ${edu.board}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="education-achievements">
          <ul>${achievementsList}</ul>
        </div>
      </div>
    `;
    
    timeline.appendChild(item);
  });
}

// ========================================
// Populate Skills
// ========================================
function populateSkills() {
  const skillCategories = {
    programming: 'skills-programming',
    frontend: 'skills-frontend',
    backend: 'skills-backend',
    database: 'skills-database',
    tools: 'skills-tools',
    soft: 'skills-soft'
  };
  
  Object.entries(skillCategories).forEach(([category, containerId]) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    portfolioData.skills[category].forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card hidden-anim';
      card.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">
            <i class="${skill.icon}"></i>
            ${skill.name}
          </span>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-progress">
          <div class="skill-progress-bar" style="--skill-width: ${skill.level}%"></div>
        </div>
      `;
      container.appendChild(card);
    });
  });
}

// ========================================
// Populate Projects
// ========================================
function populateProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  
  portfolioData.projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card hidden-anim';
    card.setAttribute('data-category', project.category.join(' '));
    card.style.transitionDelay = `${index * 0.1}s`;
    
    const techBadges = project.technologies.map(tech => 
      `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" 
             onerror="this.src='https://via.placeholder.com/400x300/1e1e2e/00D9FF?text=' + encodeURIComponent('${project.title}')">
        <div class="project-overlay">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View on GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View live demo">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">${techBadges}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ========================================
// Project Filters
// ========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.classList.remove('hidden');
          setTimeout(() => card.classList.add('show-anim'), 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ========================================
// Populate Experience
// ========================================
function populateExperience() {
  const timeline = document.getElementById('experience-timeline');
  timeline.innerHTML = '';
  
  portfolioData.experience.forEach((exp, index) => {
    const item = document.createElement('div');
    item.className = 'experience-item hidden-anim';
    item.style.transitionDelay = `${index * 0.1}s`;
    
    const responsibilities = exp.responsibilities.map(resp => 
      `<li>${resp}</li>`
    ).join('');
    
    const techBadges = exp.technologies.map(tech => 
      `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    item.innerHTML = `
      <div class="experience-card">
        <div class="experience-header">
          <h3 class="experience-role">${exp.role}</h3>
          <p class="experience-company">${exp.company}</p>
          <div class="experience-meta">
            <span><i class="fas fa-calendar"></i> ${exp.duration}</span>
            <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
            <span class="experience-type">${exp.type}</span>
          </div>
        </div>
        <div class="experience-responsibilities">
          <ul>${responsibilities}</ul>
        </div>
        <div class="experience-technologies">${techBadges}</div>
      </div>
    `;
    
    timeline.appendChild(item);
  });
}

// ========================================
// Populate Certifications
// ========================================
function populateCertifications() {
  const grid = document.getElementById('certifications-grid');
  grid.innerHTML = '';
  
  portfolioData.certifications.forEach((cert, index) => {
    const card = document.createElement('div');
    card.className = 'certification-card hidden-anim';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="certification-icon">
        <i class="${cert.icon}"></i>
      </div>
      <h3 class="certification-name">${cert.name}</h3>
      <p class="certification-issuer">${cert.issuer}</p>
      <p class="certification-date">${cert.date}</p>
      <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="certification-link">
        View Credential <i class="fas fa-arrow-right"></i>
      </a>
    `;
    
    grid.appendChild(card);
  });
}

// ========================================
// Populate Achievements
// ========================================
function populateAchievements() {
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = '';
  
  portfolioData.achievements.forEach((achievement, index) => {
    const card = document.createElement('div');
    card.className = 'achievement-card hidden-anim';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="achievement-icon ${achievement.color}">
        <i class="${achievement.icon}"></i>
      </div>
      <h3 class="achievement-title">${achievement.title}</h3>
      <p class="achievement-description">${achievement.description}</p>
    `;
    
    grid.appendChild(card);
  });
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-anim');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all animated elements
  document.querySelectorAll('.hidden-anim').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// Contact Form
// ========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate
    let isValid = true;
    
    if (name.length < 2) {
      showError('name-error', 'Name must be at least 2 characters');
      isValid = false;
    }
    
    if (!isValidEmail(email)) {
      showError('email-error', 'Please enter a valid email address');
      isValid = false;
    }
    
    if (subject.length < 3) {
      showError('subject-error', 'Subject must be at least 3 characters');
      isValid = false;
    }
    
    if (message.length < 10) {
      showError('message-error', 'Message must be at least 10 characters');
      isValid = false;
    }
    
    if (isValid) {
      // Simulate form submission
      formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
      formStatus.className = 'form-status success';
      formStatus.style.display = 'block';
      form.reset();
      
      // In a real application, you would send the data to a server here
      // Form data validation passed - ready for server submission
    } else {
      formStatus.textContent = 'Please fix the errors above.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
    }
  });
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ========================================
// Scroll to Top Button
// ========================================
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, 100));
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// Lazy Loading Images
// ========================================
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ========================================
// Keyboard Navigation Support
// ========================================
document.addEventListener('keydown', (e) => {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
});

// ========================================
// Console Message (optional - remove in production)
// ========================================
// console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #00D9FF;');
// console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #10B981;');
