'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Program', ['$resource',
  function($resource){
    return $resource('data/programs.json', {}, {
      query: {method:'GET', params:{programCode:'programs'}, isArray:true}
    });
  }]);
