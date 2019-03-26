var express = require('express');
var router = express.Router();
var passport = require('passport');
var PassportService = require('../services/PassportService');

router.use(passport.initialize());

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// router.get('/auth/google/callback', passport.authenticate('google', {
//   successRedirect: 'http://localhost:8080/',
//   failureRedirect: '/'
// }, (error, user, info) => {
//   console.log(user);
//   console.log(info);
// }));

router.get('/auth/google/callback', (req, res, next) => {
  return passport.authenticate('google', {
    successRedirect: 'http://localhost:8080/',
    failureRedirect: '/'
  }, (error, user, info) => {
    console.log(user);
    // res.redirect(`http://localhost:8080?token=${user.googleToken}`);
    res.send({ token: user && user.googleToken });
  })(req, res, next);
});


PassportService(passport);

module.exports = router;