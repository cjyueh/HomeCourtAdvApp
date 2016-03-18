// get fav btn
var $favBtn = $('#fav');
var $star = $('#star');

var pathname = window.location.pathname;
var splitUrl = pathname.split('/');
var teamId = splitUrl[2];

var favEndPoint = '/teams/api/' + teamId + '/user';

$favBtn.on('click', function(e){
  e.preventDefault();
  $.ajax({
    type: "PUT",
    // contentType: "application/json; charset=utf-8",
    url: favEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (msg) {
      // console.log("this is the data: ",);
      // $favBtn.addClass('btn btn-success');
      $star.removeClass('glyphicon-star-empty');
      $star.addClass('glyphicon-star');
    },
    error: function (err){
        console.log("error: ", err);
    }
  });
});