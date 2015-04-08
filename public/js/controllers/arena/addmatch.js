'use sticts';

angular.module('myApp').controller('ArenaAddMatchCtrl', function ($scope, $location, ArenaService) {
  var self = this;

  $scope.models = {
    depender: '',
    dependerComment: '',
    attachker: '',
    attackerComment: ''
  };

  $scope.buttons = {
    save: function () {
      ArenaService.add($scope.models, function (jsonResult) {
        $scope.message.info('추가되었습니다.');
        $location.path('/arena');
      }, function (failMessage) {
        $scope.message.error(failMessage);
      });
    }
  };
  self.init = function () {

  };
  self.init();
});
