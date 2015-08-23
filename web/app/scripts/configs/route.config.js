(function () {
  'use strict';


  angular.module('jwtAuthApp').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider.state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    }).state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    }).state('logout', {
      url: '/logout',
      controller: 'LogoutController'
    }).state('jobs', {
      url: '/jobs',
      templateUrl : '/views/jobs.html',
      controller: 'JobsController'
    });

    $httpProvider.interceptors.push('interceptorService')

  })


})();
