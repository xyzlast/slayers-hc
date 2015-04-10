var config = require('../../config/config.js');
var schemaConfig = require('../../config/schemaConfig.js');
var service = require('../../app/services/userservice.js');


describe('userService.list', function () {
  beforeEach(function (done) {
    service.list(function (users) {
      expect(users).not.toBe(null);
      done();
    });
  });

  it('userService.list.test', function () {
    expect(true).toBe(true);
  });
});

describe('userService.regist', function () {
  beforeEach(function (done) {
    var success = function (message) {
      expect(!!message).toBe(true);
      done();
    };
    service.regist('권스', 'xyzlast@gmail.com', success, success);
  });

  it('userService.regist.test', function () {
    expect(true).toBe(true);
  });
});


describe('userService.getUser', function () {
  var user = null;
  beforeEach(function (done) {
    var success = function (result) {
      expect(result.ok).toBe(true);
      user = result.user;
      done();
    };
    service.getUser(['xyzlast@gmail.com'], success, success);
  });

  it('userService.getUser.test', function () {
    expect(user.email).toBe('xyzlast@gmail.com');
    expect(user.username).toBe('권스');
  });
});
