'use strict';

/**
 * @ngdoc function
 * @name jwtAuthApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jwtAuthApp
 */
angular.module('jwtAuthApp')
  .controller('HeaderController', function ($scope, authToken) {

      $scope.isAuthenticated = authToken.isAuthenticated;

  });
