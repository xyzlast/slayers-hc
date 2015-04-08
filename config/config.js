var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'slayers'
    },
    port: 3000,
    db: 'mongodb://localhost/slayers-test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'slayers'
    },
    port: 3000,
    db: 'mongodb://localhost/slayers-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'slayers'
    },
    port: 3000,
    db: 'mongodb://localhost/slayers-production'
  }
};

module.exports = config[env];
