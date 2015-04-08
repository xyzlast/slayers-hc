var express = require('express'), router = express.Router();
var arenaService = require('../services/arenaservice.js');

module.exports = function (app) {
  app.use('/api/arena', router);
};

router.get('/list.json', function (req, res) {
  arenaService.list(function (items) {
    res.json(items);
  });
});