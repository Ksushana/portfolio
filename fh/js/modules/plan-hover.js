'use strict';

(function () {

  var plan = document.querySelector('.plan');

  if (!plan) {
    return;
  }

  var planLink = document.querySelectorAll('.plan__description ul li a');
  var planSoldOut = document.querySelectorAll('.plan__description .sold-out-floor');
  var headers = document.querySelectorAll('.plan__description ul h2');

  var changeHoverOn = function () {
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
      header.classList.add('hovered');
    }
  };

  var changeHoverOff = function () {
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
      if (header.classList.contains('hovered')) {
        header.classList.remove('hovered');
      }
    }
  };

  for (var i = 0; i < planLink.length; i++) {
    var link = planLink[i];
    link.addEventListener('mouseenter', changeHoverOn);
    link.addEventListener('mouseleave', changeHoverOff);
  }

  for (var x = 0; x < planSoldOut.length; x++) {
    var sold = planSoldOut[x];
    sold.addEventListener('mouseenter', changeHoverOn);
    sold.addEventListener('mouseleave', changeHoverOff);
  }
})();
