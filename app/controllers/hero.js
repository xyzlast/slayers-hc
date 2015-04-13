var express = require('express'), router = express.Router();
var heroService = require('../services/heroservice.js');
var jsonUtil = require('../utils/jsonutil.js');
var authUtil = require('../utils/authutil.js');


module.exports = function (app) {
  app.use('/api/hero', router);
};

router.get('/list.json', function (req, res) {
  heroService.list(function (jsonResult) {
    res.json(jsonResult);
  });
});

router.post('/comment.json', function (req, res) {
  var heroId = req.body.heroId;
  var comment = req.body.comment;
  console.log(heroId);
  console.log(comment);
  var username = authUtil.getUser(req, function (user) {
    console.log(user);
    if(user == null) {
      res.status('401').send('');
    } else {
      heroService.writeComment(heroId, user.username, comment, function (jsonResult) {
        res.json(jsonResult);
      });
    }
  });
});
