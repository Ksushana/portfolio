'use strict';

(function () {
  window.addEventListener('load', function () {
    // получаем текущее значение высоты
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  });
  window.addEventListener('resize', function () {
    // получаем текущее значение высоты
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  });
})();
