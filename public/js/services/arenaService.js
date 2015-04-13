angular.module('myApp').service('ArenaService', function (Restangular) {
  var self = this;
  var processResponse = function (q, success, fail) {
    q.then(function (jsonResult) {
      if(jsonResult.ok && success) {
        success(jsonResult.data);
      } else if(!jsonResult.ok && fail) {
        fail(jsonResult.message);
      }
    });
  };
  self.list = function (success, fail) {
    var q = Restangular.all('/arena').get('list');
    processResponse(q, success, fail);
  };
  self.add = function (params, success, fail) {
    var q = Restangular.all('/arena/match').post(params);
    processResponse(q, success, fail);
  };
  self.like = function (id, success, fail) {
    var params = {
      id: id
    };
    var q = Restangular.all('/arena/like').post(params);
    processResponse(q, success, fail);
  };
  self.unlike = function (id, success, fail) {
    var params = {
      id: id
    };
    var q = Restangular.all('/arena/unlike').post(params);
    processResponse(q, success, fail);
  };
});
