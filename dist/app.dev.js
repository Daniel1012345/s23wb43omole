"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

require('dotenv').config();

var connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var musicalsRouter = require('./routes/musical');

var boardRouter = require('./routes/board');

var gridbuildRouter = require('./routes/gridbuild');

var selectorRouter = require('./routes/selector');

var Musicals = require("./models/musical");

var resourceRouter = require("./routes/resource");

var app = express(); //Get the default connection

var db = mongoose.connection; //Bind connection to error event

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
}); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/resource', resourceRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/musical', musicalsRouter);
app.use('/board', boardRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
}); // We can seed the collection if needed on server start

function recreateDB() {
  var instance1, instance2, instance3;
  return regeneratorRuntime.async(function recreateDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Musicals.deleteMany());

        case 2:
          instance1 = new Musicals({
            instrument_type: "Guiter",
            brand: 'Yamaha',
            cost: 25.4
          });
          instance2 = new Musicals({
            instrument_type: "Piano",
            brand: 'Yamaha',
            cost: 250.4
          });
          instance3 = new Musicals({
            instrument_type: "Talking drum",
            brand: 'Sony',
            cost: 200.4
          });
          instance1.save().then(function (doc) {
            console.log("First object saved");
          })["catch"](function (err) {
            console.error(err);
          });
          instance2.save().then(function (doc) {
            console.log("Second object saved");
          })["catch"](function (err) {
            console.error(err);
          });
          instance3.save().then(function (doc) {
            console.log("Third object saved");
          })["catch"](function (err) {
            console.error(err);
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

var reseed = true;

if (reseed) {
  recreateDB();
}

module.exports = app;
//# sourceMappingURL=app.dev.js.map
