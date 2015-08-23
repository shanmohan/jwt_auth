'use strict';

angular.module('jwtAuthApp')
  .controller('LogoutController', function ($scope, authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
