'use strict';

(function () {
  var table = document.querySelector('#table');

  if (!table) {
    return;
  }

  new Tablesort(document.getElementById('table'));
})();
