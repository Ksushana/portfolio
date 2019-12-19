(function () {
  function toggleCollapsed(item) {
    var button = item.querySelector('.important__list-button');
    if (item.classList.contains('important__list-item--unfolded')) {
      item.classList.remove('important__list-item--unfolded');
      button.innerHTML = '+';
    } else {
      item.classList.add('important__list-item--unfolded');
      button.innerHTML = '-';
    }
  }

  function handleClick(evt) {
    var header = evt.target.classList.contains('important__list-header') ?
      evt.target :
      evt.target.parentElement;
    var item = header.parentElement;
    toggleCollapsed(item);
  }

  var importantItems = document.querySelectorAll('.important__list-item');
  for (var i = 0; i < importantItems.length; i++) {
    var importantItem = importantItems[i];
    var header = importantItem.querySelector('.important__list-header');
    header.addEventListener('click', handleClick);
  }
})();
