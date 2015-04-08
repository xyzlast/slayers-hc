module.exports = new SchemaConfig();

function SchemaConfig() {
  var config = require('./config.js');
  var mongoose = require('mongoose'), glob = require('glob');
  var self = this;

  self.build = function () {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', function (err) {
      console.log(err);
      throw new Error('db connect error');
    });

    var models = glob.sync(config.root + '/app/models/*.js');
    var modelDefs = [];
    models.forEach(function (model) {
      require(model);
      modelDefs.push(model);
    });

    return {
      db: db,
      models: modelDefs
    };
  };
};
