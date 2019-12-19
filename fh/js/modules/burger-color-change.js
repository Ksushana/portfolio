'use strict';

(function () {
  var planPage = document.querySelector('.blue-burger-container');
  if (!planPage) {
    return;
  }

  window.addEventListener('scroll', function () {

    var headerHeight = document.querySelector('.blue-burger-container h1').offsetHeight;
    var choiceHeight = document.querySelector('.blue-burger-container .choice').offsetHeight;
    var pageTop;
    pageTop = headerHeight + choiceHeight - 10;
    var windowScroll = window.scrollY;
    var burger = document.querySelector('.header__menu-open');

    if (windowScroll >= pageTop) {
      burger.classList.add('blue');
    } else {
      burger.classList.remove('blue');
    }
  });
})();
