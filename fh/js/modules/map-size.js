'use strict';

(function () {

  var locationBlock = document.querySelector('.location');

  if (!locationBlock) {
    return;
  }

  var location = document.querySelector('.location').offsetHeight;
  var headerHeight = document.querySelector('.location h1').offsetHeight;
  var choiceHeight = document.querySelector('.location h1').offsetHeight;
  var mapHeight = document.getElementById('mapBig');

  // if (window.isMobile()) {
  mapHeight.style.height = location - headerHeight - choiceHeight / 2 + 'px';
  // }
})();
