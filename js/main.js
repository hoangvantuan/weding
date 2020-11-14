(function () {
  'use strict';

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $('#fh5co-offcanvas, .js-fh5co-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });
  };

  var offcanvasMenu = function () {
    $('#page').prepend('<div id="fh5co-offcanvas" />');
    // $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas').find('li').removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown')
      .mouseenter(function () {
        var $this = $(this);

        $this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');
      })
      .mouseleave(function () {
        var $this = $(this);
        $this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');
      });

    $(window).resize(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  var burgerMenu = function () {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      var $this = $(this);

      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();
    });
  };

  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {
            $('body .animate-box.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated-fast');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated-fast');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated-fast');
                  } else {
                    el.addClass('fadeInUp animated-fast');
                  }

                  el.removeClass('item-animate');
                },
                k * 200,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '85%' }
    );
  };

  var dropdown = function () {
    $('.has-dropdown')
      .mouseenter(function () {
        var $this = $(this);
        $this.find('.dropdown').css('display', 'block').addClass('animated-fast fadeInUpMenu');
      })
      .mouseleave(function () {
        var $this = $(this);

        $this.find('.dropdown').css('display', 'none').removeClass('animated-fast fadeInUpMenu');
      });
  };

  var testimonialCarousel = function () {
    var owl = $('.owl-carousel-fullwidth');
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
    });
  };

  var goToTop = function () {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $('html').offset().top,
        },
        500,
        'easeInOutExpo'
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };

  // Loading page
  var loaderPage = function () {
    $('.fh5co-loader').fadeOut('slow');
  };

  var counter = function () {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(
        function (direction) {
          if (direction === 'down' && !$(this.element).hasClass('animated')) {
            setTimeout(counter, 400);
            $(this.element).addClass('animated');
          }
        },
        { offset: '90%' }
      );
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    mobileMenuOutsideClick();
    parallax();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    testimonialCarousel();
    goToTop();
    loaderPage();
    counter();
    counterWayPoint();
  });
})();

jQuery(document).ready(function () {
  jQuery('#gallery').nanogallery2({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=DgdEk6XmLD0&ab_channel=Tu%E1%BA%A5nHo%C3%A0ngV%C4%83n',
        title: 'Before Propose',
      },
      {
        src: 'https://youtu.be/tmBDFVuB10E',
        title: 'Propose',
      },
      {
        src: 'https://youtu.be/Mg8lVyuKU5Q',
        title: 'Album Video',
      },
      {
        src: 'images/ALBUM/1.JPG',
      },
      {
        src: 'images/ALBUM/2.JPG',
      },
      {
        src: 'images/ALBUM/3.JPG',
      },
      {
        src: 'images/ALBUM/4.JPG',
      },
      {
        src: 'images/ALBUM/5.JPG',
      },
      {
        src: 'images/ALBUM/6.JPG',
      },
      {
        src: 'images/ALBUM/7.JPG',
      },
      {
        src: 'images/ALBUM/8.JPG',
      },
      {
        src: 'images/ALBUM/9.JPG',
      },
      {
        src: 'images/ALBUM/10.JPG',
      },
      {
        src: 'images/ALBUM/11.JPG',
      },
      {
        src: 'images/ALBUM/12.JPG',
      },
      {
        src: 'images/ALBUM/13.JPG',
      },
      {
        src: 'images/ALBUM/14.JPG',
      },
      {
        src: 'images/ALBUM/15.JPG',
      },
      {
        src: 'images/ALBUM/16.JPG',
      },
      {
        src: 'images/ALBUM/17.JPG',
      },
      {
        src: 'images/ALBUM/18.JPG',
      },
      {
        src: 'images/ALBUM/19.JPG',
      },
      {
        src: 'images/ALBUM/20.JPG',
      },
      {
        src: 'images/ALBUM/21.JPG',
      },
      {
        src: 'images/ALBUM/22.JPG',
      },
      {
        src: 'images/ALBUM/23.JPG',
      },
      {
        src: 'images/ALBUM/24.JPG',
      },
      {
        src: 'images/ALBUM/25.JPG',
      },
    ],
    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic: [
      // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 },
    ],
    galleryMosaicXS: [
      // layout for XS width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMosaicSM: [
      // layout for SM width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    gallerySorting: 'random',
    thumbnailDisplayOrder: 'random',

    thumbnailHeight: '180',
    thumbnailWidth: '220',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 0,
    thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools: {
      topLeft: 'label',
      topRight: 'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton',
    },

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { background: '#111' },
    },

    // DEEP LINKING
    locationHash: true,
  });
});
