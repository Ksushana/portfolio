'use strict';

// карта без пинов POI

(function () {
  var officeRouteImage = document.getElementById('route');
  var mapContainer = document.getElementById('map');

  if (!mapContainer) {
    return;
  }

  var map;
  // eslint-disable-next-line no-unused-vars
  var overlaySVG;
  var styles = [
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'lightness': '-49'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#444444'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#f2f2f2'
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'poi.attraction',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'poi.attraction',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dedede'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'saturation': '0'
        },
        {
          'weight': '1'
        },
        {
          'color': '#dedede'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi.place_of_worship',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.sports_complex',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -100
        },
        {
          'lightness': 45
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'simplified'
        },
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text',
      'stylers': [
        {
          'color': '#8f8f8f'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#002fa7'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'saturation': '-29'
        },
        {
          'color': '#b6caee'
        },
        {
          'lightness': '18'
        }
      ]
    }
  ]
;

  function ZoomControl(controlDiv, map) {

    // Creating divs & styles for custom zoom control
    controlDiv.style.padding = '5px';
    controlDiv.style.left = '30px';
    controlDiv.style.bottom = '30px';

    // Set CSS for the control wrapper

    var controlWrapper = document.createElement('div');
    controlWrapper.style.backgroundColor = 'transparent';
    controlWrapper.style.borderStyle = 'none';
    controlWrapper.style.cursor = 'pointer';
    controlWrapper.style.textAlign = 'center';
    controlWrapper.style.width = window.isMobile() ? '38px' : '50px';
    controlWrapper.style.height = window.isMobile() ? '80px' : '106px';
    controlWrapper.style.display = 'flex';
    controlWrapper.style.flexDirection = 'column';
    controlWrapper.style.justifyContent = 'flex-between';
    controlDiv.appendChild(controlWrapper);

    // Set CSS for the zoomIn
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = window.isMobile() ? '38px' : '50px';
    zoomInButton.style.height = window.isMobile() ? '38px' : '50px';
    zoomInButton.style.backgroundColor = 'white';
    /* Change this to be the .png image you want to use */
    zoomInButton.style.backgroundImage = 'url("img/plus.png")';
    zoomInButton.style.backgroundRepeat = 'no-repeat';
    zoomInButton.style.backgroundPosition = 'center';
    zoomInButton.style.backgroundSize = window.isMobile() ? '50%' : '80%';
    controlWrapper.appendChild(zoomInButton);

    // Set CSS for the zoomOut
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = window.isMobile() ? '38px' : '50px';
    zoomOutButton.style.height = window.isMobile() ? '38px' : '50px';
    zoomOutButton.style.backgroundColor = 'white';
    /* Change this to be the .png image you want to use */
    zoomOutButton.style.backgroundImage = 'url("img/minus.png")';
    zoomOutButton.style.backgroundRepeat = 'no-repeat';
    zoomOutButton.style.backgroundPosition = 'center';
    zoomOutButton.style.backgroundSize = window.isMobile() ? '50%' : '80%';
    zoomOutButton.style.marginTop = 'auto';
    controlWrapper.appendChild(zoomOutButton);

    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomInButton, 'click', function () {
      map.setZoom(map.getZoom() + 1);
    });

    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomOutButton, 'click', function () {
      map.setZoom(map.getZoom() - 1);
    });

  }

  var initOverlay = function (svgBounds, image) {
    // eslint-disable-next-line no-undef
    SVGOverlay.prototype = new google.maps.OverlayView();
    function SVGOverlay(bounds, image) {
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;
      this.div_ = null;
      this.setMap(map);
    }

    SVGOverlay.prototype.onAdd = function () {
      var div = document.createElement('div');
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '0px';
      div.style.borderColor = 'red';
      div.style.position = 'absolute';

      // Load the inline svg element and attach it to the div.
      var svg = this.image_;
      svg.style.width = '100%';
      svg.style.height = '100%';

      div.appendChild(svg);
      this.div_ = div;

      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };

    SVGOverlay.prototype.draw = function () {
      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      var overlayProjection = this.getProjection();

      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

      // Resize the image's div to fit the indicated dimensions.
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };

    overlaySVG = new SVGOverlay(svgBounds, image);
  };

  var initMap = function () {
    var centerLat;
    if (window.isMobile()) {
      centerLat = 55.770222;
    } else {
      centerLat = mapContainer.dataset.centerLat ? parseFloat(mapContainer.dataset.centerLat) : 55.769411;
    }

    var centerLng;
    if (window.isMobile()) {
      centerLng = 37.568090;
    } else {
      centerLng = mapContainer.dataset.centerLng ? parseFloat(mapContainer.dataset.centerLng) : 37.571190;
    }

    var zoom = window.isMobile() ? 15.3 : 15.5;

    // eslint-disable-next-line no-undef
    map = new google.maps.Map(mapContainer, {
      center: {lat: centerLat, lng: centerLng},
      zoom: zoom,
      // eslint-disable-next-line no-undef
      bounds: new google.maps.LatLngBounds(bounds),
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      styles: styles
    });

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);

    // eslint-disable-next-line no-undef
    var bounds = new google.maps.LatLngBounds(new google.maps.LatLng(55.7693797, 37.5652332), new google.maps.LatLng(55.769565, 37.572565));

    // eslint-disable-next-line no-undef, no-unused-vars
    var icon;
    if (window.isIE()) {
      icon = 'img/pin-house.png';
    } else {
      icon = 'img/pin-house.svg';
    }

    var markerHouse = new window.google.maps.Marker({
      position: {lat: 55.769362, lng: 37.572695},
      map: map,
      icon: icon
    });

    // eslint-disable-next-line no-undef, no-unused-vars
    var markerOfficeIcon = {
      url: window.isIE() ? 'img/new-office-pin.png' : 'img/new-office-pin.svg',
      size: new google.maps.Size(124, 55),
      anchor: new window.google.maps.Point(62, 0)
    };

    var markerOffice = new window.google.maps.Marker({
      position: {lat: 55.769403, lng: 37.568003},
      map: map,
      icon: markerOfficeIcon
    });

    // eslint-disable-next-line no-undef
    var svgBounds = new google.maps.LatLngBounds(
        // eslint-disable-next-line no-undef
        new google.maps.LatLng(55.769107, 37.567991),
        // eslint-disable-next-line no-undef
        new google.maps.LatLng(55.769522, 37.572582)
    );

    initOverlay(svgBounds, officeRouteImage);
  };

  window.initMap = initMap;
})();

