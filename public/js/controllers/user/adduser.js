'use sticts';

angular.module('myApp').controller('UserAddCtrl', function ($scope, $location, UserService) {
  var self = this;

  $scope.models = {
    username: ''
  };

  $scope.buttons = {
    save: function () {
      UserService.regist($scope.models.username, function (jsonResult) {
        $scope.message.info(jsonResult.message);
        alert('카톡 메세지로 권스에게 승인 요청을 해주세요.');
        if(jsonResult.ok) {
          $location.path('/');
        }
      });
    }
  };

  self.init = function () {
    console.log($scope.user);
  };

  self.init();
});
