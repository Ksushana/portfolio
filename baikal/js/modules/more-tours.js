(function () {
  var catalogBaikal = document.querySelector('.catalog-baikal');

  var addClickListener = function (it) {
    var btnMore = it.querySelector('.organization__button');
    var win = it.querySelector('.window-dates');
    var btnClose = it.querySelector('.window-dates__button');
    var listDates = it.querySelector('.organization__list-dates');
    var orgButton = it.querySelector('.organization__button');
    var onClickButtonDates = function() {
      win.classList.remove('visually-hidden');
      win.classList.add('organization__window-dates--show');

      listDates.classList.add('organization__list-dates--hidden-mobile');
      orgButton.classList.add('organization__button--hidden-mobile');

      var onClickButtonClose = function() {
        win.classList.add('visually-hidden');
        win.classList.remove('organization__window-dates--show');
        listDates.classList.remove('organization__list-dates--hidden-mobile');
        orgButton.classList.remove('organization__button--hidden-mobile');
        btnClose.removeEventListener('click', onClickButtonClose);
      }
      btnClose.addEventListener('click', onClickButtonClose);
    };
    btnMore.addEventListener('click', onClickButtonDates);
  }

  var addClickTagsListener = function (it) {
    var btnMore = it.querySelector('.taglist-kind__button');
    var taglist = it.querySelector('.taglist-kind');

    var onClickButtonMore = function() {
      var tags = taglist.querySelectorAll('.taglist-kind__item');
      var k=0;
      for(var i=0; i < tags.length; i++){
        if (tags[i].classList.contains('visually-hidden') && k< 3) {
          tags[i].classList.remove('visually-hidden');
          k++;
        };
      }
    };
    btnMore.addEventListener('click', onClickButtonMore);
  }

  if (catalogBaikal) {
    var catalogList = catalogBaikal.querySelector('.tours-list');
    var catalogMore = catalogBaikal.querySelector('.catalog-baikal__button');
    var template = document.querySelector('#catalog-template');
    var catalogTemplate = template.content.querySelector('.tours-list__item');
    var catalogAddress = '#';
    var catalogImage = 'choice-list';
    var catalogCaption = 'Байкальское приключение';
    var catalogCostNew = '44 000';
    var catalogCostOld = '77 000';
    var catalogCostValidity = '05.06.2019';
    var catalogDescription = 'Восхождение на Хамар-Дабан, путешествие на самый северный мыс острова Ольхон, посещение пещер';
    var catalogDays = '8';
    var catalogNights = '7';
    var catalogSeason = 'Лето';
    var catalogTagsP = ['Иркутск', 'Листвянка', 'КБЖД', 'КБЖД'];
    var catalogTagsK = ['Велосипедный тур', 'Отдых с детьми', 'Походы в горы', 'Каяки', 'Отдых с детьми', 'Велосипедный тур'];
    var catalogDates = ['1 мая - 10 мая', '9 мая - 18 мая', '1 мая - 10 мая', '9 мая - 18 мая', '1 мая - 10 мая', '9 мая - 18 мая', '1 мая - 10 мая', '9 мая - 18 мая'];

    var cloneCatalogTemplate = function () {
      var catalogItem = catalogTemplate .cloneNode(true);
      var link = catalogItem.querySelectorAll('a');
      var img = catalogItem.querySelector('img');
      var caption = catalogItem.querySelector('h3');
      var costOld = catalogItem.querySelector('.organization__cost-old');
      var costNew = catalogItem.querySelector('.organization__cost-new');
      var costValidity = catalogItem.querySelector('.organization__cost-validity time');
      var description = catalogItem.querySelector('.tours-list__description p');
      var days = catalogItem.querySelector('.organization__days');
      var nights = catalogItem.querySelector('.organization__nights');
      var season = catalogItem.querySelector('.organization__season');
      var tagsPieces = catalogItem.querySelector('.taglist-pieces');
      var tagsKind = catalogItem.querySelector('.taglist-kind');
      var tagsP = '';
      var tagsK = '';
      var dates = catalogItem.querySelector('.organization__window-dates');
      var datesSmall = catalogItem.querySelector('.organization__list-dates');
      var datesWin = '';
      var datesS = '';

      if (catalogDates.length > 12) dates.classList.add('window-dates--large');

      for (var i=0; i< link.length; i++) {
        link[i].href = catalogAddress;
      }
      for (var i=0; i < catalogTagsP.length; i++) {
        tagsP += '<li class="taglist-pieces__item"><a class="taglist-pieces__tag" href="#">' +
        catalogTagsP[i] + '</a></li>';
      }
      var n = 0;
      for (var i=0; i < catalogTagsK.length; i++) {
        if (n < 4) {
          tagsK += '<div class="taglist-kind__item"><a class="taglist-kind__tag" href="#">' +
            catalogTagsK[i] + '</a></div>';
          n++;
        } else {
          tagsK += '<div class="taglist-kind__item visually-hidden"><a class="taglist-kind__tag" href="#">' +
            catalogTagsK[i] + '</a></div>';
        }
      }
      tagsK += '<div class="taglist-kind__item"><button class="taglist-kind__button" type="button">Еще 3<svg width="15" height="15"><use xlink:href="#icon-arrow-point"></use></svg></button></div>';
      datesWin = '<button class="window-dates__button" type="button"><span class="visually-hidden">Закрыть окно</span></button><ul class="window-dates__list-dates">';
      for (var i=0; i < catalogDates.length; i++) {
          datesWin += '<li><p>' + catalogDates[i] + '</p></li>';
      }
      datesWin += '</ul>';


      for (var i=0; (i < catalogDates.length) && (i< 3); i++) {
          datesS += '<li><p>' + catalogDates[i] + '</p></li>';
      }

      img.src = 'img/' + catalogImage + '.jpg';
      caption.textContent = catalogCaption;
      costOld.textContent = 'от ' + catalogCostOld + ' р.';
      costNew.textContent = 'от ' + catalogCostNew + ' р.';
      costValidity.textContent = catalogCostValidity;
      costValidity.datetime = catalogCostValidity.slice(6) + "-" + catalogCostValidity.slice(3, 5) + "-" + catalogCostValidity.slice(0, 2)
      description.textContent = catalogDescription;
      nights.textContent = catalogNights + ' ночей';
      days.textContent = catalogDays + ' дней';
      season.innerHTML = '<span>Сезон: </span>' + catalogSeason;
      tagsPieces.innerHTML = tagsP;
      tagsKind.innerHTML = tagsK;
      dates.innerHTML = datesWin;
      datesSmall.innerHTML = datesS;

      addClickListener(catalogItem);
      addClickTagsListener(catalogItem);
      return catalogItem;
    };

    var showMoreCatalog = function (itemsCount) {
      for (var i = 0; i < itemsCount; i++) {
        catalogList.appendChild(cloneCatalogTemplate());
      }
    };

    catalogMore.addEventListener('click', function () {
      showMoreCatalog(3);
    })
  }
})();
