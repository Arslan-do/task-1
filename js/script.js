// Mobile menu toggle with accessibility improvements
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');
  const closeBtn = document.querySelector('.nav__close');

  function openMenu() {
    burger.classList.add('nav__burger--active');
    navList.classList.add('nav__list--open');
    if (closeBtn) {
      closeBtn.classList.add('nav__close--active');
    }
    // Update ARIA attributes for accessibility
    if (burger) {
      burger.setAttribute('aria-expanded', 'true');
    }
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('nav__burger--active');
    navList.classList.remove('nav__list--open');
    if (closeBtn) {
      closeBtn.classList.remove('nav__close--active');
    }
    // Update ARIA attributes for accessibility
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
    }
    // Restore body scroll
    document.body.style.overflow = '';
  }

  if (burger && navList) {
    burger.addEventListener('click', function () {
      if (navList.classList.contains('nav__list--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (
        !event.target.closest('.header__nav') &&
        navList.classList.contains('nav__list--open')
      ) {
        closeMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navList.classList.contains('nav__list--open')) {
        closeMenu();
        burger.focus(); // Return focus to burger button
      }
    });
  }
});

class ContactSection {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.addAccessibility();
  }

  bindEvents() {
    const button = document.querySelector('.btn-send-message');
    if (button) {
      button.addEventListener('click', () => {
      
        const message = document.createElement('div');
        message.textContent = 'Message sent! (This is a demo)';
        message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #000; color: #fff; padding: 15px 20px; border-radius: 5px; z-index: 10000;';
        document.body.appendChild(message);
        setTimeout(() => {
          message.remove();
        }, 3000);
      });
    }
  }

  addAccessibility() {
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('user-is-tabbing');
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactSection();
});