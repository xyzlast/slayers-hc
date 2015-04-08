angular.module('myApp').service('ArenaService', function (Restangular) {
  var self = this;
  self.list = function (success, fail) {
    var q = Restangular.all('/arena').get('list');
    q.then(function (jsonResult) {
      success(jsonResult);
    });
  };
  self.add = function (params, success, fail) {
    var q = Restangular.all('/arena/match').post(params);
    q.then(function (jsonResult) {
      success(jsonResult);
    });
  }
});
