'use strict';

angular.module('jwtAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, authToken, $state) {

    $scope.submit = function () {

      var requestJson = {
        email: $scope.email,
        password: $scope.password
      };

      var promise = $http.post('http://localhost:3000/register', requestJson);

      promise.then(function (response) {
        console.log(response);
        authToken.setToken(response.data.token);
        $state.go('main');
      }, function (error) {
        console.log(error);
      });

    }


  });
