var mongoose = require('mongoose');
var ArenaMatch = mongoose.model('ArenaMatch');
var ObjectId = mongoose.Types.ObjectId;
var heroNameUtil = require('../utils/heronameutil.js');
var async = require('async');

module.exports = new ArenaMatchService();

function ArenaMatchService () {
  var self = this;

  self.list = function (success) {
    var q = ArenaMatch.find({ deleted: false }).sort({'date': 1}).exec();
    q.then(function (matches) {
      if(success) {
        success(matches);
      }
    });
  };

  self.add = function (winners, losers, username, comment, success, fail) {
    var winnerNames = heroNameUtil.build(winners, fail);
    var loserNames = heroNameUtil.build(losers, fail);
    if(!winnerNames || !loserNames) {
      return;
    }
    var checkExistMatch = function (callback) {
      var query = {
        winner: winnerNames,
        loser: loserNames,
        deleted: false
      };
      var q = ArenaMatch.find(query).exec();
      q.then(function (items) {
        callback(null, items);
      });
    };

    var addMatch = function (items, callback) {
      if(!items || items.length !== 0) {
        callback('이미 match가 존재합니다.', null);
        return;
      }
      var arenaMatch = new ArenaMatch({
        winner: winnerNames,
        loser: loserNames,
        username: username,
        date: new Date(),
        score: 1,
        comment: comment,
        deleted: false
      });
      arenaMatch.save(function (err) {
        callback(err, arenaMatch);
      });
    };

    var callbackCompleted = function (error, arenaMatch) {
      if(error) {
        if(fail) fail(error);
      } else if(success) {
        success(arenaMatch);
      }
    };
    async.waterfall([checkExistMatch, addMatch], callbackCompleted);
  };
};
