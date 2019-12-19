(function () {
  var body = document.querySelector('body');
  var modal = document.querySelector('.modal--js');
  var showModalClass = 'modal--show';
  var menuButtonClass = 'site-nav__button';
  var socialButtonClass = 'social__button';
  var socialButtonFooterClass = 'social__button--footer';
  var scrollButtonClass = 'scroll-up__button';
  var scrollButtonChoice = 'choice__scroll';
  var header = document.querySelector('.catalog-baikal h2');

  document.addEventListener('click', function (evt) {
    var target = evt.target;
    var parent = target.parentNode;
    if (parent) {
      if (target.classList.contains('callback__button')) {
        evt.preventDefault();
        modal.classList.add(showModalClass);
        body.style.overflow = 'hidden';
      }
      if (target.classList.contains('modal__close') || target.classList.contains(showModalClass)) {
        modal.classList.remove(showModalClass);
        body.style.overflow = '';
      }
      if (target.classList.contains(menuButtonClass) || parent.classList.contains(menuButtonClass) || parent.parentNode.classList.contains(menuButtonClass)) {
        document.querySelector('.social__container').classList.remove('social__container--open');
        document.querySelector('.footer__social-list').classList.remove('footer__social-list--open');
        var menuList = target.nextElementSibling;
        if (parent.classList.contains(menuButtonClass)) {
          menuList = parent.nextElementSibling;
        }
        if (parent.parentNode.classList.contains(menuButtonClass)) {
          menuList = parent.parentNode.nextElementSibling;
        }
        menuList.classList.toggle('site-nav__list--open');
      }

      if (target.classList.contains(socialButtonClass) || parent.classList.contains(socialButtonClass) || parent.parentNode.classList.contains(socialButtonClass)) {
        document.querySelector('.site-nav__list').classList.remove('site-nav__list--open');
        var menuList = target.nextElementSibling;
        if (parent.classList.contains(socialButtonClass)) {
          menuList = parent.nextElementSibling;
        }
        if (parent.parentNode.classList.contains(socialButtonClass)) {
          menuList = parent.parentNode.nextElementSibling;
        }
        menuList.classList.toggle('social__container--open');
      }

      if (target.classList.contains(socialButtonFooterClass) || parent.classList.contains(socialButtonFooterClass) || parent.parentNode.classList.contains(socialButtonFooterClass)) {
        document.querySelector('.footer__nav-list').classList.remove('site-nav__list--open');
        var menuList = target.nextElementSibling;
        if (parent.classList.contains(socialButtonFooterClass)) {
          menuList = parent.nextElementSibling;
        }
        if (parent.parentNode.classList.contains(socialButtonFooterClass)) {
          menuList = parent.parentNode.nextElementSibling;
        }
        menuList.classList.toggle('footer__social-list--open');
      }

      if (target.classList.contains(scrollButtonClass) || parent.classList.contains(scrollButtonClass) || parent.parentNode.classList.contains(scrollButtonClass)) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      if (target.classList.contains(scrollButtonChoice) || parent.classList.contains(scrollButtonChoice) || parent.parentNode.classList.contains(scrollButtonChoice)) {
        window.scrollTo({
          top: header.getBoundingClientRect().top + pageYOffset - 110,
          behavior: "smooth"
        });
      }
    }//
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && modal.classList.contains(showModalClass)) {
      modal.classList.remove(showModalClass);
    }
  });
})();
