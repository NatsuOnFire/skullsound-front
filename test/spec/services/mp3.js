'use strict';

describe('Service: mp3', function () {

  // load the service's module
  beforeEach(module('skullsoundApp'));

  // instantiate service
  var mp3;
  beforeEach(inject(function (_mp3_) {
    mp3 = _mp3_;
  }));

  it('should do something', function () {
    expect(!!mp3).toBe(true);
  });

});
