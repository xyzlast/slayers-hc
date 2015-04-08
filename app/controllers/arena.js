var express = require('express'), router = express.Router();
var arenaService = require('../services/arenaservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');

module.exports = function (app) {
  app.use('/api/arena', router);
};

router.get('/list.json', function (req, res) {
  arenaService.list(function (items) {
    res.json(jsonUtil.buildJson(true, items));
  });
});

router.post('/match.json', function (req, res) {
  var dependerNames = req.body.depender.split(/\W/);
  var dependerComment = req.body.dependerComment;
  var attackerNames = req.body.attacker.split(/\W/);
  var attackerComment = req.body.attackerComment;
  var success = function (message) {
    res.json(jsonUtil.buildJson(true, message, message));
  };
  var fail = function (message) {
    res.json(jsonUtil.buildJson(false, message, message));
  };
  var username = authUtil.getUser(req).email;
  arenaService.addAttacker(dependerNames, attackerNames, attackerComment, username, success, fail);
});
