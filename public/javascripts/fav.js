// get fav btn
var $favBtn = $('#fav');

var pathname = window.location.pathname;
var splitUrl = pathname.split('/');
var teamId = splitUrl[2];

var favEndPoint = '/teams/api/' + teamId + '/user';

// $favBtn.on('click', function(e){
//   e.preventDefault();
//   // make ajax req onClick
//   $.post(favEndPoint, {favorite: teamId}, function(data){
    
//     // hits route, controller adds fav
//     // do anythign with data?
//     // change star color
//     console.log("this is the data: ", data);
//     $favBtn.addClass('btn btn-success')
//   })
// })

$favBtn.on('click', function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    // contentType: "application/json; charset=utf-8",
    url: favEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (msg) {
      // console.log("this is the data: ",);
      $favBtn.addClass('btn btn-success')
    },
    error: function (err){
        console.log("error: ", err);
    }
  });
});