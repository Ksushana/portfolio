'use strict';

(function () {
  var sliders = document.querySelectorAll('.housing__slider');
  for (var i = 0; i < sliders.length; i++) {
    var slider = sliders[i];
    window.countSlider(slider);
  }
})();
