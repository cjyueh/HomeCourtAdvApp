var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// require our controllers
var teamsController = require('../controllers/teamsController');
var usersController = require('../controllers/usersController');
var barsController = require('../controllers/barsController');

// homepage routes
router.route('/')
  // .get()
  .get(teamsController.indexTeams);

// TEAM routes
router.route('/teams/api')
  .get(teamsController.teamsNav);

router.route('/teams/:id')
  // having problem making two GET reqs
  .get(teamsController.showTeam);

router.route('/teams/api/:id')
  .get(teamsController.teamApi);

// ajax route for user to fav a team
router.route('/teams/api/:id/userFav')
  .put(teamsController.userFav);

router.route('/teams/api/:id/userUnfav')
  .put(teamsController.userUnfav);

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
