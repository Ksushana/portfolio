'use strict';

(function () {
  var gradientTop = document.querySelector('.gradient-top');
  var footer = document.querySelector('.footer-inner');

  if (window.isMobile()) {
    var swapBlock = document.querySelector('.gradient-swap');
    var swapMobileBLock = document.querySelector('.gradient-swap-mobile');

    if (swapBlock) {
      swapBlock.classList.remove('gradient-bottom');
      swapMobileBLock.classList.add('gradient-bottom');
    }
  }

  var lastScreen = document.querySelectorAll('.gradient-bottom');
  var gradient = document.querySelector('.gradient');

  if (!gradient) {
    return;
  }

  window.addEventListener('scroll', function () {
    var windowScroll = window.pageYOffset;
    var arrow = document.querySelector('.arrow');


    if (gradientTop) {
      if (windowScroll > 50) {
        var mapTop = document.querySelector('.contacts');
        var logo = document.querySelector('.header__logo');
        var header = document.querySelector('.contacts__header');
        var burger = document.querySelector('.header__menu-open');

        gradientTop.classList.add('is-scroll');
        gradientTop.classList.remove('is-scroll--show');


        if (mapTop) {
          logo.classList.add('blue');
          burger.classList.add('blue');

          setTimeout(function () {
            gradientTop.classList.add('is-under');
            gradientTop.classList.remove('is-above');
            header.classList.add('visually-hidden');
          }, 1200);
        }

      } else {
        gradientTop.classList.remove('is-scroll');
        gradientTop.classList.add('is-scroll--show');
      }
    }

    if (arrow) {
      if (windowScroll >= 200) {
        arrow.style.opacity = '0';
        arrow.style.transition = '1.75s';
      } else {
        arrow.style.opacity = '1';
        arrow.style.transition = '1.75s';
      }
    }

    if (lastScreen) {
      var footerPadding = footer ? getComputedStyle(footer).paddingBottom.slice(0, -2) : 0;
      var delta = document.documentElement.scrollHeight - window.innerHeight - Number(footerPadding);
      var sliderPage = document.querySelector('.slider-page');

      for (var index = 0; index < lastScreen.length; index++) {
        var element = lastScreen[index];
        if (!sliderPage) {
          if (windowScroll > delta) {
            element.classList.add('is-scroll');
            element.classList.remove('is-scroll--hide');
          } else {
            element.classList.add('is-scroll--hide');
          }
        }
      }

      var surroundings = document.querySelector('.surraundings');

      if (surroundings) {
        var item = document.querySelector('.surraundings-list__item.gradient-bottom');

        var showGradien = function () {
          item.classList.add('is-scroll');
          item.classList.remove('is-scroll--hide');
        };

        var hideGradien = function () {
          item.classList.add('is-scroll--hide');
        };

        footer.addEventListener('mouseenter', showGradien);
        footer.addEventListener('mouseleave', hideGradien);
      }
    }
  });
})();
