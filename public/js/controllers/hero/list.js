'use sticts';

angular.module('myApp').controller('HeroListCtrl', function ($scope, HeroService) {
  var self = this;
  $scope.models = {
    heroes: [ ],
    selectedHero: null,
    heroComment: ''
  };

  $scope.buttons = {
    showModal: function (hero) {
      $scope.models.selectedHero = hero;
      angular.element('#commentModal').modal('show');
    },
    writeComment: function () {
      var heroId = $scope.models.selectedHero._id;
      var comment = $scope.models.heroComment;
      if(!comment || comment.length < 3) {
        alert('3자 이상 넣어주세요.');
        return;
      }
      HeroService.writeComment(heroId, comment, function (jsonResult) {
        angular.element('#commentModal').modal('hide');
        $scope.message.info('등록되었습니다.');
        self.methods.load();
      }, $scope.message.error);
    }
  };

  self.methods = {
    load: function () {
      HeroService.list(function (heroes) {
        $scope.models.heroes = heroes;
      }, $scope.message.error);
    }
  };

  self.init = function () {
    self.methods.load();
  };
  self.init();
});



