var config = require('../../config/config.js');
var schemaConfig = require('../../config/schemaConfig.js');
var service = require('../../app/services/heroservice.js');

describe('HeroService.list', function () {
  var returnedHeroes = null;
  beforeEach(function (done) {
    service.list(function (heroes) {
      returnedHeroes = heroes;
      done();
    })
  });

  it('HeroService.list.test', function () {
    expect(returnedHeroes).not.toBe(null);
    console.log(returnedHeroes);
  });
});


describe('HeroService.init.data', function () {
  var index = 0;
  it('Heroes size is same', function () {
    expect(hanNames.length).toBe(names.length);
    expect(engNames.length).toBe(names.length);
  });
});

describe('HeroService.add', function () {
  // beforeEach(function (done) {
  //   var index = 0;
  //   for(var i = 0 ; i < names.length; i++) {
  //     service.add(names[i], hanNames[i], engNames[i], function (result) {
  //       if(i == names.length) {
  //         done();
  //       }
  //     });
  //   }
  // });
  it('saved completed', function () {
    console.log('completed');
  });
});



  var hanNames = [
      '제독', '신비술사', '고대의 수호자', '야만전사', '불곰전사', '사제',
      '성직자', '구름술사',  '사령관',  '코만도',  '질병을 가지고 오는 자',
      '데스브링어', '데스고어',  '죽음의 기사',  '죽음의 마법사',  '심연의 목소리',
      '권법가', '엠버 블레이드', '엠버스타',  '펄른 도미니언',  '뱃사공',
      '숲의 수호자', '빙결 마법사',  '히든 니들',  '제국의 집행관',
      '아이언 후프', '얼음 마법사', '번개의 정령', '달의 수호자',
      '번개의 제왕', '번개의 정령', '기계공', '대마법사', '거인',
      '미스틱', '닌자', '사령술사', '올드 커스', '불사조', '암살자',
      '맹독술사', '심령검사', '싸이코패스', '파일럿', '소총수', '야수',
      '잎의 그림자', '암흑술사', '침묵술사', '저격수', '영혼 사냥꾼', '폭풍 군주',
      '서큐버스', '소환사', '여울지기', '검술사', '태풍전사', '복수의 영혼', '선봉 전사',
      '전쟁 사령관', '바람의 제왕', '주술 의사', '수도사', '방랑창병'
  ];

var names = [
'ADM', 'AS', 'AP', 'BRU', 'BW', 'CHAP', 'CLER', 'CW', 'CR', 'COM',
'DB', 'DEB', 'DG', 'DK', 'DM', 'DV', 'PA', 'EB', 'ES', 'FD', 'FERRY', 'FG', 'FM', 'HN',
'IE', 'IH', 'IM', 'LE', 'LG', 'LM', 'LS', 'MACH', 'MM', 'MOU', 'MY', 'NA', 'NEC', 'OC', 'PHO', 'PK', 'PO',
'PS', 'PSY', 'PT', 'RM', 'SO', 'SL', 'SSH', 'SIL', 'SNI', 'SH', 'SLORD', 'SUCCU', 'SUM', 'SK', 'SM',
'TS', 'VS', 'VW', 'WC', 'WM',
'WD', 'WMONK', 'WS'
];

   var engNames = [
    'Admiral', 'Arcane Sapper', 'Ancient Protector',
'Brute', 'Bear Warrior', 'Chaplain', 'Cleric', 'Cloud Walker',
'Commander', 'Commando', 'Disease Bringer', 'Death Bringer', 'Deathgore',
'Deathknight', 'Death Mage', 'Depths Voice', 'Drunken Master', 'Ember Blade',
'Emberstar', 'Fallen Dominion', 'Ferryman', 'Forest Guardian', 'Frostmage', 'Hidden Needle',
'Imperial Executioner', 'Iron Hoof', 'Ice Mage', 'Lightning Elemental', 'Lunar Guardian',
'Lightning Master', 'Lightning Spirit', 'Machinist', 'Master Mage', 'Mountain', 'Mystic',
'Ninja Assasin', 'Necromancer', 'Old Curse', 'Phoenix', 'Professional Killer', 'Poisoned One',
'Psychic Sword', 'Psycopath', 'Pilot', 'Rifleman', 'Savage One', 'Shadowleaf', 'Shadow Shaman', 'Silencer', 'Sniper', 'Soulhunter', 'Stormlord', 'Succubus', 'Summoner', 'Swallows Keeper',
'Swordmaster', 'Tusked Storm', 'Vengeance Spririt', 'Vanguard Warrior', 'Warchief', 'Windmaster',
'Wizard Doctor', 'Warrior Monk', 'Wandering Spearman'];
