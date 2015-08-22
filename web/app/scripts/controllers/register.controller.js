'use strict';

/**
 * @ngdoc function
 * @name jwtAuthApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtAuthApp
 */
angular.module('jwtAuthApp')
  .controller('RegisterCtrl', function ($scope, $http) {


    $scope.submit = function(){

      var requestJson = {
        email : $scope.email,
        password : $scope.password
      };

      var promise = $http.post('http://localhost:3000/register', requestJson);

      promise.then(function(response){
        console.log('http success callback');
        console.log(response.data)
      }, function(error){
        console.log('http error callback');
        console.log(error);
      });

    }


  });
