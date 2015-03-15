'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Program',
  function($scope, Program) {
    $scope.phones = Program.query();
    $scope.orderProp = 'program';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Program',
  function($scope, $routeParams, Program) {
    $scope.program = Program.get({programCode: $routeParams.programCode}, function(program) {
      $scope.mainImageUrl = program.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
