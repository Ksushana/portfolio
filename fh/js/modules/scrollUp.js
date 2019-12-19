'use strict';

(function () {
  var scrollUpButton = document.querySelector('.phone-icon-scroll-top');
  var choice = document.querySelector('.choice');
  var timer = null;

  if (!scrollUpButton) {
    return;
  }

  var scrollStart = function (el) {
    if (el.classList.contains('js-scrool-stop')) {
      el.classList.remove('js-scrool-stop');
      el.classList.add('js-scrool-start');
    }
  };

  var scrollStop = function () {
    choice.classList.remove('js-scrool-start');
    choice.classList.add('js-scrool-stop');
  };

  if (choice) {
    if (!window.isMobile()) {
      window.addEventListener('scroll', function () {
        clearTimeout(timer);
        scrollStart(choice);

        timer = setTimeout(scrollStop, 1000);
      });
    } else {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 400) {
          scrollUpButton.classList.add('js-scrool-stop');
        } else {
          scrollUpButton.classList.remove('js-scrool-stop');
        }
      });
    }
  }

  if (!scrollUpButton || !window.isMobile()) {
    return;
  }

  scrollUpButton.addEventListener('click', function () {
    var scroll = new SmoothScroll();
    var anchor = document.querySelector('h1');
    scroll.animateScroll(anchor);
  });
})();
