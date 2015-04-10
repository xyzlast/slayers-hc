var express = require('express'), router = express.Router();
var arenaService = require('../services/arenaservice.js');
var arenaMatchService = require('../services/arenamatchservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');
var userService = require('../services/userservice.js');

module.exports = function (app) {
  app.use('/api/user', router);
};

router.get('/get.json', function (req, res) {
  var emails = [];
  try {
    var userJson = req.session.passport.user._json;
    var emails = [];
    userJson.emails.forEach(function (email) {
      emails.push(email.value);
    });

    if(emails.length == 0) {
      var userData = {
            username: '로그인 하지 않은 사용자',
            email: '',
            accepted: false,
            registed: false,
            login: false
          };
      res.json(jsonUtil.buildJson(true, userData));
      return;
    }

    userService.getUser(emails, function (result) {
      if(result.ok) {
        var userData = {
          username: result.user.username,
          email: result.user.email,
          accepted: result.user.accepted,
          registed: true,
          login: true
        };
        res.json(jsonUtil.buildJson(true, userData));
      } else {
        var userData = {
          username: '등록되지 않은 사용자',
          email: emails[0],
          accepted: false,
          registed: false,
          login: true
        };
        res.json(jsonUtil.buildJson(true, userData));
      }
    });
  } catch(exception) {
    var userData = {
          username: '등록되지 않은 사용자',
          email: 'empty',
          accepted: false,
          registed: false,
          login: false
        };
    res.json(jsonUtil.buildJson(true, userData));
  }
});

//NOTE: 관리자 methods
router.get('/list.json', function (req, res) {
  userService.list(function (users) {
    res.json(jsonUtil.buildJson(true, users));
  });
});

router.post('/accept.json', function (req, res) {
  var id = req.body.id;
  userService.accept (id, function (message) {
    res.json(jsonUtil.buildJson(true, message, message));
  });
});

router.post('/resit.json', function (req, res) {
  var username = req.body.username;
  var userJson = req.session.passport.user._json;
  var emails = [];
  userJson.emails.forEach(function (email) {
    emails.push(email.value);
  });
  var email = emails[0];
  userService.resit(username, email, function (message) {
    res.json(jsonUtil.buildJson(true, message, message));
  }, function (message) {
    res.json(jsonUtil.buildJson(true, message, message));
  });
});


