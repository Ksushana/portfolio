'use strict';

(function () {
  var popup = document.querySelector('.popup');
  var popupTrigger = document.querySelector('.popup-trigger');
  if (!popup || !popupTrigger) {
    return;
  }

  var closeBtn = popup.querySelector('.popup-btn');

  popupTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('show');
    window.bodyScrollLock.disableBodyScroll(popup);
  });

  closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
    window.bodyScrollLock.enableBodyScroll(popup);
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        window.bodyScrollLock.enableBodyScroll(popup);
      }
    }
  });
})();
