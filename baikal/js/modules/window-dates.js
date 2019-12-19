(function () {

  var items = document.querySelectorAll('.tours-list__organization');
  if (items) {
    var items = document.querySelectorAll('.tours-list__organization');
    var addClickListener = function (it) {
      var btnMore = it.querySelector('.organization__button');
      var win = it.querySelector('.window-dates');
      var btnClose = it.querySelector('.window-dates__button');
      var listDates = it.querySelector('.organization__list-dates');
      var orgButton = it.querySelector('.organization__button');
      var onClickButtonDates = function() {
        win.classList.remove('visually-hidden');
        win.classList.add('organization__window-dates--show');

        listDates.classList.add('organization__list-dates--hidden-mobile');
        orgButton.classList.add('organization__button--hidden-mobile');

        var onClickButtonClose = function() {
          win.classList.add('visually-hidden');
          win.classList.remove('organization__window-dates--show');
          listDates.classList.remove('organization__list-dates--hidden-mobile');
          orgButton.classList.remove('organization__button--hidden-mobile');
          btnClose.removeEventListener('click', onClickButtonClose);
        }
        btnClose.addEventListener('click', onClickButtonClose);
      };
      btnMore.addEventListener('click', onClickButtonDates);
    }

    for (var i =0 ; i< items.length; i++) {
      addClickListener(items[i]);
    }
  }
})();
