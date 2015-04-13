var mongoose = require('mongoose');
var Depender = mongoose.model('Depender');
var Attacker = mongoose.model('Attacker');
var User = mongoose.model('User');
var ObjectId = mongoose.Types.ObjectId;
var jsonUtil = require('../utils/jsonutil.js');
var async = require('async');

module.exports = new UserService();

function UserService () {
  var self = this;

  self.list = function (success) {
    User.find().then(function (users) {
      success(users);
    });
  };

  self.regist = function (username, email, success, fail) {
    var q = User.find({email: email}).exec();
    q.then(function (users) {
      if(users.length === 0) {
        var user = new User({
          username: username,
          email: email,
          accepted: false
        });
        user.save(function (err) {
          if(err) {
            fail(err);
            return;
          }
          success('등록되었습니다. 허가를 기다려주세요.');
        });
      } else {
        var user = users[0];
        if(user.accepted) {
          fail('이미 등록된 사용자입니다.');
        } else {
          fail('이미 등록되었으나 허가되지 않았습니다. 허가를 기다려주세요.');
        }
      }
    });
  };

  self.getUser = function (emails, success) {
    var q = User.find().where('email').in(emails).exec();
    q.then(function (users) {
      if(users.length != 0) {
        success({
          ok: true,
          user: users[0]
        });
      } else if(users.length == 0) {
        success({
          ok:false,
          message: '등록되지 않은 사용자입니다.'
        });
      }
    });
  };

  self.accept = function (id, success, fail) {
    var q = User.findByIdAndUpdate(ObjectId(id), {accepted: true}).exec();
    q.then(function (user) {
      success('허가되었습니다.');
    });
  };

  self.update = function (id, username, callback) {
    var q = User.findByIdAndUpdate(ObjectId(id), { username: username }).exec();
    q.then(function (user) {
      callback(jsonUtil.buildJson(true, user, 'update complted'));
    });
  };
};
