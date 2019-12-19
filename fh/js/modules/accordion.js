'use strict';

(function () {
  var accoBtn = document.querySelectorAll('.acco-btn');
  if (accoBtn.length === 0) {
    return;
  }

  var findContent = function (element) {
    var parent = element.parentNode;
    var content = parent.querySelector('.acco-content');
    var accoCloseBtn = parent.querySelector('.acco-close-btn');
    var openBtn = parent.querySelector('.acco-btn');

    return parentObj = {
      parent: parent,
      content: content,
      close: accoCloseBtn,
      open: openBtn
    };
  };

  var hideContent = function (e) {
    e.preventDefault();
    var target = e.currentTarget;
    var openBtn = findContent(target).open;
    var content = findContent(target).content;
    content.classList.remove('acco-content--show');
    openBtn.style.display = 'block';
    target.style.display = 'none';
  };

  for (var index = 0; index < accoBtn.length; index++) {
    var element = accoBtn[index];
    element.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.currentTarget;
      var currentContent = findContent(target).content;
      var closeBtn = findContent(target).close;
      currentContent.classList.add('acco-content--show');
      target.style.display = 'none';
      closeBtn.style.display = 'block';
      closeBtn.addEventListener('click', hideContent);
    });
  }
})();
