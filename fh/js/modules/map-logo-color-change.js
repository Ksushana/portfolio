'use strict';

(function () {
  var contactsPage = document.querySelector('.contacts');
  if (!contactsPage) {
    return;
  }

  window.addEventListener('scroll', function () {

    var mapHeight = document.querySelector('.map-office#map').offsetHeight;
    var logoHeight = document.querySelector('.header__logo').offsetHeight;
    var pageTop;
    pageTop = mapHeight - 50;
    var windowScroll = window.scrollY;
    var logo = document.querySelector('.header__logo');
    var burger = document.querySelector('.header__menu-open');
    if (windowScroll >= pageTop) {
      burger.classList.remove('blue');
    } else {
      burger.classList.add('blue');
    }

    if (windowScroll >= pageTop - logoHeight / 2) {
      logo.classList.remove('blue');
    } else {
      logo.classList.add('blue');
    }
  });
})();
