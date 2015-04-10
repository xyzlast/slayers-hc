'use sticts';

angular.module('myApp').controller('MainCtrl', function ($scope, $timeout, $window, $location, UserService) {
  var self = this;

  $scope.message = {
    info: function (message) {
      $scope.message.shown = true;
      $scope.message.type = 'info';
      $scope.message.message = message;
    },
    error: function (message) {
      $scope.message.shown = true;
      $scope.message.type = 'danger';
      $scope.message.message = message;
    },
    hide: function () {
      $scope.message.shown = false;
    },
    message: '',
    type: 'info',
    shown: false
  };

  $scope.buttons = {
    login: function () {
      $window.location.href = '/auth/google';
    },
    processUserAction: function () {
      if($scope.user.accepted) {
        if($window.confirm('Logout 하시겠습니까?')) {
          $window.location.href = '/logout';
        }
      } else {
        if($scope.user.registed) {
          $window.alert('등록후 허가를 기다리고 있습니다. 카톡에서 권스에게 말해주세요.');
        } else {
          $window.alert('사용자 등록 페이지로 이동합니다.');
          $location.path('/user/add');
        }
      }
    }
  };

  self.init = function () {
    UserService.get(function (userData) {
      $scope.user = userData;
    });
  };
  self.init();
});
