"use strict";

var musical = require('../models/musical');

var Musical = require('../models/musical');

exports.musical_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical list');
};

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
}; // List of all Costumes


exports.musical_list = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(musical.find());

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
};
//# sourceMappingURL=musical.dev.js.map
