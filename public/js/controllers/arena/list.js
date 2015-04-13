'use sticts';

angular.module('myApp').controller('ArenaListCtrl', function ($scope, $location, $filter, $window, ArenaService) {
  var self = this;

  $scope.models = {
    names: '',
    items: []
  };

  $scope.buttons = {
    moveToAdd: function () {
      $location.path('/arena/add');
    },
    like: function (hero) {
      if($window.confirm('추천하시겠습니까?')) {
        ArenaService.like(hero._id, function (data) {
          $scope.message.info('추천되었습니다.');
          hero.score++;
        }, $scope.message.error);
      }
    },
    unlike: function (hero) {
      if($window.confirm('반대 추천하시겠습니까?')) {
        ArenaService.unlike(hero._id, function (data) {
          $scope.message.info('반대추천되었습니다.');
          if(!hero.unscore) {
            hero.unscore = 0;
          }
          hero.unscore++;
        }, $scope.message.error);
      }
    }
  };

  self.models = {
    items: [],
    filter: null
  };

  self.methods = {
    doFilterItems: function () {
      $scope.models.items = self.models.filter(self.models.items, $scope.models.names);
    },
    load: function () {
      ArenaService.list(function (items) {
        items.reverse();
        angular.forEach(items, function (item) {
          if(!item.unscore) {
            item.unscore = 0;
          }
        });
        self.models.items = items;
        self.methods.doFilterItems();
      });
    }
  };

  self.init = function () {
    self.methods.load();
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
