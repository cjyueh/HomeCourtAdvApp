var User = require('../models/user');
var Team = require('../models/team');

var usersController = {
  // check if user is logged in
  checkLogInStatus: function (req, res, next) {
    user = req.user;
    if(req.user){
      next();
    } else {
      res.redirect("/users/new");
    }
  },

  index: function (req, res) {
    User.find({},function(err, users) {
      err ? console.log(err): res.json(users);
    });
  },
  showUser: function (req, res) {
    var id = req.params.id;
    console.log(id);
    User.findById({_id: id}, function(err, user){
      var teamFavsArray = [];
      // find all teamIDs in user favs to render info on user prof
      Team.find({_id: {$in: user.favorites}}, function(err, team){
        // iterate through all the ids to get their names
        for(i=0; i < team.length; i++) {
          // res.json(team[i].name)
          // push team name to array
          teamFavsArray.push(team[i].name);
        }
          // render user info and team names
          err ? console.log(err) : res.render('users/show', {user: user, team: teamFavsArray} );
      })
    });
  },
  signUp: function(req, res) {
    res.render('users/user-new-form');
  },
  create: function(req, res) {
    var about = req.body.about;
    var picture = req.body.picture;
    var favorites = req.body.favorites;
    User.create({about: about, picture: picture, favorites: favorites},
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/users');
      }    
    });
  },
  edit: function (req, res) {
    // res.render("users/signup")
    var id = req.params.id;
    User.findById({_id: id}, function(err, user){
      console.log(user);
      err ? console.log(err) : res.render('users/user-edit-form', {user});
    });
  },
  update: function(req, res) {
    var id = req.params.id;
    // get changes to form
    var about = req.body.about;
    var picture = req.body.picture;
    var favorites = req.body.favorites;
    // update
    User.findById(id, function(err, user){
      if (err) console.log(err);
      if (about) user.about = about;
      if (picture) user.picture = picture;
      if (favorites) user.favorites = favorites;
      console.log("user stuff here!:", user);
      // save changes
      user.save(function(err, data){
        console.log(err);
        res.redirect('/users/'+ id);
      });
    });
  },
  remove: function(req, res) {
    var id = req.params.id;
    User.remove({_id: id}, function(err, data){
      if (err) console.log(err);
      res.redirect('/');
    });
  }
};

module.exports = usersController;
