var config = require('../../config/config.js');
var schemaConfig = require('../../config/schemaConfig.js');
var service = require('../../app/services/arenamatchservice.js');

describe('arenaMatchService.list', function () {
  var checkData = null;
  beforeEach(function (done) {
    service.list(function (data) {
      checkData = data;
      done();
    });
  });

  it('arenaMatchService.list.test', function () {
    console.log(checkData);
    expect(!!checkData).toBe(true);
  });
});


describe('arenaMatchService.add', function () {
  var winner = [ 'vw','sil','fd','eb','dv'];
  var loser = [ 'as','lg','pa','sl', 'vs' ];
  var checkData = null;

  beforeEach(function (done) {
    service.add(winner, loser, 'xyzlast@gmail.com', 'comment', function (arenaMatch) {
      checkData = arenaMatch;
      done();
    }, function (message) {
      console.error(message);
      checkData = 'abc';
      done();
    });
  });

  it('arenaMatchService.add.test', function () {
    console.log('test');
    expect(!!checkData).toBe(true);
  });
});


var rowData = [
   {
      "name":"EB;IE;NA;SIL;VW",
      "attackers":[
         {
            "name":"FM;MACH;MY;OC;WC",
         },
         {
            "name":"COM;EB;FM;MACH;OC",
         }
      ]
   },
   {
      "name":"EB;PHO;SIL;SUCCU;VW",
      "attackers":[
         {
            "name":"FM;MACH;MY;OC;WC",
         },
         {
            "name":"COM;DV;MACH;SIL;SL",
         },
         {
            "name":"COM;EB;FM;MACH;OC",
         }
      ]
   },
   {
      "name":"CW;EB;MY;SIL;VW",
      "attackers":[
         {
            "name":"FM;MACH;MY;OC;WC",
         },
         {
            "name":"COM;DV;MACH;SIL;SL",
         },
         {
            "name":"COM;EB;FM;MACH;OC",
         }
      ]
   },
   {
      "name":"EB;FM;MACH;SIL;VW",
      "attackers":[
         {
            "name":"COM;DV;MACH;SIL;SL",
         },
         {
            "name":"COM;EB;FM;MACH;OC",
         },
         {
            "name":"AS;COM;DV;MACH;SIL",
         }
      ]
   },
   {
      "name":"EB;NEC;PHO;SIL;VW",
      "attackers":[
         {
            "name":"CW;EB;FM;OC;VS",
         }
      ]
   },
   {
      "name":"EB;FM;MY;OC;VW",
      "attackers":[
         {
            "name":"COM;DV;SIL;SL;WC",
         },
         {
            "name":"COM;DM;MACH;SIL;SL",
         },
         {
            "name":"EB;FM;MACH;MY;OC",
         }
      ]
   },
   {
      "name":"DV;EB;SIL;SL;VW",
      "attackers":[
         {
            "name":"EB;FM;MACH;MY;OC",
         }
      ]
   },
   {
      "name":"AS;CW;PA;RM;VW",
      "attackers":[
         {
            "name":"ADM;AS;COM;CW;VS",
         }
      ]
   },
   {
      "comment":"",
      "deleted":false,
      "insertUser":"ykyoon",
      "name":"DV;FM;LG;OC;WC",
      "updateUser":"ykyoon",
      "attackers":[
         {
            "_id":"552538d4b465259218d77bdc",
            "name":"DM;FM;MACH;MY;PSY",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         },
         {
            "_id":"55253a18b465259218d77be1",
            "name":"ADM;AS;COM;EB;SL",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253921b465259218d77bdf",
      "name":"COM;IH;OC;SL;VS",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253921b465259218d77bde",
            "name":"EB;MACH;MY;SIL;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"552539e3b465259218d77be0",
      "name":"DK;LG;MACH;SUCCU;VS",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253851b465259218d77bda",
            "name":"ADM;AS;COM;CW;VS",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253a37b465259218d77be2",
      "name":"DM;FM;MY;OC;WC",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253921b465259218d77bde",
            "name":"EB;MACH;MY;SIL;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253a9eb465259218d77be4",
      "name":"COM;EB;FM;MACH;OC",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253a9eb465259218d77be3",
            "name":"CW;EB;MACH;VS;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253b58b465259218d77be6",
      "name":"COM;DV;MACH;SIL;SL",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253b58b465259218d77be5",
            "name":"CW;EB;MACH;SIL;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253c8bb465259218d77be8",
      "__v":1,
      "comment":"",
      "deleted":false,
      "insertUser":"ykyoon",
      "name":"DV;FD;HN;PA;SL",
      "updateUser":"ykyoon",
      "attackers":[
         {
            "_id":"55253c8bb465259218d77be7",
            "name":"FM;IH;MACH;MY;OC",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         },
         {
            "_id":"55253c8bb465259218d77be7",
            "name":"FM;IH;MACH;MY;OC",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253cbeb465259218d77bea",
      "name":"AS;COM;DK;LG;PSY",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253cbeb465259218d77be9",
            "name":"EB;FD;SIL;VS;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253deab465259218d77bec",
      "name":"ADM;AS;COM;CW;VS",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":1,
      "attackers":[
         {
            "_id":"55253deab465259218d77beb",
            "name":"CHAP;CLER;DB;DK;FD",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         },
         {
            "_id":"55256527ca9c590e00844b4e",
            "name":"COM;DV;LG;SL;WC",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253e0fb465259218d77bee",
      "name":"AS;COM;LG;VS;WC",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":1,
      "attackers":[
         {
            "_id":"55253e0fb465259218d77bed",
            "name":"DV;FD;LG;SL;WC",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         },
         {
            "_id":"55256d05ca9c590e00844b5d",
            "name":"COM;CW;FD;PSY;WC",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55253e3fb52db1701a6cd205",
      "name":"DM;MACH;MY;OC;PSY",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253921b465259218d77bde",
            "name":"EB;MACH;MY;SIL;VW",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"552542e3b52db1701a6cd206",
      "name":"ADM;DV;FD;SL;VS",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253c8bb465259218d77be7",
            "name":"FM;IH;MACH;MY;OC",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"552547ad706c6d0e004ef6c7",
      "name":"ADM;COM;FD;SL;VS",
      "comment":"",
      "insertUser":"ykyoon",
      "updateUser":"ykyoon",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55253c8bb465259218d77be7",
            "name":"FM;IH;MACH;MY;OC",
            "insertUser":"ykyoon",
            "updateUser":"ykyoon",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55256549ca9c590e00844b50",
      "name":"DV;FD;LG;SL;WC",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55256549ca9c590e00844b4f",
            "name":"DK;DM;EB;MY;VS",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55256681ca9c590e00844b52",
      "name":"FM;IH;MACH;MY;OC",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55256681ca9c590e00844b51",
            "name":"ADM;EB;HN;SL;VS",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"552566a6ca9c590e00844b54",
      "name":"AS;COM;DM;MY;WC",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"552566a6ca9c590e00844b53",
            "name":"EB;FD;SIL;SL;VW",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"552566caca9c590e00844b56",
      "name":"AS;COM;CW;DV;WC",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"552566caca9c590e00844b55",
            "name":"DV;MACH;OC;PA;SIL",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55256972ca9c590e00844b58",
      "name":"AS;COM;DV;VS;WC",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55256972ca9c590e00844b57",
            "name":"ADM;LG;PO;SL;VS",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"5525699dca9c590e00844b5a",
      "name":"EB;FD;SIL;SL;VW",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"5525699dca9c590e00844b59",
            "name":"AS;CW;MACH;PA;WC",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   },
   {
      "_id":"55256cd8ca9c590e00844b5c",
      "name":"AS;LG;PA;SL;VS",
      "comment":"",
      "deleted":false,
      "__v":0,
      "attackers":[
         {
            "_id":"55256cd8ca9c590e00844b5b",
            "name":"DV;EB;FD;SIL;VW",
            "comment":"",
            "deleted":false,
            "__v":0
         }
      ]
   }
];


describe('insert new data', function () {
  it('test', function () {
    rowData.forEach(function (r) {
      var loser = r.name.split(/\W/gi);
      r.attackers.forEach(function (a) {
        var winner = a.name.split(/\W/gi);
        // service.add(winner, loser, '권스', 'init');
      });
    });
  });
});
