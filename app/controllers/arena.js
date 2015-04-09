var express = require('express'), router = express.Router();
var arenaService = require('../services/arenaservice.js');
var arenaMatchService = require('../services/arenamatchservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');

module.exports = function (app) {
  app.use('/api/arena', router);
};

router.get('/list.json', function (req, res) {
  arenaMatchService.list(function (items) {
    res.json(jsonUtil.buildJson(true, items));
  });
});

router.post('/match.json', function (req, res) {
  var winner = req.body.winner.split(/\W/);
  var loser = req.body.loser.split(/\W/);

  var success = function (message) {
    res.json(jsonUtil.buildJson(true, message, message));
  };
  var fail = function (message) {
    res.json(jsonUtil.buildJson(false, message, message));
  };
  //TODO: email이외에 이름으로 처리할것.
  var username = authUtil.getUser(req).emails[0].value;
  arenaMatchService.add(winner, loser, username, 'init', success, fail);
});
