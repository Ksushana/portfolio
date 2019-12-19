'use strict';

(function () {
  var bg = document.querySelector('.bg2x');
  if (!bg) {
    return;
  }

  if (window.devicePixelRatio >= 1.2) {
    var elems = document.getElementsByTagName('*');
    for (var i = 0; i < elems.length; i++) {
      var attr = elems[i].getAttribute('data-2x');
      if (attr) {
        elems[i].style.cssText += attr;
      }
    }
  }
})();
