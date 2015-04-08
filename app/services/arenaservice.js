var mongoose = require('mongoose');
var Depender = mongoose.model('Depender');
var Attacker = mongoose.model('Attacker');
var ObjectId = mongoose.Types.ObjectId;
var async = require('async');

module.exports = new arenaService();

function arenaService () {
  var self = this;

  var buildNames = function(heroNames, fail) {
    var names = [];
    heroNames.forEach(function (name) {
      var upperName = name.replace(/\W/gi, '').toUpperCase();
      if(names.indexOf(upperName) >= 0) {
        if(fail) fail('중복된 영웅 이름이 있습니다.');
        return false;
      } else {
        names.push(upperName);
      }
    });
    if(names.length != 5) {
      if(fail) fail('조합의 구성 영웅이 5이 아닙니다.');
      return false;
    } else {
      names.sort();
      return names.join(';');
    }
  };

  self.list = function (success, fail) {
    var q = Depender.find({ deleted: false }).populate('attackers').exec();
    q.then(success);
  };

  self.search = function (heroes, success, fail) {
    heroes.sort();
    var name = heroes.join(';');
  };

  self.addDepender = function (heroes, comment, username, success, fail) {
    var name = buildNames(heroes, fail);
    if(!name) {
      return;
    }
    var findSavedDepender = function (callback) {
      var q = Depender.find({name: name}).exec();
      q.then(function (items) {
        callback(null, items);
      });
    };
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
        if(fail) fail(error);
      }
      if(success) {
        success(depender);
      }
    };
    async.waterfall([findSavedDepender, addNewDepender], callbackCompleted);
  };

  self.addAttacker = function (dependers, attackHeroes, comment, username, success, fail) {
    var dependersName = buildNames(dependers, fail);
    if(!dependersName) return;
    var attackersName = buildNames(attackHeroes, fail);
    if(!attackersName) return;

    var findAttackers = function (callback) {
      var q = Attacker.find({name: attackersName}).exec();
      q.then(function (attackers) {
        callback(null, attackers);
      });
    };

    var addNewAttacker = function (attackers, callback) {
      if(attackers.length !== 0) {
        callback(null, attackers[0]);
      } else {
        var attacker = new Attacker({
          name: attackersName,
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
          var contained = false;
          depender.attackers.forEach(function (a) {
            if(!contained) {
              contained = a.name === attacker.name;
            }
          });
          if(!contained) {
            depender.attackers.push(attacker);
          }
          depender.save(function (err) {
            callback(err, depender);
          });
        }
      });
    };

    var callbackCompleted = function (error, depender) {
      if(error) {
        if(fail) fail(error);
        return;
      }
      if(success) {
        success(depender);
      } else if(fail) {
        fail(error);
      }
    };
    async.waterfall([findAttackers, addNewAttacker, applyToDepender], callbackCompleted);
  };
}
