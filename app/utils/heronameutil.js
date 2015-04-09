module.exports = new HeroNameUtil();

function HeroNameUtil () {
  var self = this;
  self.build = function (heroes, fail) {
    var names = [];
    heroes.forEach(function (name) {
      var upperName = name.replace(/\W/gi, '').toUpperCase();
      if(names.indexOf(upperName) >= 0) {
        if(fail) fail('중복된 영웅 이름이 있습니다.');
        return false;
      } else {
        names.push(upperName);
      }
    });
    if(names.length != 5) {
      if(fail) fail('조합의 구성 영웅이 5이 아닙니다.');
      return false;
    } else {
      names.sort();
      return names.join(';');
    }
  };
};
