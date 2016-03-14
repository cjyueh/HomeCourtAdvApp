var Bar = require('../models/bar');

var barsController = {
  index: function (req, res) {
    Bar.find({}, function (err, bars){
      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));
      err ? console.log(err) : res.json({bars});
    })
  },
  showBar: function (req, res) {
    var id = req.params.id
    Bar.find({_id: id}, function(err,bar){
      err ? console.log(err) : res.json({bar})
    })
  }
}


module.exports = barsController;

