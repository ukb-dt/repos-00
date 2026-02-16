// ============================================
// SHARED.JS - Minimal shared functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('toggle-theme');
  if (themeToggle) {
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      updateLogo(newTheme);
    });
  }
  
  // Update theme icon
  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
  
  // Update logo based on theme
  function updateLogo(theme) {
    const logo = document.getElementById('logo');
    if (logo) {
      const lightSrc = logo.getAttribute('data-light-src');
      const darkSrc = logo.getAttribute('data-dark-src');
      if (theme === 'light' && lightSrc) {
        logo.src = lightSrc;
      } else if (theme === 'dark' && darkSrc) {
        logo.src = darkSrc;
      }
    }
  }
  
  // Initialize logo on page load
  const currentTheme = localStorage.getItem('theme') || 'dark';
  updateLogo(currentTheme);
  
  // Menu toggle functionality
  const menuIcon = document.getElementById('menuIcon');
  const gridMenu = document.getElementById('gridMenu');
  
  if (menuIcon && gridMenu) {
    menuIcon.addEventListener('click', function() {
      const isHidden = gridMenu.getAttribute('aria-hidden') === 'true';
      gridMenu.setAttribute('aria-hidden', !isHidden);
      gridMenu.style.display = isHidden ? 'grid' : 'none';
      menuIcon.classList.toggle('active');
    });
  }
  
  // Scroll progress indicator
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollProgress.style.width = scrolled + '%';
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
});