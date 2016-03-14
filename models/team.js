var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Event = require('../models/event')

var TeamSchema = new Schema ({
  name: String,
  league: String,
  origin: String,
  logo: String,
  // add after we create models
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]

  // bars: [{ref: 'Bar'}]
});

var Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
