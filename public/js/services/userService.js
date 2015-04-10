'use sticts';

angular.module('myApp').service('UserService', function (Restangular) {
  var self = this;

  self.get = function (callback) {
    var q = Restangular.all('user').get('get');
    q.then(function (jsonResult) {
      callback(jsonResult.data);
    });
  };

  self.regist = function (username, callback) {
    var params = {
      username: username
    };
    var q = Restangular.all('user/regist').post(params);
    q.then(function (jsonResult) {
      callback(jsonResult);
    });
  };

  self.list = function (callback) {
    var q = Restangular.all('user').get('list');
    q.then(function (jsonResult) {
      if(jsonResult.ok) {
        callback(jsonResult.data);
      } else {
        alert(jsonResult.message);
      }
    });
  };

  self.accept = function (id, callback) {
    var params = {
      id: id
    };
    var q = Restangular.all('user/accept').post(params);
    q.then(function (jsonResult) {
      callback(jsonResult);
    });
  };
});
