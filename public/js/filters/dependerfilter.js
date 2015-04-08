'use strict';

angular.module('myApp').filter('dependerFilter', function () {
  return function (dependers, nameString) {
    if(!nameString) {
      return dependers;
    }
    var names = nameString.split(/\W/).join(';').toUpperCase();
    if(names.length === 0) {
      return dependers;
    }
    var result = [];
    angular.forEach(dependers, function (depender) {
      var included = true;
      angular.forEach(names, function (name) {
        if(included && depender.name.indexOf(name) < 0) {
          included = false;
        }
      });
      if(included) {
        result.push(depender);
      }
    });
    return result;
  };
});
