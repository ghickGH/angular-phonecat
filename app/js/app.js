'use strict';

/* App Module */

var gsbCourseApp = angular.module('gsbCourseApp', [
  'ngRoute',
  'phonecatAnimations',
  'gsbCourseControllers',
  'gsbCourseFilters',
  'gsbCourseServices'
]);

gsbCourseApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/programs', {
        templateUrl: 'partials/program-list.html',
        controller: 'ProgramListCtrl'
      })
      .when('/progams/:programCode', {
        templateUrl: 'partials/program-detail.html',
        controller: 'ProgramDetailCtrl'
      })
      .otherwise({
        redirectTo: '/not-found.html'
      });
  }]);
