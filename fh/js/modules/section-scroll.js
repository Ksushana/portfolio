'use strict';

(function () {
  var surraundings = document.querySelector('.surraundings');
  if (surraundings) {
    var tabsContainer = document.querySelector('.choice-container');
    var tabs = tabsContainer.querySelectorAll('button');
    var container = document.querySelector('html');

    for (var index = 0; index < tabs.length; index++) {
      var element = tabs[index];
      element.addEventListener('click', function () {
        container.scrollIntoView();
      });
    }
  }
})();
