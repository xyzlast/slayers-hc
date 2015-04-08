var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  schemaConfig = require('./config/schemaConfig.js');
schemaConfig.build();
var app = express();
require('./config/express')(app, config);
app.listen(config.port);