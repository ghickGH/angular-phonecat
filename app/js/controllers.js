'use strict';

/* Controllers */

var gsbCourseControllers = angular.module('gsbCourseControllers', []);

gsbCourseControllers.controller('ProgramListCtrl', ['Program',
  function(Program) {
	var self = this;

	self.programs = Program.query();
    self.orderProp = 'program';
  }]);

gsbCourseControllers.controller('ProgramDetailCtrl', ['$routeParams', 'Program',
  function($routeParams, Program) {
    var self = this;
	self.programs = Program.query();
	self.program = Program.get({programCode: $routeParams.programCode}, function(program) {
     self.mainImageUrl = program.images[0];
    });

    self.setImage = function(imageUrl) {
      self.mainImageUrl = imageUrl;
    }
  }]);
