'use strict';


(function () {
  var rows = document.querySelectorAll('.plan__table tbody tr');

  if (!window.isMobile()) {

    var handleClick = function (e) {
      e.preventDefault();
      var target = e.currentTarget;
      var targetDataHref = target.dataset.href;
      window.location.href = targetDataHref;
    };

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      row.addEventListener('click', handleClick);
    }
  }
})();
