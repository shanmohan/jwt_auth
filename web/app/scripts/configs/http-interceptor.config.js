angular.module('jwtAuthApp').factory('interceptorService', function (authToken) {

  return {
    request: function (config) {

      var token = authToken.getToken();
      console.log(token);

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;

    },
    response: function (response) {
      return response

    }
  }
});
