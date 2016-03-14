var User = require('../models/user');

var usersController = {
  index: function (req, res) {
    User.find({},function(err, users) {
      err ? console.log(err): res.json(users)
    });
  },
  showUser: function (req, res) {
    var id = req.params.id
    User.find({_id: id}, function(err, user){
      err ? console.log(err) : res.json({user});
    })
  },
  signUp: function(req, res) {
    res.render('users/signup');
  },
  create: function(req, res) {
    var about = req.body.about
    var picture = req.body.picture
    var favorites = req.body.favorites

    User.create({about: about, picture: picture, favorites: favorites},
      function (err, data) {
        err ? console.log(err) : res.json({data});
    })
  },
  edit: function (req, res) {
    // res.render("users/signup")
    var id = req.params.id
    User.find({_id: id}, function(err, user){
      err ? console.log(err) : res.render('users/signup', {user});
    })
  },
  update: function(req, res) {
    var id = req.params.id
    // get changes to form
    var about = req.body.about
    var picture = req.body.picture
    var favorites = req.body.favorites
    // update 
    User.find({_id: id}, function(err, user){
      if (err) console.log(err);
      if (about) user.about = about;
      if (picture) user.picture = picture;
      if  (favorites) user.favorites = favorites
    })

    // this needs to save...
    User.save(req.body, function(err, data){
      console.log(err)
    })
  },
  remove: function(req, res) {
    var id = req.params.id
    User.remove({_id: id}, function(err, data){
      if (err) console.log(err);
    })
  }
}

module.exports = usersController;
