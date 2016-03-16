var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Team = require('../models/team')

var UserSchema = new Schema ({

  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  },

  google: {
    id: String,
    access_token: String,
    displayName: String,
    givenName: String,
    email: String
  },
    email: String,
    about: String,
    picture: String,
    favorites: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
