var express = require('express');
var router = express.Router();
var Account = require('../models/account');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Musical App', user: req.user });
});

router.get('/register', function(req, res) 
{
  res.render('register', { title: 'Musical App Registration'});
});

router.post('/register', function(req, res) 
{
  Account.findOne({ username : req.body.username })
  .then(function (user)
  {
    if(user != null )
    {
      console.log("exists " + req.body.username)
      return res.render('register', { title: 'Registration', message: 'Existing User', account : req.body.username })
    }
    let newAccount = new Account({ username : req.body.username });
    Account.register(newAccount, req.body.password, function(err, user)
    {
      if (err) 
      {
        console.log("db creation issue "+ err)
        return res.render('register', { title: 'Registration', message: 'access error', account : req.body.username })
      }
      if(!user)
      {
        return res.render('register',{ title: 'Registration', message: 'access error', account : req.body.username })
      }
    })
    console.log('Sucess, redirect');
    res.redirect('/');
  })
  .catch(function (err)
  {
    return res.render('register', { title: 'Registration',
    message: 'Registration error', account : req.body.username })
  })
});


router.get('/login', function(req, res) 
{
  res.render('login', { title: 'Musical App Login', user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) 
{
  if(req.session.toReturn)
  {
    console.log("Send it back to " + req.session.toReturn)
    res.redirect(req.session.toReturn);
  }

  // if(req.session.returnTo)
  // {
  //   res.redirect(req.session.returnTo);
  // }
  // res.redirect('/')
});

router.get('/logout', function(req, res)
{
  console.log("logout");
  res.render('index', {title:"Kabab App Login", user:""})
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});
module.exports = router;
