var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');

mongoose.connect('mongodb://localhost/HCA-app');
process.on('exit', function(){mongoose.disconnect();});

var routes = require('./config/routes');
var passport = require('./config/passport.js');
var passportMid = require('passport');
var OAuth = require('./secrets');

// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passportMid.initialize());
app.use(passportMid.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path .join(__dirname, 'public')));

app.use(methodOverride('_method'));

// create session helper method to persist user login info 
/*
var User = require('./models/user');
app.use(function(req, res, next) {
  req.login = function(user) {
    var req.session.userId = user._id;
  };

  req.currentUser = function (cb) {
    User.findOne({_id: req.session.userId}, function(err, data){
        req.user = data;
        cb(null, data)
      });
  };

  req.currentUser(next);
})
*/

app.use(routes);
// app.use('/users', users);
app.get('/auth/facebook', passport.facebookAuthenticate);
app.get('/auth/facebook/callback',  passport.facebookCallback);

app.get('/auth/google', passport.googleAuthenticate);
app.get('/oauth2callback', passport.googleCallback);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
