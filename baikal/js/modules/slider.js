(function () {
  var feedbackSlider = document.querySelector('.feedback__slider');

  if (feedbackSlider) {
    var feedbackSwiperSlider = new Swiper(feedbackSlider, {
      navigation: {
        nextEl: '.feedback__slider-arrow--next',
        prevEl: '.feedback__slider-arrow--prev',
      },
      loop: true,
      breakpointsInverse: true,
      breakpoints:{
        768: {
          slidesPerView: 1,
          slidesPerColumn: 2,
          spaceBetween: 36,
          loop: false,
          centeredSlides: true
        },
        1200: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 30,
          loop: true,
        }
      }
    });
  }

  var programSlider = document.querySelectorAll('.program__slider.swiper-container');

  if (programSlider) {
    new Swiper(programSlider, {
      navigation: {
        nextEl: '.program__slider-arrow--next',
        prevEl: '.program__slider-arrow--prev',
      },
      loop: true,
      breakpointsInverse: true,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
      breakpoints: {
        768: {
          centeredSlides: true,
        },
        1200: {
        }
      }
    });
  }

  var sightseeingSlider = document.querySelectorAll('.trakt-sightseeing__slider');

  if (sightseeingSlider) {
    new Swiper(sightseeingSlider, {
      navigation: {
        nextEl: '.trakt-sightseeing-arrow--next',
        prevEl: '.trakt-sightseeing-arrow--prev',
      },
      loop: true,
      breakpointsInverse: true,
      // slidesPerColumn: 1,
      breakpoints: {

        320: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 2,
          loop: true,
          autoResize: false,
        },
        460: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 8,
          loop: true,
          autoResize: false,
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 30,
          loop: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerColumn: 1,
          spaceBetween: 20,
          loop: true,
        }
      }
    });
  }

/* Слайдер для страницы article.html*/
  var articleSlider = document.querySelectorAll('.article__slider');

  if (articleSlider) {
    new Swiper(articleSlider, {
      navigation: {
        nextEl: '.article__slider-arrow--next',
        prevEl: '.article__slider-arrow--prev',
      },
      loop: true,
      breakpointsInverse: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 0,
          loop: false,
          centeredSlides: true
        },
        1200: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 0,
          loop: true,
        }
      }
    });
  }

  /* Слайдер для страницы hotels.html*/
  var hotelSlider = document.querySelectorAll('.look__slider');

  if (hotelSlider) {
    new Swiper(hotelSlider, {
      navigation: {
        nextEl: '.look__slider-arrow--next',
        prevEl: '.look__slider-arrow--prev',
      },
      loop: true,
      breakpointsInverse: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 5,
          loop: true,
          autoResize: false,
        },
        480: {
          slidesPerView: 3,
          slidesPerColumn: 1,
          spaceBetween: 5,
          loop: true,
          autoResize: false,
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 10,
          loop: true,
        },
        992: {
          slidesPerView: 3,
          slidesPerColumn: 1,
          spaceBetween: 10,
          loop: true,
        },
        1200: {
          slidesPerView: 3,
          slidesPerColumn: 1,
          spaceBetween: 20,
          loop: true,
        },
        1400: {
          slidesPerView: 4,
          slidesPerColumn: 1,
          spaceBetween: 20,
          loop: true,
        }
      }
    });
  }


    /* Слайдер для страницы base.html*/
    var baseSlider = document.querySelectorAll('.base__slider');

    if (baseSlider) {
      new Swiper(baseSlider, {
        navigation: {
          nextEl: '.base__slider-arrow--next',
          prevEl: '.base__slider-arrow--prev',
        },
        loop: true,
        breakpointsInverse: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
            loop: true,
            autoResize: false,
          },
          460: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 8,
            loop: true,
            autoResize: false,
          },
          768: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 30,
            loop: true,
          },
          1200: {
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: 25,
            loop: true,
          },
          1920: {
            slidesPerView: 6,
            slidesPerColumn: 1,
            spaceBetween: 21,
            loop: true,
          }
        }
      });
    }

})();
