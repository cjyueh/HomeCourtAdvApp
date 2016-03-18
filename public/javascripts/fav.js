// get fav btn
var $favBtn = $('#fav');
var $star = $('#star');

$favBtn.on('click', function(e){

var pathname = window.location.pathname;
var splitUrl = pathname.split('/');
var teamId = splitUrl[2];

var favEndPoint = '/teams/api/' + teamId + '/user';
  e.preventDefault();
  $.ajax({
    type: "PUT",
    url: favEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (data) {
      // $favBtn.addClass('btn btn-success');
      $star.removeClass('glyphicon-star-empty');
      $star.addClass('glyphicon-star');
      console.log(data._id)
      var userId = data._id
    },
    error: function (err){
        console.log("error: user not logged in", err);
    }
  });
});

