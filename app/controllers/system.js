var express = require('express'), router = express.Router();
var systemService = require('../services/systemservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');
var async = require('async');

module.exports = function (app) {
  app.use('/api/system', router);
};

var downloadJsonString = function (res, filename, jsonObj) {
  var jsonString = JSON.stringify(jsonObj);
  res.set({"Content-Disposition":'attachment; filename="' + filename + '"'});
  res.end(jsonString);
};

router.get('/backup.json', function (req, res) {
  var exportUsers = function (callback) {
    systemService.exportUsers(function (users) {
      callback(null, users);
    });
  };
  var exportArena = function (callback) {
    systemService.exportArena(function (matches) {
      callback(null, matches);
    });
  };
  var exportComments = function (callback) {
    systemService.exportComments(function (comments) {
      callback(null, comments);
    });
  };
  var exportLikeLogs = function (callback) {
    systemService.exportLikeLogs(function (logs) {
      callback(null, logs);
    });
  };
  var exportHeroes = function (callback) {
    systemService.exportHeroes(function (heroes) {
      callback(null, heroes);
    });
  };

  var completedCallback = function (err, results) {
    downloadJsonString(res, 'backup.json', results);
  };

  async.parallel({
    users: exportUsers,
    arena: exportArena,
    likelog: exportLikeLogs,
    heroes: exportHeroes,
    comments: exportComments
  }, completedCallback);
});
