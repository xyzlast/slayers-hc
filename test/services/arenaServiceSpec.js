var config = require('../../config/config.js');
var schemaConfig = require('../../config/schemaConfig.js');
var service = require('../../app/services/arenaservice.js');

describe('arenaService.list', function () {
  beforeEach(function (done) {
    service.list(function (data) {
      console.log(data);
    });
  });

  it('test', function () {

  });
});


// describe('arenaService.addDepender', function () {
//   it('insert test', function () {
//     console.log('arenaService.addDepender');
//     var heroes = ['abc', 'def', 'ab', 'qwer', 'ioeq'];
//     service.addDepender(heroes, 'comment', 'ykyoon', console.log);
//   });

//   it('arenaService.addDepender', function () {
//     expect(true).toBe(true);
//   });
// });

// describe('arenaService.addAttacker', function () {
//   it('arenaService.addAttacker', function () {
//     var heroes = ['abc', 'def', 'a', 'qwer', 'ioeq'];
//     service.addAttacker(heroes, heroes, 'comment', 'ykyoon', console.log);
//   });

//   it('arenaService.addDepender', function () {
//     expect(true).toBe(true);
//   });
// });


// describe('arenaService.initData', function () {
//   var data = [
//     {
//       depender: ['NA', 'SIL', 'IE', 'EB', 'VW'],
//       attackers: [
//         ['WC', 'oc', 'fm', 'mach', 'my'],
//         ['eb', 'oc', 'fm', 'mach', 'com']
//       ]
//     },
//     {
//       depender: ['pho', 'succu', 'sil', 'eb', 'vw'],
//       attackers: [
//         ['wc', 'oc', 'fm', 'mach', 'my'],
//         ['dv', 'sil', 'mach', 'com', 'sl'],
//         ['eb', 'oc', 'fm', 'mach', 'com']
//       ]
//     },
//     {
//       depender: ['my', 'sil', 'cw', 'eb', 'vw'],
//       attackers: [
//         ['wc', 'oc', 'fm', 'mach', 'my'],
//         ['dv', 'sil', 'mach', 'com', 'sl'],
//         ['eb', 'oc', 'fm', 'mach', 'com']
//       ]
//     }
//   ];

//   it('arenaService.init', function () {
//     data.forEach(function (d) {
//       var depender = d.depender;
//       service.addDepender(depender, 'init depender', 'ykyoon', function (de) {
//         d.attackers.forEach(function (a) {
//           service.addAttacker(depender, a, 'init attacker', 'ykyoon', function (at) {
//             console.log(at);
//           });
//         });
//       });
//     });
//   });
// });