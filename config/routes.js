var express = require('express');
var router = express.Router();

// require our controllers
var teamsController = require('../controllers/teamsController');
var usersController = require('../controllers/usersController');
var barsController = require('../controllers/barsController');

console.log(teamsController);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.render('index');
// });

// homepage routes
router.route('/')
  .get(teamsController.index);

// TEAM routes
router.route('/teams/:id')
  .get(teamsController.showTeam);
// router.route('/teams')
//   .get(teamsController.index);

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
  .put(usersController.update)
  .delete(usersController.remove);

// BAR routes
router.route('/bars')
  .get(barsController.index);

router.route('/bars/:id')
  .get(barsController.showBar);

module.exports = router;
