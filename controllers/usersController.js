var User = require('../models/user');

var usersController = {
  // check if user is logged in
  checkLogInStatus: function (req, res) {
    res.render('index', {user: req.user});
  },
  index: function (req, res) {
    User.find({},function(err, users) {
      err ? console.log(err): res.json(users);
    });
  },
  showUser: function (req, res) {
    var id = req.params.id;
    User.findById({_id: id}, function(err, user){
      // err ? console.log(err) : res.json({user});
      err ? console.log(err) : res.render('users/show', {user: user});
    });
  },
  signUp: function(req, res) {
    res.render('users/user-new-form');
  },
  create: function(req, res) {
    var about = req.body.about;
    var picture = req.body.picture;
    var favorites = req.body.favorites;
    // var id = req.params.id;
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
      // this needs to save...
      user.save(function(err, data){
        console.log(err);
        res.redirect('/users');
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
