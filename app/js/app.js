'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/programs', {
        templateUrl: 'partials/program-list.html',
        controller: 'ProgramListCtrl'
      }).
      when('/progams/:programCode', {
        templateUrl: 'partials/program-detail.html',
        controller: 'ProgramDetailCtrl'
      }).
      otherwise({
        redirectTo: '/programs'
      });
  }]);
