'use strict';

(function () {
  var ESC = 27;
  var form = document.querySelector('.order-form form');
  if (!form) {
    return;
  }

  var AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').content;

  var submitBtn = form.querySelector('button[type="submit"]')
  var phone = form.querySelector('[name=user-phone]');
  var name = form.querySelector('[name=user-name]');
  var nameBlock = form.querySelector('p:nth-child(1)');
  var phoneBlock = form.querySelector('p:nth-child(2)');
  var formResult = document.querySelector('.contacts-result');
  var resultText = formResult.querySelector('.contacts-result__text');
  var successResultText = resultText.textContent;
  var closeButtonResult = document.querySelector('.contacts-result__button');

  var cleanErrors = function () {
    cleanError(phoneBlock);
    cleanError(nameBlock);
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
  };

  var showSendError = function (serverStatusText) {
    submitBtn.disabled = false;

    resultText.textContent = 'Не удалось отправить форму. ' + serverStatusText;
  };

  Inputmask({ "mask": "+7 999 999-9999" }).mask(phone);

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    cleanErrors();
    if (!phone.value || phone.inputmask.unmaskedvalue().length < 10) {
      setError(phoneBlock);
    } else {
      submitBtn.disabled = true;
      window.backend.upload(new FormData(form), form.action, sendForm, showSendError, {name: 'X-CSRF-Token', value: AUTH_TOKEN});

      formResult.classList.add('contacts-result--show');
      window.bodyScrollLock.disableBodyScroll(formResult);
    }
  });

  var closePopupResult = function () {
    formResult.classList.remove('contacts-result--show');
    window.bodyScrollLock.enableBodyScroll(formResult);
  };

  closeButtonResult.addEventListener('click', function () {
    window.setTimeout(closePopupResult, 100);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC) {
      if (formResult.classList.contains('contacts-result--show')) {
        evt.preventDefault();
        closePopupResult();
      }
    }
  });
})();
