var schemaConfig = require('../config/schemaConfig');
var buildResult = schemaConfig.build();
describe('schemaConfig.build', function () {
  it('connect and build', function () {
    expect(!!buildResult).toBe(true);
    expect(buildResult.models.length).not.toBe(0);
  });
});