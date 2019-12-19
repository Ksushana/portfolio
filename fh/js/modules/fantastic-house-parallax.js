'use strict';

(function () {

  if (window.isTablet()) {
    return;
  }

  var controller1 = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '.img-content--1',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.img-parallax-1', { y: '120%', ease: Linear.easeNone })
    .addTo(controller1);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.img-content--2',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.img-parallax-2', { y: '120%', ease: Linear.easeNone })
    .addTo(controller1);

  var scene = new ScrollMagic.Scene({
    triggerElement: '.img-content--3',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.img-parallax-3', { y: '120%', ease: Linear.easeNone })
    .addTo(controller1);
  var scene = new ScrollMagic.Scene({
    triggerElement: '.img-content--4',
    triggerHook: 'onLeave',
    duration: '200%'
  })
    .setTween('.img-parallax-4', { y: '120%', ease: Linear.easeNone })
    .addTo(controller1);
})();
