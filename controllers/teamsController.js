var Team = require('../models/Team');

var teamsController = {
  index: function (req, res) {
    Team.find({}, function (err, teams){
      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));
      err ? console.log(err) : res.render('index', {teams: teams});
    });
  },
  showTeam: function(req,res) {
    var id = req.params.id;
    Team.findById({_id: id}, function(err, team){
      err ? console.log(err) : res.render('teams/show', {team});
    });
  }
};

module.exports = teamsController;
