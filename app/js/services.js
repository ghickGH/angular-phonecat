'use strict';

/* Services */

var gsbCourseServices = angular.module('gsbCourseServices', ['ngResource']);

gsbCourseServices.factory('Program', ['$resource',
  function($resource){
    return $resource('data/programs.json', {}, {
      query: {method:'GET', isArray:true},
	  get: {method: 'GET', isArray:true}
    });
  }]);
