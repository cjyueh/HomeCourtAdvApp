var express = require('express');
var router = express.Router();
var teamsController = require('../controllers/teamsController');
console.log(teamsController);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.render('index');
// });

router.route('/')
  .get(teamsController.index);
//team routes
router.route('/teams/:id')
  .get(teamsController.showTeam);
// router.route('/teams')
//   .get(teamsController.index);

module.exports = router;