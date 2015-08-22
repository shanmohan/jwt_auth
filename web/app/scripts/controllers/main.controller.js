'use strict';

/**
 * @ngdoc function
 * @name jwtAuthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jwtAuthApp
 */
angular.module('jwtAuthApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ui.route'
    ];
  });
