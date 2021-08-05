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

  // Service tabs ---------------------------

  const tabsServiceParent = document.querySelector('.section-tabs__list'),
    tabsServiceParentContent = document.querySelector('.section-tabs__content'),
    tabsService = document.querySelectorAll('.section-tabs__item'),
    tabsServiceContent = document.querySelectorAll('.section-tabs__content-item'),
    tabsServiceButtonCollapse= document.querySelectorAll('.section-tabs__collapse');

  function hideTabContent () {

    tabsServiceContent.forEach(item => {
      item.classList.add('section-tabs__content-item--hide');
      item.classList.remove('section-tabs__content-item--show');
    });

    tabsService.forEach(item => {
      item.classList.remove('section-tabs__item--active');
    });

    tabsServiceButtonCollapse.forEach(item => {
      item.classList.remove('section-tabs__collapse--active');
      item.nextElementSibling.classList.remove('section-tabs__collapse-content--show');
    });
  }

  function showTabContent(i = 0) {
    tabsServiceContent[i].classList.add('section-tabs__content-item--show');
    tabsServiceContent[i].classList.remove('section-tabs__content-item--hide');
    tabsService[i].classList.add('section-tabs__item--active');
    tabsServiceButtonCollapse[i].classList.add('section-tabs__collapse--active');
    tabsServiceButtonCollapse[i].nextElementSibling.classList.add('section-tabs__collapse-content--show');
  }

  hideTabContent();
  showTabContent();

  tabsServiceParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('section-tabs__item')) {
      // item = это элемент , i = номер по порядку
      tabsService.forEach((item, i) => {
        if(item == target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  tabsServiceButtonCollapse.forEach(btn =>{

    btn.addEventListener('click', function () {

      if(this.classList.contains('section-tabs__collapse--active')) {
        this.classList.remove('section-tabs__collapse--active');
        this.nextElementSibling.classList.remove('section-tabs__collapse-content--show');
      } else {
        tabsServiceButtonCollapse.forEach(item => {
          item.classList.remove('section-tabs__collapse--active');
          item.nextElementSibling.classList.remove('section-tabs__collapse-content--show');
        });
        this.classList.add('section-tabs__collapse--active');
        this.nextElementSibling.classList.add('section-tabs__collapse-content--show');
      }
    });

  });

  // tabsServiceContent.forEach(item => {
  //
  //   item.addEventListener('click', (event) => {
  //
  //     const target = event.target;
  //
  //     if(target && target.classList.contains('section-tabs__collapse')) {
  //       tabsServiceButtonCollapse.forEach((item, i) => {
  //         if(item == target) {
  //           hideTabContent();
  //           showTabContent(i);
  //         }
  //       });
  //     }
  //   });
  // });



  // End service tabs ---------------------------

});
