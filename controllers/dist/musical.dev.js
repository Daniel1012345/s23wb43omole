"use strict";

var Musical = require('../models/musical');

exports.musical_detail = function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Musical.findById(req.params.id));

        case 4:
          result = _context.sent;
          res.send(result);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.musical_create_post = function _callee2(req, res) {
  var document, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          document = new Musical(); // We are looking for a body, since POST does not have query parameters.
          // Even though bodies can be in many different formats, we will be picky
          // and require that it be a json object
          // {"costume_type":"goat", "cost":12, "size":"large"}

          document.instrument_type = req.body.instrument_type;
          document.brand = req.body.brand;
          document.cost = req.body.cost;
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(document.save());

        case 7:
          result = _context2.sent;
          res.send(result);
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](4);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, "}"));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 11]]);
};

exports.musical_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Musical delete DELETE ' + req.params.id);
};

exports.musical_update_put = function _callee3(req, res) {
  var toUpdate, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("update on id ".concat(req.params.id, " with body ").concat(JSON.stringify(req.body)));
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(musical_update_put.findById(req.params.id));

        case 4:
          toUpdate = _context3.sent;
          // Do updates of properties
          if (req.body.muscial_type) toUpdate.musical_type = req.body.musical_type;
          if (req.body.cost) toUpdate.cost = req.body.cost;
          if (req.body.size) toUpdate.size = req.body.size;
          if (req.body.checkboxsale) toUpdate.sale = true;else toUpdate.same = false;
          _context3.next = 11;
          return regeneratorRuntime.awrap(toUpdate.save());

        case 11:
          result = _context3.sent;
          console.log("Sucess " + result);
          res.send(result);
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send("{\"error\": ".concat(_context3.t0, ": Update for id ").concat(req.params.id, " failed"));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 16]]);
}; // List of all Musicals


exports.musical_list = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Musical.find());

        case 3:
          themusical = _context4.sent;
          res.send(themusical);
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context4.t0, "}"));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // VIEWS
// Handle a show all view


exports.musical_view_all_Page = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Musical.find());

        case 3:
          themusical = _context5.sent;
          res.render('musical', {
            title: 'Musical Search Results',
            results: themusical
          });
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context5.t0, "}"));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};
//# sourceMappingURL=musical.dev.js.map
