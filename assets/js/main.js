/**
 * Main JavaScript for Midway Ford Truck Center Service Pages
 * Light vanilla JS only - minimal functionality
 */

(function() {
  'use strict';

  // Mobile menu toggle (if needed based on actual header implementation)
  // This is a placeholder - adjust based on actual header markup
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('#site-header nav, .site-header nav');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-open');
        this.setAttribute('aria-expanded', 
          navMenu.classList.contains('is-open') ? 'true' : 'false'
        );
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

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileMenu();
      initSmoothScroll();
    });
  } else {
    initMobileMenu();
    initSmoothScroll();
  }

})();

