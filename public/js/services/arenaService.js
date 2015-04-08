angular.module('myApp').service('arenaService', function (Restangular) {
  var self = this;
  self.list = function (success, fail) {
    var q = Restangular.all('/arena').get('list');
    q.then(function (jsonResult) {
      success(jsonResult);
    });
  };
});