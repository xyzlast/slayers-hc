'use sticts';

angular.module('myApp').service('UserService', function (Restangular) {
  var self = this;

  self.get = function (callback) {
    var q = Restangular.all('user').get('get');
    q.then(function (jsonResult) {
      callback(jsonResult.data);
    });
  };
});
