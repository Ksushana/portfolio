'use strict';

(function () {

  if (window.isTablet()) {
    return;
  }

  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
    .fromTo('.scroll-block--3', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--4', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation1 = new TimelineMax()

    .fromTo('.scroll-block--7', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--8', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation2 = new TimelineMax()

    .fromTo('.scroll-block--11', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--12', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation3 = new TimelineMax()

    .fromTo('.scroll-block--15', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--16', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation4 = new TimelineMax()

    .fromTo('.scroll-block--19', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--20', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--21', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--22', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--23', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--24', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })

  var wipeAnimation5 = new TimelineMax()

    .fromTo('.scroll-block--27', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--28', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--29', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--30', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation6 = new TimelineMax()

    .fromTo('.scroll-block--33', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--34', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var wipeAnimation7 = new TimelineMax()

    .fromTo('.scroll-block--37', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone })
    .fromTo('.scroll-block--38', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container')
    .setTween(wipeAnimation)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--1',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container--1')
    .setTween(wipeAnimation1)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--2',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container--2')
    .setTween(wipeAnimation2)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--3',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container--3')
    .setTween(wipeAnimation3)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--4',
    triggerHook: 'onLeave',
    duration: '600%'
  })
    .setPin('.surraundings-list__scroll-container--4')
    .setTween(wipeAnimation4)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--5',
    triggerHook: 'onLeave',
    duration: '600%'
  })
    .setPin('.surraundings-list__scroll-container--5')
    .setTween(wipeAnimation5)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--6',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container--6')
    .setTween(wipeAnimation6)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.surraundings-list__scroll-container--7',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setPin('.surraundings-list__scroll-container--7')
    .setTween(wipeAnimation7)
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--1',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--1', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--2',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--2', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--3',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--3', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--4',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--4', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--5',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--5', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--6',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--6', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--7',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--7', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--8',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--8', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--9',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--9', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--10',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--10', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.paralax-section--11',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.paralax-section-content--11', { y: '120%', ease: Linear.easeNone })
    .addTo(controller);
})();
