'use strict';

/**
 * @ngdoc function
 * @name jwtAuthApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtAuthApp
 */
angular.module('jwtAuthApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function(){
      console.log('Hi');
    }
  });
