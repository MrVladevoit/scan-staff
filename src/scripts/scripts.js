'use strict';

window.addEventListener("DOMContentLoaded", () => {

  // Start Mobile Menu ---------------------------
  const mobileMenu = document.querySelector("#mobile-menu"),
        mobileMenuOverlay = document.querySelector('#mobile-menu-overlay'),
        buttonCloseMobileMenu = document.querySelector('[data-mobile-menu-close]'),
        buttonOpenMobileMenu = document.querySelectorAll('[data-mobile-menu-open]');

  function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu--opened');
    mobileMenuOverlay.classList.add('page-overlay--show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--opened');
    mobileMenuOverlay.classList.remove('page-overlay--show');
    document.body.style.overflow = 'auto';
  }

  buttonOpenMobileMenu.forEach(btn => {
    btn.addEventListener('click', ()=> {
      openMobileMenu();
    });
  });

  buttonCloseMobileMenu.addEventListener('click', closeMenu);

  mobileMenu.addEventListener('click', (e) => {
    if(e.target === mobileMenu) {
      closeMenu();
    }
  });
  // End Start Mobile Menu ---------------------------
});
