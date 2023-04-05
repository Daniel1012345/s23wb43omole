"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('musicals', {
    title: 'Seach Results musicals'
  });
});
module.exports = router;
//# sourceMappingURL=musicals.dev.js.map
