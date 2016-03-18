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
    console.log("this is the user: ", req.user);

    Team.findById({_id: id}, function(err, team){
      err ? console.log(err) : res.render('teams/show', {user: req.user,team: team});
    });
  },
  teamApi: function(req, res) {
    var id = req.params.id;
    
    var barIdArray = [];

    Team.findById({_id: id}, function(err, team){
      if (err) { console.log(err) }
      else {
        for (var i = 0; i < team.bars.length; i++) {
          barIdArray.push(team.bars[i]); 
        }

        Bar.find({_id: {$in: barIdArray }}, function(err, bar) {
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
      // res.send(user);
      console.log(user);
      if (user.favorites.indexOf(teamId) === -1 ) {
        user.favorites.push(teamId);
      }

      user.save(function(err, user){
        console.log(user);
        // is ajax expecting to get somethign back?
        res.send(user);
        // res.redirect('/users/' + userId);
      });
      // user.update({_id: userId}, {$push: {favorites: teamId} }, function(err, user){
      //   console.log(user);
      //   res.send(user);
      // })

    });
  }
};

module.exports = teamsController;
