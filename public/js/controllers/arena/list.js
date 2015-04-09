'use sticts';

angular.module('myApp').controller('ArenaListCtrl', function ($scope, $location, $filter, ArenaService) {
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

  self.models = {
    items: [],
    filter: null
  };

  self.methods = {
    doFilterItems: function () {
      $scope.models.items = self.models.filter(self.models.items, $scope.models.names);
    }
  };

  self.init = function () {
    ArenaService.list(function (items) {
      items.reverse();
      self.models.items = items;
      self.methods.doFilterItems();
    });
    $scope.$watch('models.names', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }
      self.methods.doFilterItems();
    });
    self.models.filter = $filter('arenaMatchFilter');
  };

  self.init();
});
