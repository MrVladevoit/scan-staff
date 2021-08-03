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
    INPUT MASK
  ----------------------------------------*/
  $(".js-mask-number").mask("0#");
  $(".js-mask-phone").mask("+7 (000) 000-00-00");
  $(".js-mask-time").mask("00 : 00");
  $(".js-mask-date").mask("00.00.0000");

  /*----------------------------------------
    ABOUT ALPHABET
  ----------------------------------------*/
  jQuery('<div class="numeric__button numeric__button--down">-</div>').insertBefore('.numeric__input');
  jQuery('<div class="numeric__button numeric__button--up">+</div>').insertAfter('.numeric__input');

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

  /*----------------------------------------
   CAROUSELS
  ----------------------------------------*/

  // slider
  // var $instruments = $(".js-carousel-instruments");
  //
  // settings_slider = {
  //   rows: 0,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: false,
  //   mobileFirst: true,
  //   infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //   ]
  // };
  //
  // // slick on mobile
  // function slick_on_mobile(slider, settings){
  //
  //   $(window).on('load resize', function() {
  //
  //     if ($(window).width() > 1024 - scrollWidth) {
  //
  //       if (slider.hasClass('slick-initialized')) {
  //         slider.slick('unslick');
  //       }
  //
  //       return
  //     }
  //     if (!slider.hasClass('slick-initialized')) {
  //       return slider.slick(settings);
  //     }
  //   });
  // }
  //
  // slick_on_mobile($instruments, settings_slider);

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

