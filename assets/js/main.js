/**
 * CHEESY MOMENTS KAITHAL - HOMEPAGE JAVASCRIPT
 * Visual Effects, Smooth Scrolling, Category Integration & Micro-interactions
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initHeroParallax();
    renderFeaturedCategories();
    renderSpecialOffers();
    initSecretAdminTrigger();
  });

  // Sticky Header Effect
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile Navigation Drawer / Menu Toggle
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'fixed';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'rgba(23, 18, 13, 0.98)';
        nav.style.padding = '2rem 1.5rem';
        nav.style.gap = '1.25rem';
        nav.style.borderBottom = '1px solid var(--color-border)';
        nav.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
      } else {
        nav.style.display = '';
      }
    });

    // Close when clicking nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.style.display = '';
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Hero Parallax on Mouse Move (Subtle 3D Depth)
  function initHeroParallax() {
    const heroVisual = document.querySelector('.hero-visual-stage');
    if (!heroVisual) return;

    const floatingSlice = heroVisual.querySelector('.floating-slice');
    const floatingTomato = heroVisual.querySelector('.floating-tomato');
    const floatingBasil = heroVisual.querySelector('.floating-basil');

    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      if (floatingSlice) {
        floatingSlice.style.transform = `translate3d(${x * 25}px, ${y * 25}px, 0) rotate(${x * 10}deg)`;
      }
      if (floatingTomato) {
        floatingTomato.style.transform = `translate3d(${x * -20}px, ${y * -20}px, 0) rotate(${x * -8}deg)`;
      }
      if (floatingBasil) {
        floatingBasil.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0) rotate(${x * 12}deg)`;
      }
    }, { passive: true });
  }

  // Render 12 Categories dynamically linking directly to Digital Menu
  function renderFeaturedCategories() {
    const container = document.getElementById('featuredCategoriesGrid');
    if (!container) return;

    const categories = window.MENU_CATEGORIES || [];
    // Display 12 main categories requested in Section 3
    const showcaseCatIds = [
      'pizza-classic', 'burgers', 'sandwiches', 'wheat-momos', 
      'chinese', 'pasta', 'wraps', 'fries', 
      'nachos', 'desserts', 'drinks', 'garlic-bread'
    ];

    const targetCategories = categories.filter(c => showcaseCatIds.includes(c.id));

    container.innerHTML = targetCategories.map(cat => `
      <a href="menu.html?cat=${cat.id}" class="category-card">
        <div class="category-icon-box">${cat.icon}</div>
        <h3 class="category-title">${cat.name}</h3>
        <p class="category-desc">${cat.description}</p>
        <div class="category-link-footer">
          <span>Explore Items</span>
          <span class="category-count">${cat.count} Dishes →</span>
        </div>
      </a>
    `).join('');
  }

  // Render Special Promotional Offers
  function renderSpecialOffers() {
    const container = document.getElementById('specialOffersGrid');
    if (!container) return;

    const offers = (window.CheesyStorage ? window.CheesyStorage.getOffers() : window.SPECIAL_OFFERS) || [];
    const activeOffers = offers.filter(o => o.active !== false);

    container.innerHTML = activeOffers.map(offer => `
      <div class="offer-card">
        <span class="offer-badge-ribbon">${offer.badge}</span>
        <span class="offer-tag">${offer.tag}</span>
        <h3 class="offer-title">${offer.title}</h3>
        <h4 class="offer-subtitle">${offer.subtitle}</h4>
        <p class="offer-desc">${offer.desc}</p>
        <div class="offer-code-bar">
          <span>CODE: <strong>${offer.code}</strong></span>
          <a href="menu.html" class="btn btn-primary btn-sm" style="padding: 0.4rem 0.9rem;">Claim Deal</a>
        </div>
      </div>
    `).join('');
  }

  // Secret Staff / Admin Access (Hidden from public customers)
  function initSecretAdminTrigger() {
    // 1. Keyboard shortcut: Ctrl + Shift + A or Alt + A
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
          (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        window.location.href = 'admin.html';
      }
    });

    // 2. Secret Logo Interaction
    const logoElements = document.querySelectorAll('.brand-logo-img, .brand-logo-link');
    let clickCount = 0;
    let clickTimer = null;

    logoElements.forEach(el => {
      // Double click directly opens admin
      el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = 'admin.html';
      });

      // Rapid clicks (3 clicks)
      el.addEventListener('click', (e) => {
        clickCount++;
        clearTimeout(clickTimer);

        if (clickCount >= 3) {
          e.preventDefault();
          e.stopPropagation();
          clickCount = 0;
          window.location.href = 'admin.html';
          return false;
        }

        // On homepage, single click simply scrolls to top instead of reloading!
        e.preventDefault();
        if (clickCount === 1) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          clickTimer = setTimeout(() => {
            clickCount = 0;
          }, 600);
        }
      });
    });
  }

})();
