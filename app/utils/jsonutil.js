module.exports = new JsonUtil();

function JsonUtil () {
  var self = this;
  self.buildJson = function (ok, data, message) {
    return {
      ok: ok,
      data: data,
      message: message
    };
  };
}
