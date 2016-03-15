var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var BarSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  lat: Number,
  long: Number,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }]
});

var Bar = mongoose.model('Bar', BarSchema);

module.exports = Bar;