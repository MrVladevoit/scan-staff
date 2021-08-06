'use strict';

window.addEventListener("DOMContentLoaded", () => {

  // Transition Scroll ---------------------------
  const scrollLinks = document.querySelectorAll('.js-link-scroll');

  scrollLinks.forEach(anchor => {

    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const anchorHref = anchor.getAttribute('href'),
        elementPosition = document.querySelector(anchorHref).offsetTop,
        headerHeight = document.querySelector('.header').clientHeight;

      window.scrollTo({
        top: elementPosition - headerHeight, //add your necessary value
        behavior: "smooth"  //Smooth transition to roll
      });
    });
  });

  // End Transition Scroll ---------------------------


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


  // NUMERIC ---------------------------
  const btnUp = document.querySelectorAll('.numeric__button--up'),
        btnDown = document.querySelectorAll('.numeric__button--down');

  btnUp.forEach(btn => {
    btn.addEventListener('click', function () {
      this.parentNode.querySelector('input[type=number]').stepUp();
      // console.log(event.target.parentNode.querySelector('input[type=number]').value);
    });
  });

  btnDown.forEach(btn => {
    btn.addEventListener('click', function () {
      this.parentNode.querySelector('input[type=number]').stepDown();
      // console.log(event.target.parentNode.querySelector('input[type=number]').value);
    });
  });
  // End NUMERIC ---------------------------

  // Tariff Block ---------------------------
  const tariffBlock = document.querySelectorAll('[data-tariff]');

  tariffBlock.forEach(item => {

    const buttonUP = item.querySelector('.numeric__button--up'),
          buttonDown = item.querySelector('.numeric__button--down'),
          input = item.querySelector('input[type=number]'),
          price = item.querySelector('.tariff-block__value'),
          constValue = Number(price.textContent);

    buttonUP.addEventListener('click', function () {
      let inputValue = item.querySelector('input[type=number]').value,
          priceValue = Number(price.textContent);

      if(inputValue > 1) {
        priceValue = constValue + priceValue;
        price.innerHTML = priceValue;
      } else {
        price.innerHTML = constValue;
      }
    });

    buttonDown.addEventListener('click', function () {
      let inputValue = item.querySelector('input[type=number]').value,
          priceValue = Number(price.textContent);

      if(inputValue <= 1) {
        price.innerHTML = constValue;
      } else {
        priceValue = priceValue - constValue;
        price.innerHTML = priceValue;
      }
    });

    input.addEventListener('input', function () {
      let
        inputValue = item.querySelector('input[type=number]').value,
        priceValue = Number(price.textContent);

      if(inputValue >= 1) {
        priceValue = constValue * inputValue; // 1000 * 4000
        price.innerHTML = priceValue;
      } else {
        price.innerHTML = constValue;
        input.value = 1;
      }
    });
  });
  // End Tariff Block ---------------------------

});
