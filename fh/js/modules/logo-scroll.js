(function () {
  var logo = document.querySelector('.header__logoscroll');

  if (!logo) {
    return;
  }

  window.addEventListener('scroll', function () {
    var windowScroll = window.scrollY;

    if (windowScroll > 20) {
      logo.classList.add('header__logoscroll--hide');
      logo.classList.remove('header__logoscroll--show');
    } else {
      logo.classList.remove('header__logoscroll--hide');
      logo.classList.add('header__logoscroll--show');
    }
  });
})();
