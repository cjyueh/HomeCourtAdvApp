// render a map

// later this will be through team
var barEndpoint = "/bars"

function getBarInfo () {
  $.getJSON(barEndpoint, function(data){
    bars = data;
    for (var key in data) {
      console.log(data[key][0].lat)
    }
     barLat = data.bars[0].lat;
     barLong = data.bars[0].long;
     // barCity = data.bar[0].city;
    new google.maps.Marker({
      position: new google.maps.LatLng(barLat, barLong),
      map: map,
      // title: title
    });
  })
}

function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 12
  });
}

getBarInfo();

createMap();