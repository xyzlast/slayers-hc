var express = require('express'), router = express.Router();
var systemService = require('../services/systemservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');
var async = require('async');
var config = require('../../config/config.js');
var fs = require('fs');
var zip = require('express-zip');

module.exports = function (app) {
  app.use('/api/system', router);
};

var downloadJsonString = function (res, filename, jsonObj) {
  var jsonString = JSON.stringify(jsonObj);
  res.set({"Content-Disposition":'attachment; filename="' + filename + '"'});
  res.end(jsonString);
};

var writeJsonToFile = function (filename, jsonObj, callback) {
  var jsonString = JSON.stringify(jsonObj);
  fs.writeFile(config.root + filename, jsonString, function (err) {
    callback(null, config.root + '/' + filename);
  });
};

router.get('/backup.json', function (req, res) {
  var exportUsers = function (callback) {
    systemService.exportUsers(function (users) {
      writeJsonToFile('users.json', users, callback);
    });
  };
  var exportArena = function (callback) {
    systemService.exportArena(function (matches) {
      writeJsonToFile('arenaMatches.json', matches, callback);
    });
  };
  var exportComments = function (callback) {
    systemService.exportComments(function (comments) {
      writeJsonToFile('comments.json', comments, callback);
    });
  };
  var exportLikeLogs = function (callback) {
    systemService.exportLikeLogs(function (logs) {
      writeJsonToFile('likeLogs.json', logs, callback);
    });
  };
  var exportHeroes = function (callback) {
    systemService.exportHeroes(function (heroes) {
      writeJsonToFile('heroes.json', heroes, callback);
    });
  };

  var completedCallback = function (err, results) {
    res.zip([
      { path: results.users, name: 'user.json' },
      { path: results.arena, name: 'arena.json' },
      { path: results.likelog, name: 'likelog.json' },
      { path: results.heroes, name: 'heroes.json' },
      { path: results.comments, name: 'comments.json' },
    ]);
    // downloadJsonString(res, 'backup.json', results);
  };

  async.parallel({
    users: exportUsers,
    arena: exportArena,
    likelog: exportLikeLogs,
    heroes: exportHeroes,
    comments: exportComments
  }, completedCallback);
});
