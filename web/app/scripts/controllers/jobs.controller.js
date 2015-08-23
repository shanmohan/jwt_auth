'use strict';

/**
 * @ngdoc function
 * @name jwtAuthApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the jwtAuthApp
 */
angular.module('jwtAuthApp')
  .controller('JobsController', function ($scope, $http) {

    var promise = $http.post('http://localhost:3000/jobs');

    promise.then(function (response) {
      $scope.jobs = response.data;
    }, function (error) {
      var error = ["You are not authorized"];
      $scope.jobs = error;
      console.log(error);
    });

  });
