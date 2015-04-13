var mongoose = require('mongoose');
var ArenaMatch = mongoose.model('ArenaMatch');
var LikeLog = mongoose.model('LikeLog');
var ObjectId = mongoose.Types.ObjectId;
var heroNameUtil = require('../utils/heronameutil.js');
var async = require('async');
var jsonUtil = require('../utils.jsonutil.js');

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

  self.unlike = function (id, username, callback) {
    var findMatch = function (callback) {
      var q = ArenaMatch.findById(ObjectId(id)).exec();
      q.then(function (match) {
        callback(null, match);
      });
    };
    var decreaseScore = function (match, callback) {
      match.score--;
      match.save(function (error) {
        callback(error, match);
      });
    };
    var writeUnLikeLog = function (match, callback) {
      var log = new LikeLog({
        matchId: id,
        username: username,
        type: 'UNLIKE',
        date: new Date()
      });
      log.save(function (err) {
        callback(err, log);
      });
    };
    var callbackCompleted = function (err, result) {
      if(err) {
        completed(jsonUtil.buildJson(false, err, err));
      } else {
        completed(jsonUtil.buildJson(true, result, 'like completed'));
      }
    };
    async.waterfall([findMatch, decreaseScore, writeUnLikeLog], callbackCompleted);
  };

  self.like = function (id, username, completed) {
    var findMatch = function (callback) {
      var q = ArenaMatch.findById(ObjectId(id)).exec();
      q.then(function (match) {
        callback(null, match);
      });
    };
    var increaseScore = function (match, callback) {
      match.score++;
      match.save(function (error) {
        callback(error, match);
      });
    };
    var writeLikeLog = function (match, callback) {
      var log = new LikeLog({
        matchId: id,
        username: username,
        type: 'LIKE',
        date: new Date()
      });
      log.save(function (err) {
        callback(err, log);
      });
    };
    var callbackCompleted = function (err, result) {
      if(err) {
        completed(jsonUtil.buildJson(false, err, err));
      } else {
        completed(jsonUtil.buildJson(true, result, 'like completed'));
      }
    };
    async.waterfall([findMatch, increaseScore, writeLikeLog], callbackCompleted);
  };
};
