'use strict';

/* Controllers */

var gsbCourseControllers = angular.module('gsbCourseControllers', []);

gsbCourseControllers.controller('ProgramListCtrl', ['Program',
  function(Program) {
	var self = this;
	console.log("Program List Ctrl");
	self.programs = Program.query();
    self.orderProp = 'programName';
  }]);

gsbCourseControllers.controller('ProgramDetailCtrl', ['$routeParams', 'Program',
  function($routeParams, Program) {
    var self = this;
	console.log("ProgramDetailCtrl");
	console.log($routeParams);	
	self.unit = Program.get({programCohort: $routeParams.programCohort}, function(program) {
		self.unitName = unit.unitName[0];
    });
	//self.programs = Program.query();
	self.code = $routeParams.programCode;
    //self.code = "GZ52";
  }]);