// карта с пинами POI

(function () {
  var buttons = document.querySelectorAll('.location .choice button');
  var locationImage1 = document.getElementById('zone1');
  var locationImage2 = document.getElementById('zone2');
  var locationImage3 = document.getElementById('zone3');

  var map;
  var styles = [
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'lightness': '-49'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#444444'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#f2f2f2'
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'poi.attraction',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'poi.attraction',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dedede'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'saturation': '0'
        },
        {
          'weight': '1'
        },
        {
          'color': '#dedede'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi.place_of_worship',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.sports_complex',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#dedede'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -100
        },
        {
          'lightness': 45
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'simplified'
        },
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text',
      'stylers': [
        {
          'color': '#8f8f8f'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#002fa7'
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'saturation': '-29'
        },
        {
          'color': '#b6caee'
        },
        {
          'lightness': '18'
        }
      ]
    }
  ]
;
  var markerImages = [
    'img/pin-square.svg',
    'img/pin-round.svg',
    'img/pin-triangle.svg',
    'img/pin-rectangle.svg',
  ];

  var markerImagesIE = [
    'img/pin-square.png',
    'img/pin-round.png',
    'img/pin-triangle.png',
    'img/pin-rectangle.png',
  ];

  var cultureMarkers = [];
  var currentInfoBubble;
  var infoBubbleOffice;
  var markerOffice;
  var markerInfoBubbles = {};

  function ZoomControl(controlDiv, map) {

    // Creating divs & styles for custom zoom control
    controlDiv.style.padding = '15px';
    controlDiv.style.left = '30px';
    controlDiv.style.bottom = '30px';

    // Set CSS for the control wrapper
    var controlWrapper = document.createElement('div');
    controlWrapper.style.backgroundColor = 'transparent';
    controlWrapper.style.borderStyle = 'none';
    controlWrapper.style.cursor = 'pointer';
    controlWrapper.style.textAlign = 'center';
    controlWrapper.style.width = '50px';
    controlWrapper.style.height = '106px';
    controlWrapper.style.display = 'flex';
    controlWrapper.style.flexDirection = 'column';
    controlWrapper.style.justifyContent = 'flex-between';
    controlDiv.appendChild(controlWrapper);

    // Set CSS for the zoomIn
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = '50px';
    zoomInButton.style.height = '50px';
    zoomInButton.style.backgroundColor = 'white';
    /* Change this to be the .png image you want to use */
    zoomInButton.style.backgroundImage = 'url("img/plus.png")';
    zoomInButton.style.backgroundRepeat = 'no-repeat';
    zoomInButton.style.backgroundPosition = 'center';
    zoomInButton.style.backgroundSize = window.isMobile() ? '50%' : '80%';
    controlWrapper.appendChild(zoomInButton);

    // Set CSS for the zoomOut
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = '50px';
    zoomOutButton.style.height = '50px';
    zoomOutButton.style.backgroundColor = 'white';
    /* Change this to be the .png image you want to use */
    zoomOutButton.style.backgroundImage = 'url("img/minus.png")';
    zoomOutButton.style.backgroundRepeat = 'no-repeat';
    zoomOutButton.style.backgroundPosition = 'center';
    zoomOutButton.style.backgroundSize = window.isMobile() ? '50%' : '80%';
    zoomOutButton.style.marginTop = 'auto';
    controlWrapper.appendChild(zoomOutButton);

    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomInButton, 'click', function () {
      map.setZoom(map.getZoom() + 1);
    });

    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomOutButton, 'click', function () {
      map.setZoom(map.getZoom() - 1);
    });

  }

  var initOverlay = function (svgBounds, image) {
    // eslint-disable-next-line no-undef
    SVGOverlay.prototype = new google.maps.OverlayView();
    function SVGOverlay(bounds, image) {
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;
      this.div_ = null;
      this.setMap(map);
    }

    SVGOverlay.prototype.onAdd = function () {
      var div = document.createElement('div');
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '0px';
      div.style.borderColor = 'red';
      div.style.position = 'absolute';

      // Load the inline svg element and attach it to the div.
      var svg = this.image_;
      svg.style.width = '100%';
      svg.style.height = '100%';

      div.appendChild(svg);
      this.div_ = div;

      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };

    SVGOverlay.prototype.draw = function () {
      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      var overlayProjection = this.getProjection();

      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

      // Resize the image's div to fit the indicated dimensions.
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };

    return new SVGOverlay(svgBounds, image);
  };

  var removeCultureMarkers = function () {
    for (var i = 0; i < cultureMarkers.length; i++) {
      var cultureMarker = cultureMarkers[i];
      cultureMarker.setMap(null);
      cultureMarker = null;
    }
    cultureMarkers.length = 0;
  };

  var getPoints = function (button) {
    return button.dataset.points ? JSON.parse(button.dataset.points) : [];
  };

  var handleButtonClick = function (evt) {
    evt.preventDefault();
    removeCultureMarkers();
    var button = evt.target;
    var points = getPoints(button);
    addCultureMarkers(points);
  };

  var addCultureMarkers = function (points) {
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      point.image = getRandomMarkerImage();
      var cultureMarker = addMarker(point);
      cultureMarkers.push(cultureMarker);
    }
  };

  var getRandomMarkerImage = function () {
    var i = Math.floor(Math.random() * markerImages.length);

    return window.isIE() ? markerImagesIE[i] : markerImages[i];
  };

  // eslint-disable-next-line no-undef

  var addMarker = function (properties) {
    // eslint-disable-next-line no-undef
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: map,
    });

    if (properties.image) {
      marker.setIcon(properties.image);
    }


    // eslint-disable-next-line no-undef
    var infoBubble = new InfoBubble({
      map: map,
      content: properties.content,
      // eslint-disable-next-line no-undef
      position: new google.maps.LatLng(properties.coordinates),
      shadowStyle: 0,
      padding: '0',
      backgroundColor: '#10069F',
      borderRadius: 0,
      arrowSize: 0,
      borderWidth: 0,
      disableAutoPan: false,
      hideCloseButton: true,
      backgroundClassName: 'transparent',
      width: 'fit-content',
      textAlign: 'center'
    });

    infoBubble.contentContainer_.style.lineHeight = '50px';
    infoBubble.contentContainer_.style.minHeight = '50px';
    infoBubble.contentContainer_.style.padding = '0 15px';

    var minWidth = window.isMobile() ? 60 : 80;

    infoBubble.setMinWidth(minWidth);

    markerInfoBubbles[infoBubble] = marker;

    marker.addListener('click', function () {
      if (infoBubble.isOpen()) {
        infoBubble.close(map, marker);
      } else {
        infoBubble.open(map, marker);
        if (currentInfoBubble) {
          currentInfoBubble.close(map, marker);
        }
        currentInfoBubble = infoBubble;
      }
      if (infoBubbleOffice && markerOffice) {
        infoBubbleOffice.close(map, markerOffice);
      }
    });

    map.addListener('click', function () {
      if (infoBubble.isOpen()) {
        infoBubble.close(map, marker);
      } else {
        return;
      }
    });

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.addEventListener('click', function () {
        if (infoBubble.isOpen()) {
          infoBubble.close(map, marker);
        } else {
          return;
        }
      });
    }

    return marker;
  };

  var zoom = window.isMobile() ? 14.2 : 14.8;

  var initLocationMap = function () {
    // eslint-disable-next-line no-undef
    map = new google.maps.Map(document.getElementById('mapBig'), {
      center: {lat: 55.769502, lng: 37.575971},
      zoom: zoom,
      styles: styles,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
    });

    // var transitLayer = new google.maps.TransitLayer();
    // transitLayer.setMap(map);

    // eslint-disable-next-line no-undef
    var markerHouse = new google.maps.Marker({
      position: {lat: 55.769308, lng: 37.572695},
      map: map,
      icon: window.isIE() ? 'img/pin-house.png' : 'img/pin-house.svg',
      content: 'Fantastic House'
    });

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);

    // var infoBubbleHouse = new InfoBubble({
    //   map: map,
    //   content: 'Fantastic House',
    //   // eslint-disable-next-line no-undef
    //   position: new google.maps.LatLng({lat: 55.7695054, lng: 37.57257244}),
    //   shadowStyle: 0,
    //   padding: '15px',
    //   backgroundColor: '#10069F',
    //   borderRadius: 0,
    //   arrowSize: 0,
    //   borderWidth: 0,
    //   disableAutoPan: false,
    //   hideCloseButton: true,
    //   backgroundClassName: 'transparent',
    // });

    // markerHouse.addListener('click', function () {
    //   if (infoBubbleHouse.isOpen()) {
    //     infoBubbleHouse.close(map, markerHouse);
    //   } else {
    //     infoBubbleHouse.open(map, markerHouse);
    //   }
    // });

    // eslint-disable-next-line no-undef
    markerOffice = new google.maps.Marker({
      position: {lat: 55.769403, lng: 37.568003},
      map: map,
      icon: window.isIE() ? 'img/pin-small.png' : 'img/pin-small.svg',
      content: 'Офис Продаж'
    });

    infoBubbleOffice = new window.InfoBubble({
      map: map,
      content: 'Офис Продаж',
      // eslint-disable-next-line no-undef
      position: new google.maps.LatLng({lat: 55.7693797, lng: 37.5652332}),
      padding: '0',
      shadowStyle: 0,
      backgroundColor: '#10069F',
      borderRadius: 0,
      arrowSize: 0,
      borderWidth: 0,
      disableAutoPan: false,
      hideCloseButton: true,
      backgroundClassName: 'transparent',
    });

    infoBubbleOffice.contentContainer_.style.lineHeight = '50px';
    infoBubbleOffice.contentContainer_.style.minHeight = '50px';
    infoBubbleOffice.contentContainer_.style.padding = '0 15px';

    infoBubbleOffice.setMinWidth(85);

    markerOffice.addListener('click', function () {
      if (infoBubbleOffice.isOpen()) {
        infoBubbleOffice.close(map, markerOffice);

      } else {
        infoBubbleOffice.open(map, markerOffice);
      }

      if (currentInfoBubble && markerInfoBubbles[currentInfoBubble]) {
        currentInfoBubble.close(map, markerInfoBubbles[currentInfoBubble]);
      }
    });

    map.addListener('click', function () {
      if (infoBubbleOffice.isOpen()) {
        infoBubbleOffice.close(map, markerOffice);
      } else {
        return;
      }
    });


    if (markerHouse) {
      addMarker(markerHouse);
    }

    if (markerOffice) {
      addMarker(markerOffice);
    }

    var points = getPoints(buttons[0]);
    addCultureMarkers(points);

    var svgBounds1 = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(55.761196, 37.563357),
        new window.google.maps.LatLng(55.773477, 37.586915)
    );

    var svgBounds2 = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(55.759645, 37.573961),
        new window.google.maps.LatLng(55.765650, 37.585430)
    );

    var svgBounds3 = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(55.757844, 37.587712),
        new window.google.maps.LatLng(55.769510, 37.605046)
    );

    initOverlay(svgBounds1, locationImage1);
    initOverlay(svgBounds2, locationImage2);
    initOverlay(svgBounds3, locationImage3);
  };

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', handleButtonClick);
  }

  window.initLocationMap = initLocationMap;

})();
