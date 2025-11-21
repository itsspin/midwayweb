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

  // Scheduler iframe handling
  function initScheduler() {
    const iframe = document.getElementById('scheduler-iframe');
    const loading = document.getElementById('scheduler-loading');
    const fallback = document.getElementById('scheduler-fallback');
    
    if (!iframe || !loading || !fallback) return;
    
    // Set timeout to show fallback if iframe doesn't load
    const loadTimeout = setTimeout(function() {
      if (loading && loading.style.display !== 'none') {
        loading.style.display = 'none';
        iframe.style.display = 'none';
        fallback.style.display = 'block';
      }
    }, 5000); // 5 second timeout
    
    // Try to load the iframe
    try {
      iframe.style.display = 'block';
      
      // Check if iframe loaded successfully after a delay
      setTimeout(function() {
        try {
          // Try to access iframe content (will throw if blocked by CORS/X-Frame-Options)
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          clearTimeout(loadTimeout);
        } catch (e) {
          // Iframe is blocked, show fallback after timeout
          console.log('Scheduler iframe may be blocked by same-origin policy');
        }
      }, 1000);
    } catch (e) {
      clearTimeout(loadTimeout);
      loading.style.display = 'none';
      iframe.style.display = 'none';
      fallback.style.display = 'block';
    }
  }

  // Global functions for inline handlers
  window.handleSchedulerLoad = function() {
    const loading = document.getElementById('scheduler-loading');
    const iframe = document.getElementById('scheduler-iframe');
    if (loading) loading.style.display = 'none';
    if (iframe) iframe.style.display = 'block';
  };

  window.handleSchedulerError = function() {
    const loading = document.getElementById('scheduler-loading');
    const iframe = document.getElementById('scheduler-iframe');
    const fallback = document.getElementById('scheduler-fallback');
    if (loading) loading.style.display = 'none';
    if (iframe) iframe.style.display = 'none';
    if (fallback) fallback.style.display = 'block';
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileMenu();
      initSmoothScroll();
      initScheduler();
    });
  } else {
    initMobileMenu();
    initSmoothScroll();
    initScheduler();
  }

})();

