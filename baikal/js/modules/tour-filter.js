(function () {
  var filterForm = document.querySelector('.form-choice');

  if (filterForm) {
    var tabsList = filterForm.querySelector('.start__tabs-list');
    var startTabs = tabsList.querySelectorAll('.start__tabs-item');
    var filters = filterForm.querySelector('.form-choice__filters');
    var activeTabClass = 'start__tabs-item--active';

    var toggleTabs = function (target) {
      for (var i = 0; i < startTabs.length; i++) {
        if (startTabs[i].classList.contains(activeTabClass)) {
          startTabs[i].classList.remove(activeTabClass);
        }
      }
      var tabName = target.value;
      var activeTab = tabsList.querySelector('.start__tabs-item--' + tabName);
      activeTab.classList.add(activeTabClass);
    };

    if( window.innerWidth < 768 ){
      var checkboxes = document.querySelectorAll('.checkbox');
      var filterbutton = document.querySelector('.form-choice__button--filters');
      for(var i=0; i< checkboxes.length; i++){
        checkboxes[i].classList.remove('checkbox--open');

        if (checkboxes[i].nextElementSibling) {
          checkboxes[i].nextElementSibling.classList.remove('form-choice__button--open');
        }
      }

      filterbutton.classList.remove('form-choice__button--open');
      filters.classList.remove('form-choice__filters--show');
    }


    filterForm.addEventListener('click', function (evt) {
      var target = evt.target;
      var parent = target.parentNode;
      if (target.classList.contains('start__input--tab')) {
        toggleTabs(target);
      }

      if (target.classList.contains('checkbox__label') && target.tagName === 'A') {
        evt.preventDefault();
        target.classList.toggle('checked');
      }

      if (parent.parentNode.classList.contains('checkbox__label')) {
        evt.preventDefault();
        parent.parentNode.classList.toggle('checked');
      }
      if (target.classList.contains('form-choice__button') || parent.classList.contains('form-choice__button')) {
        if (parent.classList.contains('form-choice__button')) {
          target = parent;
        }
        if (!target.classList.contains('form-choice__button--filters')) {
          var list = target.parentNode.querySelector('.checkbox');
          if (list) {
            list.classList.toggle('checkbox--open');
           }
        } else {
          filters.classList.toggle('form-choice__filters--show');
        }
        target.classList.toggle('form-choice__button--open');
      }
    });
  }
})();
