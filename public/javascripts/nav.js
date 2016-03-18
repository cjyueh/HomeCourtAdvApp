// make a req to our teams index pg

teamIndexEndPoint = '/teams/api';

$.get(teamIndexEndPoint, function(data) {
  // grab template element id
  var $teamsNav = $('#teams-nav');
  // create template for teams-nav
  var navTemplate = Handlebars.compile($("#teams-nav-template").html());
  // console.log(navTemplate);
  // pass the data to the template
  var compileTeamsList = navTemplate({teams: data});
  // send data to template
  // render(data)
  $('#teams-nav').append(compileTeamsList);
});