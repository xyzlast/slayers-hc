'use strict';

angular.module('myApp').filter('dependerFilter', function () {
  return function (dependers, nameString) {
    if(!nameString) {
      return dependers;
    }
    var names = nameString.toUpperCase().split(/\W/gi);
    if(names.length === 0) {
      return dependers;
    }
    var result = [];
    angular.forEach(dependers, function (depender) {
      var included = true;
      var dependerNames = depender.name.split(/\W/gi);
      angular.forEach(names, function (name) {
        var subIncluded = (dependerNames.indexOf(name) >= 0);
        included = included && subIncluded;
      })
      if(included) {
        result.push(depender);
      }
    });
    return result;
  };
});
