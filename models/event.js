var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Team = require('../models/team');

var EventSchema = new Schema ({
  // homeTeam: String,
  // awayTeam: String,
  // trying to ref teams in events
  homeTeam: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  awayTeam: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  date: Date,
  time: String,
  createdAt: { type : Date, default: Date.now() }
  // add after we create models
  // events: [{ref: 'Event'}]
  // bars: [{ref: 'Bar'}]
});

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;
