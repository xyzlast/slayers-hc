'use strict';

angular.module('myApp').filter('arenaMatchFilter', function () {
  return function (matches, nameString) {
    if(!nameString) {
      return matches;
    }
    var names = nameString.toUpperCase().split(/\W/gi);
    if(names.length === 0) {
      return matches;
    }
    var result = [];
    angular.forEach(matches, function (match) {
      var included = true;
      console.log(match.loser);
      var loserNames = match.loser.split(/\W/gi);
      angular.forEach(names, function (name) {
        var subIncluded = (loserNames.indexOf(name) >= 0);
        included = included && subIncluded;
      })
      if(included) {
        result.push(match);
      }
    });
    return result;
  }
});
