(function () {
  var offer = document.querySelector('.offer');

  if (offer) {
    var offerList = offer.querySelector('.offer__list');
    var offerMore = offer.querySelector('.offer__button');
    var template = document.querySelector('#offer-template');
    var offerTemplate = template.content.querySelector('.offer__item');
    var offerAddress = '#';
    var offerImage = 'offer1';
    var offerCaption = 'Майские праздники';

    var cloneOfferTemplate = function () {
      var offerItem = offerTemplate .cloneNode(true);
      var link = offerItem.querySelector('a');
      var img = offerItem.querySelector('img');
      var caption = offerItem.querySelector('h3');
      link.href = offerAddress;
      img.src = 'img/' + offerImage + '.jpg';
      caption.textContent = offerCaption;
      return offerItem;
    };

    var showMoreOffer = function (itemsCount) {
      for (var i = 0; i < itemsCount; i++) {
        offerList.appendChild(cloneOfferTemplate());
      }
    };

    offerMore.addEventListener('click', function () {
      showMoreOffer(9);
      offerMore.classList.add('visually-hidden');
    })
  }
})();
