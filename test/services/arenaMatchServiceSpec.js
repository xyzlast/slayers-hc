var config = require('../../config/config.js');
var schemaConfig = require('../../config/schemaConfig.js');
var service = require('../../app/services/arenamatchservice.js');

describe('arenaMatchService.list', function () {
  var checkData = null;
  beforeEach(function (done) {
    service.list(function (data) {
      checkData = data;
      done();
    });
  });

  it('arenaMatchService.list.test', function () {
    console.log(checkData);
    expect(!!checkData).toBe(true);
  });
});


describe('arenaMatchService.add', function () {
  var winner = [ 'vw','sil','fd','eb','dv'];
  var loser = [ 'as','lg','pa','sl', 'vs' ];
  var checkData = null;

  beforeEach(function (done) {
    service.add(winner, loser, 'xyzlast@gmail.com', 'comment', function (arenaMatch) {
      checkData = arenaMatch;
      done();
    }, function (message) {
      console.error(message);
      checkData = 'abc';
      done();
    });
  });

  it('arenaMatchService.add.test', function () {
    console.log('test');
    expect(!!checkData).toBe(true);
  });
});
