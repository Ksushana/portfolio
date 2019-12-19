'use strict';

(function () {
  var MOBILE = 767;
  var TABLET = 1023;

  window.isMobile = function () {
    return window.matchMedia('(max-width: ' + MOBILE + 'px)').matches;
  };

  window.isTablet = function () {
    return window.matchMedia('(max-width: ' + TABLET + 'px)').matches;
  };

  window.isDesktop = function () {
    return window.matchMedia('(min-width: ' + (TABLET + 1) + 'px)').matches;
  };

  window.isMobileSafari = function () {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iP(ad|od|hone)/i);
    var webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i);
  };

  window.isIE = function () {
    var ua = window.navigator.userAgent;
    var oldIe = ua.indexOf('MSIE ');
    var ie11 = ua.indexOf('Trident/');

    if (oldIe > -1 || ie11 > -1) {
      return true;
    } else {
      return false;
    }
  };

  // https://stackoverflow.com/a/4819886
  window.isTouch = function () {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
      return window.matchMedia(query).matches;
    };

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) {
      return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  };
})();
