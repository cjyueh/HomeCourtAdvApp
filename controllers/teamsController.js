var Team = require('../models/Team');

var teamsController = {
  index: function (req, res) {
    Team.find({}, function (err, teams){
      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));
      err ? console.log(err) : res.render('index', {teams: teams});
    })
  }

}

module.exports = teamsController;