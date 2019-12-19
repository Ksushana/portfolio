'use strict';

(function () {
  window.countSlider = function (photoSlider) {
    if (!photoSlider) {
      return;
    }

    var slidersContainer = photoSlider.querySelector('.housing__slider-container');
    var wrapper = slidersContainer.querySelector('.housing__slides');
    var slides = slidersContainer.querySelectorAll('.housing__slider-slide');
    var countCursor = photoSlider.querySelector('.count-cursor');
    var countCursorCurrent = countCursor.querySelector('.current');
    var countCursorTotal = countCursor.querySelector('.total');
    var backArrow = countCursor.querySelector('.back');
    var nextArrow = countCursor.querySelector('.next');
    var footer = document.querySelector('.footer-inner');


    var width = 0;
    var total = slides.length;

    var hideCountCursor = function () {
      countCursor.classList.add('visually-hidden');
    };

    if (total <= 1) {
      hideCountCursor();
      return;
    }

    var currentIndex = 0;
    var currentSlide = slides[0];
    var cursorLeft = -1;
    var cursorTop = -1;
    var requestAnimationFrameId = null;
    var swiper;

    var geWidth = function () {
      if (width === 0) {
        width = slides[0].clientWidth;
      }
      return width;
    };

    var getSide = function (position) {
      if (position < geWidth() / 2) {
        return -1;
      }
      return 1;
    };

    var getLoopedSlide = function (attemptIndex) {
      if (attemptIndex === total) {
        return 0;
      }
      if (attemptIndex < 0) {
        return total - 1;
      }
      return attemptIndex;
    };

    var addSlideClass = function () {
      slidersContainer.classList.add('swiper-container');
      wrapper.classList.add('swiper-wrapper');

      for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        slide.classList.add('swiper-slide');
      }
    };


    var handleClickDesktop = function (evt) {
      var x = evt.pageX;
      var newIndex = currentIndex + getSide(x);
      changeSlide(newIndex);
    };

    var handleClickMobile = function () {
      var newIndex = currentIndex + 1;
      changeSlide(newIndex);
    };

    var handleClick = function (evt) {
      if (window.isDesktop()) {
        handleClickDesktop(evt);
      } else {
        handleClickMobile();
      }
    };

    var hideSlide = function (slide) {
      slide.style.display = 'none';
    };

    var showSlide = function (slide) {
      slide.style.display = 'block';
    };

    var changeSlide = function (attemptIndex) {
      var index = getLoopedSlide(attemptIndex);

      var slide = slides[index];
      if (!slide) {
        return;
      }
      showSlide(slide);
      hideSlide(currentSlide);
      updateCursorCurrentSlide(index);
      currentSlide = slide;
      currentIndex = index;
    };

    var hideSlides = function () {
      for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        if (i !== 0) {
          hideSlide(slide);
        }
      }
    };

    var updateCursorCurrentSlide = function (index) {
      countCursorCurrent.textContent = index + 1;
    };

    var updateCursorTotal = function (newTotal) {
      countCursorTotal.textContent = newTotal;
    };

    var positionCursorCount = function (left, top) {
      cursorLeft = left;
      cursorTop = top;
    };

    var renderCursorCount = function () {
      countCursor.style.transform = 'translate(' + (cursorLeft) + 'px, ' + cursorTop + 'px)';
      requestAnimationFrameId = window.requestAnimationFrame(renderCursorCount);
    };

    var showGradien = function () {
      photoSlider.classList.add('is-scroll');
      photoSlider.classList.remove('is-scroll--hide');
    };

    var hideGradien = function () {
      photoSlider.classList.add('is-scroll--hide');
    };

    var showBackArrow = function () {
      backArrow.classList.remove('visually-hidden');
    };

    var hideBackArrow = function () {
      backArrow.classList.add('visually-hidden');
    };

    var showNextArrow = function () {
      nextArrow.classList.remove('visually-hidden');
    };

    var hideNextArrow = function () {
      nextArrow.classList.add('visually-hidden');
    };

    var showCountCursor = function () {
      countCursor.classList.remove('visually-hidden-non-touch');
      countCursor.classList.remove('visually-hidden');
    };

    var handleMouseMove = function (evt) {
      if (window.isTouch()) {
        return;
      }
      var clientX = evt.clientX;
      var clientY = evt.clientY;
      positionCursorCount(clientX, clientY);
      updateCursorArrow(clientX);
    };

    var updateCursorArrow = function (x) {
      if (getSide(x) === 1) {
        showNextArrow();
        hideBackArrow();
      } else {
        showBackArrow();
        hideNextArrow();
      }
    };

    var handleContainerEnter = function () {
      if (window.isTouch()) {
        return;
      }
      hideGradien();
      showCountCursor();
      requestAnimationFrameId = window.requestAnimationFrame(renderCursorCount);
    };

    var handleContainerLeave = function () {
      if (window.isTouch()) {
        return;
      }
      hideCountCursor();
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId);
      }
    };

    var handleSwiperSlideChange = function () {
      if (!swiper) {
        return;
      }
      updateCursorCurrentSlide(swiper.realIndex);
    };

    var initSwiper = function () {
      addSlideClass();
      swiper = new window.Swiper(slidersContainer, {
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
        on: {
          slideChange: handleSwiperSlideChange
        }
      });
    };

    updateCursorTotal(slides.length);

    photoSlider.setAttribute('style', 'cursor: none;');

    if (window.isTouch()) {
      initSwiper();
      showCountCursor();
    } else {
      photoSlider.addEventListener('click', function (evt) {
        handleClick(evt);
      });
      hideSlides();
    }

    window.addEventListener('mousemove', function (evt) {
      setTimeout(function () {
        handleMouseMove(evt);
      }, 1);
    });


    photoSlider.addEventListener('mouseenter', handleContainerEnter);
    photoSlider.addEventListener('mouseleave', handleContainerLeave);

    if (footer) {
      footer.addEventListener('mouseenter', showGradien);
    }
  };

})();
