(function () {
  function showRequestResponseBlock() {
    requestResponseBlock.classList.remove('hidden');
  }

  function hideModalCallbackForm() {
    modalCallbackForm.classList.add('hidden');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    showRequestResponseBlock();
    hideModalCallbackForm();
  }

  var modalCallbackForm = document.querySelector('.modal__callback-form');
  var requestResponseBlock = document.querySelector('.request-response__block--js');

  if (modalCallbackForm) {
    modalCallbackForm.addEventListener('submit', handleSubmit);
  }
})();
