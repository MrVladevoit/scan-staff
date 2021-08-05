'use strict';

window.addEventListener("DOMContentLoaded", () => {

  // Start Mobile Menu ---------------------------
  const mobileMenu = document.querySelector("#mobile-menu"),
        mobileMenuOverlay = document.querySelector('#mobile-menu-overlay'),
        buttonCloseMobileMenu = document.querySelectorAll('[data-mobile-menu-close]'),
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

  buttonCloseMobileMenu.forEach(btn => {
    btn.addEventListener('click', ()=> {
      closeMenu();
    });
  });

  // buttonCloseMobileMenu.addEventListener('click', closeMenu);

  mobileMenu.addEventListener('click', (e) => {
    if(e.target === mobileMenu) {
      closeMenu();
    }
  });
  // End Start Mobile Menu ---------------------------

  // Service tabs ---------------------------

  const tabsServiceParent = document.querySelector('.section-tabs__list'),
    tabsService = document.querySelectorAll('.section-tabs__item'),
    tabsServiceContent = document.querySelectorAll('.section-tabs__content-item'),
    tabsServiceButtonCollapse= document.querySelectorAll('.section-tabs__collapse');

  function hideServiceTabContent () {

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

  function showServiceTabContent(i = 0) {
    tabsServiceContent[i].classList.add('section-tabs__content-item--show');
    tabsServiceContent[i].classList.remove('section-tabs__content-item--hide');
    tabsService[i].classList.add('section-tabs__item--active');
    tabsServiceButtonCollapse[i].classList.add('section-tabs__collapse--active');
    tabsServiceButtonCollapse[i].nextElementSibling.classList.add('section-tabs__collapse-content--show');
  }

  hideServiceTabContent();
  showServiceTabContent();

  tabsServiceParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('section-tabs__item')) {
      // item = это элемент , i = номер по порядку
      tabsService.forEach((item, i) => {
        if(item == target) {
          hideServiceTabContent();
          showServiceTabContent(i);
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
  // End service tabs ---------------------------


  // Simple tabs ---------------------------

  const simpleTabsParent = document.querySelector('.simple-tabs'),
    simpleTabsItem = document.querySelectorAll('.simple-tabs__item'),
    simpleTabsContent = document.querySelectorAll('.simple-tabs__content');

  function hideSimpleTabContent () {

    simpleTabsContent.forEach(item => {
      item.classList.remove('simple-tabs__content--show');
    });

    simpleTabsItem.forEach(item => {
      item.classList.remove('simple-tabs__item--active');
    });
  }

  function showSimpleTabContent(i = 0) {
    simpleTabsContent[i].classList.add('simple-tabs__content--show');
    simpleTabsItem[i].classList.add('simple-tabs__item--active');
  }

  hideSimpleTabContent();
  showSimpleTabContent();

  simpleTabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('simple-tabs__item')) {
      // item = это элемент , i = номер по порядку
      simpleTabsItem.forEach((item, i) => {
        if(item == target) {
          hideSimpleTabContent();
          showSimpleTabContent(i);
        }
      });
    }
  });
  // End service tabs ---------------------------
});
