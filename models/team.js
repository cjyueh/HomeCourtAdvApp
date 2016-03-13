var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema ({
  name: String,
  league: String,
  origin: String,
  logo: String
  // add after we create models
  // events: [{ref: 'Event'}]
  // bars: [{ref: 'Bar'}]
})

var Team = mongoose.model('Team', TeamSchema);
module.exports = Team;