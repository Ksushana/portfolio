'use strict';

(function () {
  var buttons = document.querySelector('.choice');
  if (!buttons) {
    return;
  }

  if (!window.isMobile()) {
    return;
  }

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto'
  });
})();

(function () {
  var month = document.querySelector('.choice-progress');
  if (!month) {
    return;
  }

  if (!window.isMobile()) {
    return;
  }

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto'
  });
})();
