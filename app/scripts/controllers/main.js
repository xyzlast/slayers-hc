'use strict';

/**
 * @ngdoc function
 * @name slayersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slayersApp
 */
angular.module('slayersApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
