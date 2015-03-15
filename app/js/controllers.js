'use strict';

/* Controllers */

var gsbCourseControllers = angular.module('gsbCourseControllers', []);

gsbCourseControllers.controller('ProgramListCtrl', ['Program',
  function(Program) {
	var self = this;
	console.log("Program List Ctrl");
	self.programs = Program.query();
    self.orderProp = 'program';
  }]);

gsbCourseControllers.controller('ProgramDetailCtrl', ['$routeParams', 'Program',
  function($routeParams, Program) {
    var self = this;
	console.log("ProgramDetailCtrl");
	self.programs = Program.query();
	self.program = Program.get({pCode: $routeParams.programCode}, function(program) {
     self.programName = program.programName[0];
    });

    
  }]);
