var express = require('express');
var glob = require('glob');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var authUtil = require('../app/utils/authutil.js');
var session = require('cookie-session');

module.exports = function(app, config) {
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(session({
    keys: ['sessionSeqKey', 'sessionSeqKey2']
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());

  var checkAuth = function (req, res, next) {
    if(authUtil.isAuthorized(req)) {
      next();
    } else {
      // if(authUtil.isAuthorized(req)) {
      //   res.status(403).send('you are not master');
      // } else {
      //   res.status(401).send('google oauth request');
      // }
      res.status(401).send('google oauth request');
    }
  };

  // app.get('/api/*', function (req, res, next) {
  //   checkAuth(req, res, next);
  // });

  app.post('/api/*', function (req, res, next) {
    checkAuth(req, res, next);
  });

  app.delete('/api/*', function (req, res, next) {
    checkAuth(req, res, next);
  });


  app.get('/api/monitoring.json', function(req, res) {
    res.json({
      pid: process.pid,
      memory: process.memoryUsage(),
      uptime: process.uptime()
    });
  });

  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });

};
