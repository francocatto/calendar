'use strict';

describe('Directive: liftpetCalendar', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<liftpet-calendar></liftpet-calendar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the liftpetCalendar directive');
  }));
});
