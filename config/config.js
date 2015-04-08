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
    db: 'mongodb://localhost/slayers-test',
    google: {
      clientId: '107767698663-e1u9bpnl0dqcui4pe301ua7o24ip8iuf.apps.googleusercontent.com',
      clientSeq: 'VAz0SHxk06Tgi7fim9N9wF9t',
      callbackUri: 'http://localhost:3000/oauth2callback'
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'slayers'
    },
    port: 3000,
    db: 'mongodb://localhost/slayers-test',
    google: {
      clientId: '107767698663-e1u9bpnl0dqcui4pe301ua7o24ip8iuf.apps.googleusercontent.com',
      clientSeq: 'VAz0SHxk06Tgi7fim9N9wF9t',
      callbackUri: 'http://localhost:3000/oauth2callback'
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'slayers'
    },
    port: process.env.PORT,
    db: process.env.MONGOLAB_URI,
    google: {
      clientId: '107767698663-vf7dmkm31n9d5gf0v9rto22k1ue7ugs0.apps.googleusercontent.com',
      clientSeq: 'XIeDfMuelyGswwCmSXcKTkGZ',
      callbackUri: 'http://slayers.herokuapp.com/oauth2callback'
    }
  }
};

module.exports = config[env];
