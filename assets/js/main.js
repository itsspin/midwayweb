/**
 * Main JavaScript for Midway Ford Truck Center Service Pages
 * Light vanilla JS only - minimal functionality
 */

(function() {
  'use strict';

  // Mobile menu toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (isExpanded) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          const spans = menuToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Theme Switcher
  function initThemeSwitcher() {
    // Create theme switcher UI
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.innerHTML = `
      <div class="theme-switcher-label">Design</div>
      <button class="theme-btn active" data-theme="default">Light Professional</button>
      <button class="theme-btn" data-theme="warm">Warm Gray</button>
      <button class="theme-btn" data-theme="cool">Cool Blue Gray</button>
      <button class="theme-btn" data-theme="texture">Subtle Texture</button>
    `;
    document.body.appendChild(switcher);

    // Load saved theme
    const savedTheme = localStorage.getItem('midway-theme') || 'default';
    if (savedTheme !== 'default') {
      document.body.classList.add('theme-' + savedTheme);
      switcher.querySelector(`[data-theme="${savedTheme}"]`).classList.add('active');
      switcher.querySelector('[data-theme="default"]').classList.remove('active');
    }

    // Handle theme switching
    switcher.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Remove all theme classes
        document.body.classList.remove('theme-warm', 'theme-cool', 'theme-texture');
        
        // Remove active class from all buttons
        switcher.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        
        // Apply new theme
        if (theme !== 'default') {
          document.body.classList.add('theme-' + theme);
        }
        
        // Update active button
        this.classList.add('active');
        
        // Save to localStorage
        localStorage.setItem('midway-theme', theme);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileMenu();
      initSmoothScroll();
      initThemeSwitcher();
    });
  } else {
    initMobileMenu();
    initSmoothScroll();
    initThemeSwitcher();
  }

})();

