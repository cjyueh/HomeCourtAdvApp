var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var BarSchema = new Schema({
  name: String,
  address: String,
  pic: String,
  city: String,
  state: String,
  lat: Number,
  long: Number
});

var Bar = mongoose.model('Bar', BarSchema);

module.exports = Bar;
