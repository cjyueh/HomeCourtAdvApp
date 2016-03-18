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
    // contentType: "application/json; charset=utf-8",
    url: favEndPoint,
    data: {favorite: teamId},
    dataType: "json",
    success: function (data) {
      // console.log("this is the data: ",);
      // $favBtn.addClass('btn btn-success');
      $star.removeClass('glyphicon-star-empty');
      $star.addClass('glyphicon-star');
      console.log(data._id)
      var userId = data._id

      // console.log(data)
    },
    error: function (err){
        console.log("error: ", err);
    }
  });
});

