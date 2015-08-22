'use strict';

describe('Service: services/authToken', function () {

  // load the service's module
  beforeEach(module('jwtAuthApp'));

  // instantiate service
  var services/authToken;
  beforeEach(inject(function (_services/authToken_) {
    services/authToken = _services/authToken_;
  }));

  it('should do something', function () {
    expect(!!services/authToken).toBe(true);
  });

});
