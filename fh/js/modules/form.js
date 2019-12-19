'use strict';

(function () {
  var ESC = 27;
  var openButton = document.querySelector('.header__menu-contacts p span');

  if (!openButton) {
    return;
  }

  var formPopup = document.querySelector('.form-popup');
  var closeButton = formPopup.querySelector('.form-popup__close--main');

  var openForm = function () {
    formPopup.classList.add('form-popup--show');
    window.bodyScrollLock.disableBodyScroll(formPopup);
  };

  var closeForm = function () {
    formPopup.classList.remove('form-popup--show');
    window.bodyScrollLock.enableBodyScroll(formPopup);
  };

  openButton.addEventListener('click', function () {
    window.setTimeout(openForm, 100);
  });

  closeButton.addEventListener('click', function () {
    window.setTimeout(closeForm, 100);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC) {
      if (formPopup.classList.contains('form-popup--show')) {
        evt.preventDefault();
        closeForm();

      }
    }
  });

  var AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').content;

  var form = document.querySelector('.form-popup form');
  var submitBtn = form.querySelector('button[type="submit"]')
  var phone = form.querySelector('[name=user-phone]');
  var name = form.querySelector('[name=user-name]');
  var nameBlock = form.querySelector('p:nth-child(1)');
  var phoneBlock = form.querySelector('p:nth-child(2)');
  var popupResult = document.querySelector('.form-popup-result');
  var resultText = popupResult.querySelector('.form-popup-result__text');
  var successResultText = resultText.textContent;
  var closeButtonResult = document.querySelector('.form-popup-result__close');

  Inputmask({ "mask": "+7 999 999-9999" }).mask(phone);

  var cleanErrors = function () {
    cleanError(phoneBlock);
  };

  var cleanError = function (el) {
    el.classList.remove('input-error');
  };

  var setError = function (el) {
    el.classList.add('input-error');
    setTimeout(function () {
      cleanError(el);
    }, 3000);
  };

  var sendForm = function () {
    submitBtn.disabled = false;
    form.reset();

    resultText.textContent = successResultText;
    formPopup.classList.remove('form-popup--show');
  };

  var showSendError = function (serverStatusText) {
    submitBtn.disabled = false;

    resultText.textContent = 'Не удалось отправить форму. ' + serverStatusText;
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    cleanErrors();
    if (!phone.value || phone.inputmask.unmaskedvalue().length < 10) {
      setError(phoneBlock);
    } else {
      submitBtn.disabled = true;
      window.backend.upload(new FormData(form), form.action, sendForm, showSendError, {name: 'X-CSRF-Token', value: AUTH_TOKEN});

      popupResult.classList.add('form-popup-result--show');
      window.bodyScrollLock.disableBodyScroll(form);
      window.bodyScrollLock.enableBodyScroll(formPopup);
    }
  });

  var closePopupResult = function () {
    popupResult.classList.remove('form-popup-result--show');
    window.bodyScrollLock.enableBodyScroll(form);
  };

  closeButtonResult.addEventListener('click', function () {
    window.setTimeout(closePopupResult, 100);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC) {
      if (popupResult.classList.contains('form-popup-result--show')) {
        evt.preventDefault();
        closePopupResult();

      }
    }
  });
})();
