'use sticts';

angular.module('myApp').controller('MainCtrl', function ($scope, $timeout) {
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
});
