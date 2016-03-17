function getBarInfo () {
  // get team id from url
  var pathname = window.location.pathname;
  var splitUrl = pathname.split('/');
  var teamId = splitUrl[2];

  // call team api to get bar info
  var teamEndpoint = "/teams/api/" + teamId;

  var teamObjArray = []

  // google stuff
  var infowindow = new google.maps.InfoWindow({
    maxWidth: 300
  });

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
      var address = teamObjArray[i].address;
      var pic = teamObjArray[i].pic;

      // render each bar as pin on map
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        animation: google.maps.Animation.DROP,
        map: map,
        // title: barName
      });

      function renderBarInfo (marker, name) {
        google.maps.event.addListener(marker, 'click', function(e) {
            infowindow.open(map, marker);
            infowindow.setContent("<div style='width:300px;height:90px;'>"+ name + '   ' + address + '   ' + pic + "</div>");
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
