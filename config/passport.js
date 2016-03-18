var User = require('../models/user');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var OAuth = require('../secrets');

passport.use('facebook', new FacebookStrategy({
  // clientID        : OAuth.fb.clientID,
  clientID        : ENV['FB_CLIENT'],
  // clientSecret    : OAuth.fb.clientSecret,
  clientSecret    : ENV['FB_SECRET'],

  callbackURL     : 'https://home-court-advantage.herokuapp.com/auth/facebook/callback',
  enableProof     : true,
  profileFields   : ['name', 'emails']
}, function(access_token, refresh_token, profile, done) {

  // // Use this to see the information returned from Facebook
  // console.log(profile)

  process.nextTick(function() {

    User.findOne({ 'fb.id' : profile.id }, function(err, user) {
      if (err) return done(err);
      if (user) {
        console.log(user);
        return done(null, user);
      } else {

        var newUser = new User();
        newUser.fb.id           = profile.id;
        newUser.fb.access_token = access_token;
        newUser.fb.firstName    = profile.name.givenName;
        newUser.fb.lastName     = profile.name.familyName;
        newUser.fb.email        = profile.emails[0].value;

        newUser.save(function(err) {
          if (err)
            throw err;

          return done(null, newUser);
        });
      }

    });
  });
})); //here

passport.use(new GoogleStrategy({
  // clientID        : OAuth.google.clientID,
  clientID        : ENV['GOOGLE_CLIENT'],
  // clientSecret    : OAuth.google.clientSecret,
  clientSecret    : ENV['GOOGLE_SECRET']
  callbackURL     : OAuth.google.callbackURL,
  enableProof     : true,
  profileFields   : ['name', 'emails']
},
  function(access_token, refresh_token, profile, done) {
      // console.log(profile.displayName);
    process.nextTick(function(){

      // debugger;
      User.findOne({ 'google.id' : profile.id}, function (err, user) {
        console.log(profile);
        if (err)
          return done (err);
        if (user) {
          console.log(user);
          return done(null, user);
        }  else {
          var newUser = new User();
          console.log("New User ", newUser);
          newUser.google.id = profile.id;
          newUser.google.access_token = access_token;
          newUser.google.displayName = profile.displayName;
          newUser.google.email = profile.emails[0].value;

          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

passport.serializeUser(function(user, done) {
    console.log('HIIII');
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// console.log(passport);



module.exports.facebookAuthenticate = passport.authenticate('facebook', { scope: 'email'} );
module.exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}), function(req, res) {
  // console.log('HERE');
};

module.exports.googleAuthenticate = passport.authenticate('google', { scope: 'email'} );
module.exports.googleCallback = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}), function(req, res) {
};
