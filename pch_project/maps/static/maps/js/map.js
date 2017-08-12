var map;

function initMap(mapObject) {
  map = new google.maps.Map(mapObject.mapDiv, {
    center: {
      lat: 40.6936,
      lng: -89.5890
    },
    zoom: 13
  });

  loadData();
}

function loadData() {
  let data = [{
      'url': 'http://127.0.0.1:8000/static/maps/ArterialRecon.geojson',
      'color': 'blue'
    },
    {
      'url': 'http://127.0.0.1:8000/static/maps/Pavement2017.geojson',
      'color': 'red'
    },
    /* {
      'url': 'http://127.0.0.1:8000/static/maps/RampConstruction.geojson',
      'color': 'green'
    }, */
    {
      'url': 'http://127.0.0.1:8000/static/maps/ResidentialRecon.geojson',
      'color': 'purple'
    },
    {
      'url': 'http://127.0.0.1:8000/static/maps/SidewalkConstruction.geojson',
      'color': 'orange'
    }
  ];

  for (elem of data) {
    map.data.loadGeoJson(elem['url']);
    let color = 'blue';
    map.data.setStyle(
      {
        fillColor: color,
        strokeColor: color,
        strokeWeight: 2
      }
    );
  }
}

function addKml(kmlPath) {
  let ctaLayer = new google.maps.KmlLayer({
    'url': kmlPath,
    'map': map
  });

  console.log(ctaLayer.getUrl());
}
