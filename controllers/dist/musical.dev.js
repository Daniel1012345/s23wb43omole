"use strict";

var Musical = require('../models/musical');

exports.musical_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical detail: ' + req.params.id);
};

exports.musical_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical create POST');
};

exports.musical_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical delete DELETE ' + req.params.id);
};

exports.musical_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical update PUT' + req.params.id);
}; // List of all Musicals


exports.musical_list = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Musical.find());

        case 3:
          themusical = _context.sent;
          res.send(themusical);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context.t0, "}"));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // VIEWS
// Handle a show all view


exports.musical_view_all_Page = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Musical.find());

        case 3:
          themusical = _context2.sent;
          res.render('musical', {
            title: 'Musical Search Results',
            results: themusical
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, "}"));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};
//# sourceMappingURL=musical.dev.js.map
