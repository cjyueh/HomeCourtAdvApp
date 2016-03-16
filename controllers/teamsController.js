var Team = require('../models/team');
var Bar = require('../models/bar');

var teamsController = {
  indexTeams: function (req, res) {
    Team.find({}, function (err, teams){
      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));

      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));
      // console.log("Here are the teams:",teams);
      // if(user){ // check if user is logged in
      //   if(user.fb) { //check if user was logged in through facebook
      //     // res.render('index', {user: user.fb, userID: user._id});
      //     err ? console.log(err) : res.render('index', {user: user.fb, userID: user._id,teams: teams});
      //   }else if(user.google) {
      //     // res.render('index', {user: user.google});
      //   }
      // }else {
      //   err ? console.log(err) : res.render('index', {teams: teams});
      // }
        err ? console.log(err) : res.render('index', {user: req.user, teams: teams});
    });
  },
  //nav bar is dependent on this function in order to display teams depending on what user does
  showTeam: function(req,res) {
    var id = req.params.id;
    Team.findById({_id: id}, function(err, team){
      // console.log(team);
      // var teams = Team.find({});  //trying to get index of teams to show from navbar dropdown
      // console.log({teams: teams});
      console.log(team);
      err ? console.log(err) : res.render('teams/show', {user: req.user,team: team});
    });
  },
  teamApi: function(req, res) {
    var id = req.params.id;
    
    var barIdArray = [];

    Team.findById({_id: id}, function(err, team){
      if (err) {
        console.log(err);
      }
      else {
        for (var i = 0; i < team.bars.length; i++) {
          barIdArray.push(team.bars[i]); 
        }

        Bar.find({_id: {$in: barIdArray }}, function(err, bar) {
          res.json(bar)
        })
      }
    });
  },
  teamsNav: function(req,res) {
    Team.find({}, function(err, data){
      res.json(data);
    })
  }
};

module.exports = teamsController;
