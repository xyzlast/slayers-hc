'use sticts';

angular.module('myApp').controller('ArenaListCtrl', function ($scope, $location, ArenaService) {
  var self = this;

  $scope.models = {
    names: '',
    items: []
  };

  $scope.buttons = {
    moveToAdd: function () {
      $location.path('/arena/add');
    }
  };

  self.init = function () {
    ArenaService.list(function (items) {
      $scope.models.items = items;
    });
  };

  self.init();
});
