var mongoose = require('mongoose');

var Hero = mongoose.model('Hero');
var HeroComment = mongoose.model('HeroComment');
var ArenaMatch = mongoose.model('ArenaMatch');
var User = mongoose.model('User');
var LikeLog = mongoose.model('LikeLog');

var ObjectId = mongoose.Types.ObjectId;
var async = require('async');
var jsonUtil = require('../utils/jsonutil.js');

module.exports = new SystemService();

function SystemService() {
  var self = this;

  var exportObjs = function (obj, callback) {
    obj.find().exec().then(function (users) {
      callback(users);
    });
  }

  self.exportUsers = function (callback) {
    exportObjs(User, callback);
  };

  self.exportArena = function (callback) {
    exportObjs(ArenaMatch, callback);
  };

  self.exportComments = function (callback) {
    exportObjs(HeroComment, callback);
  };

  self.exportHeroes = function (callback) {
    exportObjs(Hero, callback);
  }

  self.exportLikeLogs = function (callback) {
    exportObjs(LikeLog, callback);
  };
};
