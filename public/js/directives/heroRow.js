'use strict';

angular.module('myApp').directive('heroRow', function () {
  var template = function (element, attrs) {
    var size = attrs.size;
    var cssClass = attrs.css;
    return '<div class="' + cssClass + '" style="padding-right: 10px;" ng-repeat="h in heroes">' +
      '<img class="img-responsive img-rounded" style="width: ' + size + ';" alt="" src="{{h.img}}">' +
      '<center><span class="font-mini">{{h.name}}</span></center>' +
      '</div>';
  };

  var postLink = function (scope, element, attrs) {
    scope.$watch(scope.ngModel, function (newValue, oldValue) {
      if(!newValue) {
        return;
      }
      var names = newValue.replace(/\W+/gi, ',').split(/\W/);
      var heroes = [];
      angular.forEach(names, function (name) {
        heroes.push({
          img: '/img/' + name.toUpperCase() + '.jpg',
          name: name
        });
      });
      scope.heroes = heroes;
    });
    scope.heroes = [];
  };

  return {
    template: template,
    restrict: 'E',
    scope: {
      ngModel: "&"
    },
    link: postLink
  };
});
