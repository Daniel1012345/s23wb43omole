var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true});

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, done) 
{
  Account.findOne({ username: username })
  .then(function (user)
  {
    if (!user) 
    {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) 
    {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  })
  .catch(function(err)
  {
    return done(err)
  })
}));

var Musicals = require("./models/musical");

let reseed = true;
if (reseed) {recreateDB();}

async function recreateDB(){
  // Delete everything
    await Musicals.deleteMany();
    let instance1 = new Musicals({instrument_type:"Guiter", brand:'Yamaha',cost:25.4});
    let instance2 = new Musicals({instrument_type:"Piano", brand:'Yamaha',cost:250.4});
    let instance3 = new Musicals({instrument_type:"Talking drum", brand:'Sony',cost:200.4});
  
    
    instance1.save()
    .then(doc=> {
      console.log("First object saved")
    })
    .catch(err=>{
        console.error(err)
    })
    instance2.save()
    .then(doc=> {
      console.log("Second object saved")
    })
    .catch(err=>{
        console.error(err)
    })
    instance3.save()
    .then(doc=> {
      console.log("Third object saved")
    })
    .catch(err=>{
        console.error(err)
    })
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicalsRouter = require('./routes/musical');
var boardRouter = require('./routes/board');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require("./routes/resource");


var app = express();
//Get the default connection

db.once("open", function(){
  console.log("Connection to DB succeeded")});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/resource', resourceRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/musical', musicalsRouter);
app.use('/board', boardRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter)

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
module.exports = app;
