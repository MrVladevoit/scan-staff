(function ($) {

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
  const
    $tariffs = $(".js-tariffs"),
    $sources = $(".js-sources");

  settings_slider = {
    rows: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    infinite: true
  };

  settings_sources_slider = {
    rows: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2
        }
      }
    ],
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
  slick_on_mobile($sources, settings_sources_slider);


  /*----------------------------------------
   Clients Carousel
  ----------------------------------------*/

  $(".js-clients").slick({
    rows: 0,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  /*----------------------------------------
   NEWS CAROUSEL
  ----------------------------------------*/

  // $(".js-clients").slick({
  //   rows: 0,
  //   dots: false,
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

  // CUSTOM SELECT
  $('.selectbox').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
    });

  });

})(jQuery);

