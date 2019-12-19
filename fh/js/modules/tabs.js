'use strict';

(function () {
  var buttonsContainer = document.querySelector('.choice');
  if (!buttonsContainer) {
    return;
  }
  var buttonSoldOut = buttonsContainer.querySelector('button.soldout');

  if (buttonSoldOut) {
    return;
  }

  var buttons = buttonsContainer.querySelectorAll('button');
  var tabsItems = document.querySelectorAll('.tab');

  var setDataItems = function (array) {
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      element.dataset.id = i;
    }
  };

  var selectTabsContent = function (index) {
    for (var j = 0; j < tabsItems.length; j++) {
      tabsItems[j].classList.remove('is-active');
      if (j === index) {
        tabsItems[j].classList.add('is-active');
      }
    }
  };

  var selectTab = function (index) {
    resetActiveButton();
    selectTabsContent(index);
    var button = buttons[index];
    button.classList.add('switch-button-active');
  };

  var handleButtonClick = function (e) {
    e.preventDefault();
    var target = e.currentTarget;
    var targetDataIndex = parseInt(target.dataset.id, 10);
    selectTab(targetDataIndex);
  };

  var addEventListenersToButtons = function () {
    for (var i = 0; i < buttons.length; i++) {
      var element = buttons[i];
      element.addEventListener('click', handleButtonClick);
    }
  };

  var resetActiveButton = function () {
    for (var index = 0; index < buttons.length; index++) {
      var elem = buttons[index];
      elem.classList.remove('switch-button-active');
    }
  };

  var getParameterByName = function (name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  var preselectActiveTab = function () {
    var initTabParam = getParameterByName('tab');
    if (initTabParam) {
      var initTabIndex = parseInt(initTabParam, 10) - 1;
      selectTab(initTabIndex);
    }
  };

  setDataItems(buttons);
  addEventListenersToButtons();
  preselectActiveTab();
})();
