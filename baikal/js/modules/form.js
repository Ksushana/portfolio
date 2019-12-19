(function () {
  var inputPhone = document.querySelectorAll('.form__phone');

  if (inputPhone) {
    for (var i = 0; i < inputPhone.length; i++) {
      var phoneMask = new IMask(inputPhone[i], {
          mask: '+{7}(000)000-00-00'
        });
    }
  }

  if (Stickyfill) {
    var stickyForms = document.querySelectorAll('.form__fixed ');
    Stickyfill.add(stickyForms);
  }
})();
