(function () {
  /* Для страницы base.html, нижний блок с гостиницами, мобильная версия */
  var items = document.querySelectorAll('.hotels-list__button');
  if (items) {
    var addClickListener = function (it) {
      var list = it.nextElementSibling;
      var onClickButtonOpen = function() {
        list.classList.toggle('hotels-list__sub-list--show');
        it.classList.toggle('hotels-list__button--open');
      };
      it.addEventListener('click', onClickButtonOpen);
    }
    for (var i =0 ; i< items.length; i++) {
      addClickListener(items[i]);
    }
  }
})();
