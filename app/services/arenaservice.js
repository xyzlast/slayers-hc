var mongoose = require('mongoose');
var Depender = mongoose.model('Depender');
var Attacker = mongoose.model('Attacker');
var ObjectId = mongoose.Types.ObjectId;
var async = require('async');

module.exports = new arenaService();

function arenaService () {
  var self = this;

  self.list = function (success, fail) {
    var q = Depender.find({ deleted: false }).populate('attackers').exec();
    q.then(success);
  };

  self.search = function (heroes, success, fail) {
    heroes.sort();
    var name = heroes.join(';');
  };

  self.addDepender = function (heroes, comment, username, success, fail) {
    heroes.sort();
    var name = heroes.join(';').toUpperCase();

    var findSavedDepender = function (callback) {
      var q = Depender.find({name: name}).exec();
      q.then(function (items) {
        callback(null, items);
      });
    }

    var addNewDepender = function (dependers, callback) {
      if(dependers.length !== 0) {
        callback(null, dependers[0]);
      } else {
        var d = new Depender({
          name: name,
          comment: comment,
          insertUser: username,
          updateUser: username,
          deleted: false
        });
        d.save(function (err) {
          callback(err, d);
        });
      }
    };
    var callbackCompleted = function (error, depender) {
      if(error) {
        throw new Exception(error);
      }
      if(success) {
        success(depender);
      }
    };
    async.waterfall([findSavedDepender, addNewDepender], callbackCompleted);
  };

  self.addAttacker = function (dependers, attackHeroes, comment, username, success, fail) {
    dependers.sort();
    dependersName = dependers.join(';').toUpperCase();

    attackHeroes.sort();
    var name = attackHeroes.join(';').toUpperCase();

    var findAttackers = function (callback) {
      var q = Attacker.find({name: name}).exec();
      q.then(function (attackers) {
        callback(null, attackers);
      });
    };

    var addNewAttacker = function (attackers, callback) {
      if(attackers.length !== 0) {
        callback(null, attackers[0]);
      } else {
        var attacker = new Attacker({
          name: name,
          insertUser: username,
          updateUser: username,
          comment: comment,
          deleted: false
        });
        attacker.save(function (err) {
          callback(err, attacker);
        });
      }
    };

    var applyToDepender = function (attacker, callback) {
      var q = Depender.find({name: dependersName, deleted: false}).exec();
      q.then(function (dependers) {
        if(dependers.length === 0) {
          var depender = new Depender({
            name: dependersName,
            comment: comment,
            insertUser: username,
            updateUser: username,
            deleted: false,
            attackers: [ attacker ]
          });
          depender.save(function (err) {
            callback(err, depender);
          });
        } else {
          var depender = dependers[0];
          depender.attackers.push(attacker);
          depender.save(function (err) {
            callback(err, depender);
          });
        }
      });
    };

    var callbackCompleted = function (error, depender) {
      if(error) {
        throw new Exception(error);
      }
      if(success) {
        success(depender);
      } else {
        success("error name");
      }
    };
    async.waterfall([findAttackers, addNewAttacker, applyToDepender], callbackCompleted);
  };
}
