// Mobile menu toggle
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
  }

  function closeMenu() {
    burger.classList.remove('nav__burger--active');
    navList.classList.remove('nav__list--open');
    if (closeBtn) {
      closeBtn.classList.remove('nav__close--active');
    }
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
  }
});
