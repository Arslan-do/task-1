// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');

  if (burger && navList) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('nav__burger--active');
      navList.classList.toggle('nav__list--open');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        burger.classList.remove('nav__burger--active');
        navList.classList.remove('nav__list--open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.header__nav')) {
        burger.classList.remove('nav__burger--active');
        navList.classList.remove('nav__list--open');
      }
    });
  }
});
