var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Team = require('../models/team')

var UserSchema = new Schema ({
    email: String,
    about: String,
    picture: String,
    favorites: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
