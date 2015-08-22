(function(){
'use strict';


  angular.module('jwtAuthApp').config(function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/');

    $stateProvider.state('register',{
      url:'/register',
      templateUrl : '/views/register.html',
      controller : 'RegisterCtrl'
    }).state('main',{
      url:'/',
      templateUrl : '/views/main.html'
    })

  })


})();
