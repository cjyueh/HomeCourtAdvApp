var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// require our controllers
var teamsController = require('../controllers/teamsController');
var usersController = require('../controllers/usersController');
var barsController = require('../controllers/barsController');
var eventsController = require('../controllers/eventsController');

console.log(teamsController);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.render('index');
// });

// homepage routes
router.route('/')
  // .get()
  // .get(usersController.checkLogInStatus, teamsController.index); //dont need to check login on home page
  .get(teamsController.indexTeams);

// TEAM routes
router.route('/teams/api')
  .get(teamsController.teamsNav);

router.route('/teams/:id')
  .get(teamsController.showTeam, teamsController.userFav);


router.route('/teams/api/:id')
  .get(teamsController.teamApi);

// USER routes // signup could just be edit
router.route('/users')
  .get(usersController.index);

router.route('/users/new')
  .get(usersController.signUp)
  .post(usersController.create);

router.route('/users/:id')
  .get(usersController.showUser);

router.route('/users/:id/edit')
  .get(usersController.edit)
  .post(usersController.update)
  .delete(usersController.remove);

// BAR routes
router.route('/bars')
  .get(barsController.index);

router.route('/bars/:id')
  .get(barsController.showBar);

module.exports = router;
