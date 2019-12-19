(function () {
  var ESC_KEY = 'Escape';

  function showRequestResponseBlock() {
    requestResponseBlock.classList.add('request-response--show');
  }

  function hideRequestResponseBlock() {
    requestResponseBlock.classList.remove('request-response--show');
    document.removeEventListener('keydown', handleKeydown);
    modalCloseButton.removeEventListener('click', handleCloseClick);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    showRequestResponseBlock();
    document.addEventListener('keydown', handleKeydown);
    modalCloseButton.addEventListener('click', handleCloseClick);
    requestResponseBlock.addEventListener('click', handleCloseClick);
  }

  function handleKeydown(evt) {
    if (evt.key === ESC_KEY) {
      hideRequestResponseBlock();
    }
  }

  function handleCloseClick(evt) {
    if (evt.target.classList.contains('request-response__block')) {
      return;
    }
    hideRequestResponseBlock();
  }

  var applicationForm = document.querySelector('.order__form form');
  var applicationFormDouble = document.querySelector('.order__form--tour-double form');
  var applicationFormFixed = document.querySelector('.form__fixed');

  if (applicationForm) {
    var requestResponseBlock = document.querySelector('.request-response--js');
    var modalCloseButton = requestResponseBlock.querySelector('.modal__close');

    applicationForm.addEventListener('submit', handleSubmit);
  }

  if (applicationFormFixed) {
    var requestResponseBlock = document.querySelector('.request-response--js');
    var modalCloseButton = requestResponseBlock.querySelector('.modal__close');

    applicationFormFixed.addEventListener('submit', handleSubmit);
  }

  if (applicationFormDouble) {
    var requestResponseBlock = document.querySelector('.request-response--js');
    var modalCloseButton = requestResponseBlock.querySelector('.modal__close');

    applicationFormDouble.addEventListener('submit', handleSubmit);
  }
})();
