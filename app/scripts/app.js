'use strict';

/**
 * @ngdoc overview
 * @name skullsoundApp
 * @description
 * # skullsoundApp
 *
 * Main module of the application.
 */
angular
  .module('skullsoundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.materialize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/song/:id', {
        templateUrl : 'views/edit.html',
        controller: 'EditsongCtrl',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
