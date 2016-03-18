var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema ({
  name: String,
  league: String,
  origin: String,
  logo: String,
  bars: [{
    type: Schema.Types.ObjectId,
    ref: 'Bar'
  }]
});

var Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
