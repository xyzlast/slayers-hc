var mongoose = require('mongoose');
var Hero = mongoose.model('Hero');
var HeroComment = mongoose.model('HeroComment');
var ObjectId = mongoose.Types.ObjectId;
var async = require('async');
var jsonUtil = require('../utils/jsonutil.js');

module.exports = new HeroService();

function HeroService () {
  var self = this;

  self.list = function (callback) {
    var q = Hero.find().sort('name').populate('comments').exec();
    q.then(function (heroes) {
      callback(jsonUtil.buildJson(true, heroes, 'HeroService.list completed'));
    });
  };

  self.add = function (name, hanName, engName, callback) {
    var hero = new Hero({
      name: name,
      hanName: hanName,
      engName: engName,
      comments: []
    });
    hero.save(function (err) {
      if(err) {
        callback(jsonUtil.buildJson(false, err, err));
      } else {
        callback(jsonUtil.buildJson(true, hero, 'HeroService.add completed'));
      }
    });
  };

  self.writeComment = function (heroId, username, comment, callback) {
    var findHero = function (methodCallback) {
      var q = Hero.findById(ObjectId(heroId)).exec();
      q.then(function (hero) {
        methodCallback(null, hero);
      });
    };

    var saveComment = function (hero, methodCallback) {
      var commentObj = new HeroComment({
        hero: hero.name,
        username: username,
        comment: comment,
        time: new Date()
      });
      commentObj.save(function (err) {
        var passData = {
          hero: hero,
          comment: commentObj
        };
        methodCallback(err, passData);
      });
    };

    var pushComment = function (passData, methodCallback) {
      console.log('pushComment');
      var hero = passData.hero;
      var commentObj = passData.comment;
      hero.comments.push(commentObj._id);
      hero.save(function (err) {
        methodCallback(err, passData);
      });
    };

    var methodCallback = function (err, passData) {
      if(err) {
        callback(jsonUtil.buildJson(false, err, err));
      } else {
        callback(jsonUtil.buildJson(true, passData, passData));
      }
    };
    async.waterfall([findHero, saveComment, pushComment], methodCallback);
  };

  self.readComment = function (hero, callback) {

  };
};
