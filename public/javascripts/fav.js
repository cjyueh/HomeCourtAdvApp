// get fav btn
var $favBtn = $('#fav');
var $emptyStar = $('#empty-star');
var $filledStar = $('#filled-star');



var pathname = window.location.pathname;
var splitUrl = pathname.split('/');
var teamId = splitUrl[2];

$favBtn.on('click', function(e){

var favEndPoint = '/teams/api/' + teamId + '/userFav';
  e.preventDefault();
  $.ajax({
    type: "PUT",
    url: favEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (data) {
      // $favBtn.addClass('btn btn-success');
      $emptyStar.removeClass('glyphicon-star-empty');
      $emptyStar.addClass('glyphicon-star');
      console.log(data._id)
      var userId = data._id
    },
    error: function (err){
        console.log("error: user not logged in", err);
    }
  });
});

$filledStar.on('click', function(e){
  var unFavEndPoint = '/teams/api/' + teamId + '/userUnfav'
  e.preventDefault();
  $.ajax({
    type: "PUT",
    url: unFavEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (data) {
      $filledStar.removeClass('glyphicon-star');
      $filledStar.addClass('glyphicon-star-empty');
      console.log(data._id);
      // var userId = data._id;
    },
      error: function (err){
        console.log("ERROR:", err);
    }
  });
});
