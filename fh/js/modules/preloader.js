'use strict';
(function () {
  var preloader = document.querySelector('.preloader');
  var mainPage = document.querySelector('.main-page');
  var mainMenu = document.querySelector('.header__menu');

  var minTimeoutMs = 2000;
  var menuTimeoutMs = 2000;
  var fadeOutTimeMs = 1000;

  if (!preloader || !mainPage) {
    return;
  }

  var timePassed = false;
  var imageLoaded = false;

  // var showMenu = function () {
  //   mainMenu.classList.add('header__menu--show');
  // };

  var showPreloader = function () {
    preloader.classList.remove('preloader--hidden');
  };

  var hidePreloader = function () {
    preloader.classList.add('preloader--faded');
    setTimeout(function () {
      preloader.classList.add('preloader--hidden');
      // setTimeout(showMenu, menuTimeoutMs);
    }, fadeOutTimeMs);
  };

  var tryHidePreloader = function () {
    if (timePassed && imageLoaded) {
      hidePreloader();
    }
  };

  var getImageUrl = function () {
    var backgroundImageCss = window.getComputedStyle(mainPage).backgroundImage;
    return backgroundImageCss.match(/url\((.*?)\)/)[1].replace(/('|")/g, '');
  };

  var onImageLoaded = function (cb) {
    try {
      var url = getImageUrl();
      var img = new Image();
      img.onload = cb;
      img.src = url;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      cb();
    }
  };

  var handleTimePassed = function () {
    timePassed = true;
    tryHidePreloader();
  };

  var handleImageLoaded = function () {
    imageLoaded = true;
    tryHidePreloader();
  };

  // var isFirstVisit = function () {
  //   var visited = localStorage.getItem('visited');
  //   return !visited;
  // };

  var setVisited = function () {
    localStorage.setItem('visited', true);
  };

  // if (isFirstVisit()) {
    showPreloader();
    setTimeout(handleTimePassed, minTimeoutMs);
    onImageLoaded(handleImageLoaded);
    // setVisited();
  // }
})();

