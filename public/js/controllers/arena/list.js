'use sticts';

angular.module('myApp').controller('ArenaListCtrl', function ($scope, arenaService) {
  var self = this;

  $scope.models = {
    names: 'CW;EB;MY;SIL;VW',
    items: []
  };

  self.init = function () {
    arenaService.list(function (items) {
      $scope.models.items = items;
    });
  };
  self.init();
});