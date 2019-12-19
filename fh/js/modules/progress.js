'use strict';

(function () {
  var progresssContainer = document.querySelector('.progress__tabs-years');
  if (!progresssContainer) {
    return;
  }

  var progressTabYears = document.querySelectorAll('.progress__tab-year');

  var initYearTab = function (progressTabYear) {
    var buttons = progressTabYear.querySelectorAll('.choice-progress button');
    var tabsItems = progressTabYear.querySelectorAll('.progress-tab');

    var setButtonIds = function (array) {
      for (var i = 0; i < array.length; i++) {
        var element = array[i];
        element.dataset.id = i;
      }
    };

    var showTabContent = function (tabItem) {
      tabItem.classList.add('is-active');
    };

    var hideTabContent = function (tabItem) {
      tabItem.classList.remove('is-active');
    };

    var handleTabClick = function (evt) {
      evt.preventDefault();
      var button = evt.currentTarget;
      switchTab(button);
    };

    var switchTab = function (button) {
      unselectActiveButton(buttons);
      var targetDataIndex = parseInt(button.dataset.id, 10);
      selectTabsContent(targetDataIndex);
      button.classList.add('switch-button--active');
    };

    var selectTabsContent = function (index) {
      for (var j = 0; j < tabsItems.length; j++) {
        var tabItem = tabsItems[j];
        hideTabContent(tabItem);
        if (j === index) {
          showTabContent(tabItem);
        }
      }
    };

    var unselectActiveButton = function (array) {
      for (var index = 0; index < array.length; index++) {
        var elem = array[index];
        elem.classList.remove('switch-button--active');
      }
    };

    setButtonIds(buttons);
    for (var i = 0; i < buttons.length; i++) {
      var element = buttons[i];
      element.addEventListener('click', handleTabClick);
    }
  };

  for (var i = 0; i < progressTabYears.length; i++) {
    var progressTabYear = progressTabYears[i];
    initYearTab(progressTabYear);
  }


  // var deactivateFutureButtons = function () {
  //   var yearButtonSlides = document.querySelectorAll('.year-choice .swiper-slide');
  //   var yearTabs = document.querySelectorAll('.progress__tab-year');

  //   var disableYearButton = function (yearButtonSlide) {
  //     var button = yearButtonSlide.querySelector('button');
  //     button.classList.add('visually-hidden');
  //     var span = yearButtonSlide.querySelector('span');
  //     span.classList.remove('visually-hidden');
  //   };

  //   var disableMonthButton = function (monthSlide) {
  //     var button = monthSlide.querySelector('button');
  //     button.classList.add('visually-hidden');
  //     button.style.display = 'none';
  //     var p = monthSlide.querySelector('p');
  //     p.classList.remove('visually-hidden');
  //   };

  //   var getIsYearAvailable = function (year) {
  //     return new Date().getFullYear() >= year;
  //   };

  //   var isMonthAvailable = function (year, month) {
  //     var now = new Date(new Date().getFullYear(), new Date().getMonth()).valueOf();
  //     var compare = new Date(year, month).valueOf();
  //     return now >= compare;
  //   };

  //   var getElementYear = function (yearTab) {
  //     return parseInt(yearTab.dataset.year, 10);
  //   };

  //   var getElementMonth = function (yearTab) {
  //     return parseInt(yearTab.dataset.month, 10);
  //   };

  //   for (var i = 0; i < yearButtonSlides.length; i++) {
  //     var yearButtonSlide = yearButtonSlides[i];
  //     var buttonYear = getElementYear(yearButtonSlide);
  //     var yearTab = yearTabs[i];
  //     var tabYear = getElementYear(yearTab);
  //     var monthButtonSlides = yearTab.querySelectorAll('.swiper-slide-month');

  //     for (var j = 0; j < monthButtonSlides.length; j++) {
  //       var monthButtonSlide = monthButtonSlides[j];
  //       var buttonMonth = getElementMonth(monthButtonSlide);

  //       if (!isMonthAvailable(tabYear, buttonMonth)) {
  //         disableMonthButton(monthButtonSlide);
  //       }
  //     }

  //     if (!getIsYearAvailable(buttonYear)) {
  //       disableYearButton(yearButtonSlide);
  //     }
  //   }
  // };

  // deactivateFutureButtons();
})();
