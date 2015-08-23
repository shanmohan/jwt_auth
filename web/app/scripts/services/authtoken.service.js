'use strict';

angular.module('jwtAuthApp').factory('authToken', function ($window) {

  var storage = $window.localStorage;
  var cachedToken;
  var userToken = 'userToken';
  // Public API here

  var authToken = {
    removeToken: removeToken,
    setToken: setToken,
    getToken: getToken,
    isAuthenticated: isAuthenticated

  };

  function setToken(token) {
    console.log(token);
    cachedToken = token;
    storage.setItem(userToken, token);
  }

  function getToken() {
    if (!cachedToken) {
      cachedToken = storage.getItem(userToken);
    }
    return cachedToken;
  }

  function isAuthenticated() {
    return !!getToken()
  }

  function removeToken() {
    cachedToken = null;
    storage.removeItem(userToken)
  }

  return authToken;

});
