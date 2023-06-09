"use strict";

var express = require('express');

var musical_controllers = require('../controllers/musical');

var router = express.Router();
/* GET costumes */

router.get('/musical/:id', musical_controllers.musical_detail);
router.get('/create', musical_controllers.musical_create_Page);
/* GET detail costume page */

router.get('/detail', musical_controllers.musical_view_one_Page);
module.exports = router;
/* GET create update page */

router.get('/update', musical_controllers.musical_update_Page);
/* GET delete costume page */

router.get('/delete', musical_controllers.musical_delete_Page);
/*
var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('musical', { title: 'Seach Results musicals'});
});
*/
//# sourceMappingURL=musical.dev.js.map
