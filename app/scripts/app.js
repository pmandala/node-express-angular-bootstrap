'use strict';

/**
 * @ngdoc overview
 * @name garudaWebApp
 * @description
 * # garudaWebApp
 *
 * Main module of the application.
 */
angular
  .module('garudaWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
