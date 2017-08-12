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
  let urls = [
      'http://127.0.0.1:8000/static/maps/ArterialRecon.geojson',
      'http://127.0.0.1:8000/static/maps/Pavement2017.geojson',
      'http://127.0.0.1:8000/static/maps/ResidentialRecon.geojson',
      'http://127.0.0.1:8000/static/maps/SidewalkConstruction.geojson'
  ];

  for (url of urls) {
    map.data.loadGeoJson(url);
    let color = 'blue';
    map.data.setStyle(
      {
        fillColor: color,
        strokeColor: color,
        strokeWeight: 2.5
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
