// render a map
function getBarInfo () {
  // google stuff
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  // later this will need to be through teams
  var barEndpoint = "/bars"

  var markerObjArray = [];

  $.getJSON(barEndpoint, function(data){
    bars = data;
    // get all objects in bar db
    for (var bar in data) {
      // get each bar lat/long
      for (i=0; i < data[bar].length; i++) {
      markerObjArray.push(data[bar][i]);
      }
      // prob wont need this shit:
      /*
        barLat = data[bar][i].lat;
        barCity = data.bar[0].city;
        var barName = data[bar][i].name;
        // __________________
      */

      // push bar data from db to array to iterate thru and append each marker
      for (var i=0; i < markerObjArray.length; i++) {
        // parse bar obj in array and get details
        var name = markerObjArray[i].name;
        var lat = markerObjArray[i].lat;
        var long = markerObjArray[i].long;

        // render each bar as pin on map
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, long),
          map: map,
          // title: barName
        });

        function renderBarInfo (marker, name) {
          google.maps.event.addListener(marker, 'click', function(e) {
              infowindow.setContent(name);
              infowindow.open(map, marker);
          });
        } 
        renderBarInfo(marker, name);
      }

    }
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


