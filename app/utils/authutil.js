var userService = require('../services/userservice');

module.exports = new AuthUtil();

function AuthUtil() {
  var self = this;

  self.checkAuth = function (req, callback) {
    try {
      var userJson = req.session.passport.user._json;
      var emails = [];
      userJson.emails.forEach(function (email) {
        emails.push(email.value);
      });
      userService.getUser(emails, function (result) {
        console.log(result);
        if(result.ok) {
          callback({
            status: result.user.accepted ? '20' : '403.1',
            user: result.user
          });
        } else {
          callback({ status: '403', user: 'null' });
        }
      });
    } catch(e) {
      console.log(e);
      callback({ status: '401', user: null });
    }
  };
};
