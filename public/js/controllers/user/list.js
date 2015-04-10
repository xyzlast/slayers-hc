'use sticts';

angular.module('myApp').controller('UserListCtrl', function ($scope, UserService) {
  var self = this;

  $scope.models = {
    users: []
  };

  $scope.buttons = {
    accept: function (id) {
      UserService.accept(id, function (jsonResult) {
        $scope.message.info(jsonResult.message);
        if(jsonResult.ok) {
          $scope.buttons.list();
        }
      });
    },
    list: function () {
      UserService.list(function (users) {
        $scope.models.users = users;
      });
    }
  };

  self.init = function () {
    $scope.buttons.list();
  };

  self.init();
});
