'use strict';

describe('Controller: EditsongCtrl', function () {

  // load the controller's module
  beforeEach(module('skullsoundApp'));

  var EditsongCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditsongCtrl = $controller('EditsongCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
