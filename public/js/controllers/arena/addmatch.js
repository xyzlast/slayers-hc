'use sticts';

angular.module('myApp').controller('ArenaAddMatchCtrl', function ($scope, $location, ArenaService) {
  var self = this;

  $scope.models = {
    winner: '',
    loser: ''
  };

  $scope.buttons = {
    save: function () {
      if(confirm('추가하시겠습니까?')) {
        ArenaService.add($scope.models, function (jsonResult) {
          $scope.message.info('추가되었습니다.');
          $location.path('/arena');
        }, function (failMessage) {
          $scope.message.error(failMessage);
        });
      }
    }
  };
  self.init = function () {

  };
  self.init();
});
