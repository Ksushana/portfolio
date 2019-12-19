'use strict';

(function () {
  var ESC = 27;

  var header = document.querySelector('.header');
  window.getScrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  if (header) {

    var menu = document.querySelector('.header__menu');
    var openButton = document.querySelector('.header__menu-open');
    var closeButton = document.querySelector('.header__menu-close');

    var openMenu = function () {
      menu.classList.add('header__menu--show');
      window.bodyScrollLock.disableBodyScroll(menu);
    };

    var closeMenu = function () {
      menu.classList.remove('header__menu--show');
      window.bodyScrollLock.enableBodyScroll(menu);
    };

    openButton.addEventListener('click', function () {
      window.setTimeout(openMenu, 50);
    });

    closeButton.addEventListener('click', function () {
      window.setTimeout(closeMenu, 50);
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC) {
        if (menu.classList.contains('header__menu--show')) {
          evt.preventDefault();
          closeMenu();

        }
      }
    });

    var mainMenu = document.querySelector('.header__menu--main');

    if (mainMenu) {

      var changeHoverOn = function () {
        mainMenu.classList.add('hovered');
        mainMenu.classList.remove('hide-hover');
      };

      var changeHoverOff = function () {
        mainMenu.classList.remove('hovered');
        mainMenu.classList.add('hide-hover');
      };

      var menuItems = mainMenu.querySelectorAll('li');

      for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        menuItem.addEventListener('mouseenter', changeHoverOn);
        menuItem.addEventListener('mouseleave', changeHoverOff);
      }
    }
  }
})();

