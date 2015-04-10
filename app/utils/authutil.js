var userService = require('../services/userservice');

module.exports = new AuthUtil();

function AuthUtil() {
  var self = this;

  var getEmails = function (req) {
    var userJson = req.session.passport.user._json;
    var emails = [];
    userJson.emails.forEach(function (email) {
      emails.push(email.value);
    });
    return emails;
  };

  self.checkAuth = function (req, callback) {
    try {
      var emails = getEmails(req);
      userService.getUser(emails, function (result) {
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
      callback({ status: '401', user: null });
    }
  };

  self.isMaster = function (req, callback) {
    try {
      var emails = getEmails(req);
      return (emails.indexOf('xyzlast@gmail.com') >= 0);
    } catch(e) {
      return false;
    }
  };
};
