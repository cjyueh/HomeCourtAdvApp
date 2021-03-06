var Team = require('../models/team');
var Bar = require('../models/bar');
var User = require('../models/user');

var teamsController = {
  indexTeams: function (req, res) {
    Team.find({}, function (err, teams){
        err ? console.log(err) : res.render('index', {user: req.user, teams: teams});
    });
  },
  //nav bar is dependent on this function in order to display teams depending on what user does
  showTeam: function(req,res) {
    var id = req.params.id;
    // req.session.userId
    Team.findById({_id: id}, function(err, team){
      console.log("here is the user:", req.user);
      console.log("TEAM here:", team);
      // if user is logged in
      if(req.user) {
        // check if team has already been favd
        if(req.user.favorites.indexOf(team._id) !== -1){
          // if true, render full star on view
          var isFavorited = true;
        }
      }
      console.log("favorited?", isFavorited);
      err ? console.log(err) : res.render('teams/show', {user: req.user,team: team, isFavorited: isFavorited});
    });
  },
  teamApi: function(req, res) {
    var id = req.params.id;
    
    var barIdArray = [];
    // find bars referenced in team
    Team.findById({_id: id}, function(err, team){
      if (err) { console.log(err) }
      else {
        // get bar ids 
        for (var i = 0; i < team.bars.length; i++) {
          barIdArray.push(team.bars[i]); 
        }
        // search each bar id at same time in db to get full bar info
        Bar.find({_id: {$in: barIdArray }}, function(err, bar) {
          // send bar details to ajax to render
          res.json(bar);
        });
      }
    });
  },
  teamsNav: function(req,res) {
    Team.find({}, function(err, data){
      res.json(data);
    });
  },
  userFav: function(req, res) {
    // get team id from url 
    var teamId = req.body.favorite;
    console.log("this is the teamid: ", teamId);
    // get user id from session
    var userId = req.user._id;
    // find user in db
    // update user favs with team id
    User.findById({_id: userId}, function(err,user){
      // dont save duplicate teams to favs
      if (user.favorites.indexOf(teamId) === -1 ) {
        // push team id to user.fav
        user.favorites.push(teamId);
      }

      user.save(function(err, user){
        res.send(user);
      });

    });
  },
  userUnfav: function(req, res) {
    var teamId = req.body.favorite;
    var userId = req.user._id;
    // find user by id
    User.findById({_id: userId}, function(err,user){
        console.log("this is the user.fav", user.favorites)
        // get array of user team favs
        var favsArray = user.favorites;
        // find index in arr of the team to unfav
        var index = favsArray.indexOf(teamId);
        // if its in array, remove it
        if (index > -1) {
          favsArray.splice(index, 1)
        }
        // save changes
        user.save(function(err, user){
        res.send(user);
      });
    });
  }
};

module.exports = teamsController;
