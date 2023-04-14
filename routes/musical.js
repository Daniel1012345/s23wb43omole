var express = require('express');
const musical_controllers= require('../controllers/musical');
var router = express.Router();

/* GET costumes */
router.get('/', musical_controllers.musical_view_all_Page );
module.exports = router;

/*
var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('musical', { title: 'Seach Results musicals'});
});
*/

