let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.6936,
      lng: -89.5890
    },
    zoom: 13
  });
  map.data.loadGeoJson('http://0.0.0.0:9999/Pavement2017.json');
}
