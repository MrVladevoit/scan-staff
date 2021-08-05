(function ($) {

  /*----------------------------------------
   TRANSITION SCROLL
 ----------------------------------------*/
  $('.js-link-scroll').on('click', function () {

    var anchor = $(this),
      headerHeight = $(".header").height();

    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - headerHeight - 40
    }, 1000)
  });

  /*----------------------------------------
  SCROLL BAR WIDTH
----------------------------------------*/

  //WIDTH SCROLL BAR
  var scrollBar = document.createElement('div');

  scrollBar.style.overflowY = 'scroll';
  scrollBar.style.width = '50px';
  scrollBar.style.height = '50px';

  // при display:none размеры нельзя узнать
  // нужно, чтобы элемент был видим,
  // visibility:hidden - можно, т.к. сохраняет геометрию
  scrollBar.style.visibility = 'hidden';

  document.body.appendChild(scrollBar);
  var scrollWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
  document.body.removeChild(scrollBar);

  /*----------------------------------------
    INPUT MASK
  ----------------------------------------*/
  $(".js-mask-number").mask("0#");
  $(".js-mask-phone").mask("+7 (000) 000-00-00");
  $(".js-mask-time").mask("00 : 00");
  $(".js-mask-date").mask("00.00.0000");

  /*----------------------------------------
    NUMERIC
  ----------------------------------------*/

  const
    iconPlus = `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="numeric__icon">
          <path fill="currentColor" d="M12.2965 0.538576C13.1249 0.539661 13.7956 1.21211 13.7945 2.04054L13.7828 11.0386H22.749C23.5775 11.0386 24.249 11.7101 24.249 12.5386C24.249 13.367 23.5775 14.0386 22.749 14.0386H13.7788L13.767 23.0405C13.7659 23.869 13.0935 24.5397 12.2651 24.5386C11.4366 24.5375 10.7659 23.865 10.767 23.0366L10.7788 14.0386H1.74902C0.920596 14.0386 0.249023 13.367 0.249023 12.5386C0.249023 11.7101 0.920596 11.0386 1.74902 11.0386H10.7828L10.7945 2.03661C10.7956 1.20818 11.4681 0.53749 12.2965 0.538576Z"/>
        </svg>`,
    iconMinus = `
      <svg width="24" height="3" viewBox="0 0 24 3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="numeric__icon">
          <path fill="currentColor" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H22.5C23.3284 0 24 0.671573 24 1.5C24 2.32843 23.3284 3 22.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"/>
      </svg>`;

  jQuery('<button class="numeric__button numeric__button--down">' + iconMinus + '</button>').insertBefore('.numeric__input');
  jQuery('<button class="numeric__button numeric__button--up">' + iconPlus + '</button>').insertAfter('.numeric__input');

  jQuery('.numeric').each(function() {
    var
      spinner = jQuery(this),
      input = spinner.find('.numeric__input'),
      btnUp = spinner.find('.numeric__button--up'),
      btnDown = spinner.find('.numeric__button--down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      let oldValue = parseFloat(input.val());

      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      let oldValue = parseFloat(input.val());

      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // jQuery('[data-tariff]').each(function () {
  //   var
  //     block = jQuery(this),
  //     blockPrice = block.attr('data-tariff'),
  //     inputValue = block.find('.numeric__input').val(),
  //     btnUp = block.find('.numeric__button--up'),
  //     btnDown = block.find('.numeric__button--down'),
  //     price = block.find('.tariff-block__value');
  //
  //   btnUp.click(function() {
  //     var newPrice = blockPrice * inputValue;
  //     console.log(inputValue);
  //     // price.innerText(newPrice);
  //   });
  // });
  /*----------------------------------------
    FIXED HEADER
  ----------------------------------------*/

  function initStickyHeader() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
        $('.page__header--fixed').addClass("page__header--scrolled");
      }
      else{
        $('.page__header--fixed').removeClass("page__header--scrolled");
      }
    });
  }

  initStickyHeader();

  /*----------------------------------------
   CAROUSELS
  ----------------------------------------*/

  // slider
  var $tariffs = $(".js-tariffs");

  settings_slider = {
    rows: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    infinite: true
  };

  // slick on mobile
  function slick_on_mobile(slider, settings){

    $(window).on('load resize', function() {
      if ($(window).width() > 767 - scrollWidth) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  }

  slick_on_mobile($tariffs, settings_slider);

  /*----------------------------------------
   SPECIAL CAROUSEL
  ----------------------------------------*/

  // $(".js-carousel-cards").slick({
  //   rows: 0,
  //   dots: true,
  //   arrows: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 1300,
  //       settings: {
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 2,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         arrows: false
  //       }
  //     }
  //   ]
  // });

  /*----------------------------------------
   NEWS CAROUSEL
  ----------------------------------------*/

  // $(".js-carousel-news").slick({
  //   rows: 0,
  //   dots: true,
  //   arrows: true,
  //   initialSlide: 1,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: false,
  //   prevArrow: '<button type="button" class="slick-prev slick-prev--small">Previous</button>',
  //   nextArrow: '<button type="button" class="slick-next slick-next--small">Next</button>',
  //   appendArrows: ".slick-controls__arrows",
  //   appendDots: ".slick-controls",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         arrows: false
  //       }
  //     },
  //   ]
  // });

  /*----------------------------------------
   GALLERY CAROUSEL
  ----------------------------------------*/

  // $('.js-gallery-preview').slick({
  //   rows: 0,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   asNavFor: '.js-gallery-thumbnails'
  // });

  // $('.js-gallery-thumbnails').slick({
  //   rows: 0,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   centerMode: false,
  //   asNavFor: '.js-gallery-preview',
  //   arrows: false,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //   ]
  // });


})(jQuery);

