angular.module('myApp').service('HeroService', function (Restangular) {
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
    var q = Restangular.all('/hero').get('list');
    processResponse(q, success, fail);
  };

  self.writeComment = function (heroId, comment, success, fail) {
    var params = {
      heroId: heroId,
      comment: comment
    };
    var q = Restangular.all('/hero/comment').post(params);
    processResponse(q, success, fail);
  };
});
