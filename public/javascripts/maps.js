function getBarInfo () {
  // get team id from url
  var pathname = window.location.pathname;
  var splitUrl = pathname.split('/');
  var teamId = splitUrl[2];

  // call team api to get bar info
  var teamEndpoint = "/teams/api/" + teamId;

  var teamObjArray = []

  // google stuff
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  // var teamObjArray = [];

  $.getJSON(teamEndpoint, function(data){
    var teams = data
    for (var team in data ){
        teamObjArray.push(data[team]);
    }
      // push bar data from db to array to iterate thru and append each marker
    for (var i=0; i < teamObjArray.length; i++) {
      // parse bar obj in array and get details
      var name = teamObjArray[i].name;
      var lat = teamObjArray[i].lat;
      var long = teamObjArray[i].long;

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

  }) //end ajax 
}

function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 12
  });
}

getBarInfo();

createMap();


