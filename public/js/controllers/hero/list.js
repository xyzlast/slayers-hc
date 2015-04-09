'use sticts';

angular.module('myApp').controller('HeroListCtrl', function ($scope) {
  var self = this;
  var textData = [ 'ADM.jpg', 'AP.jpg', 'AS.jpg', 'BRU.jpg', 'BW.jpg', 'CHAP.jpg', 'CLER.jpg',
'COM.jpg', 'CR.jpg', 'CW.jpg', 'DB.jpg', 'DEB.jpg', 'DG.jpg', 'DK.jpg', 'DM.jpg', 'DV.jpg',
'EB.jpg', 'ES.jpg', 'FD.jpg', 'FERRY.jpg', 'FG.jpg', 'FM.jpg', 'HN.jpg', 'IE.jpg', 'IH.jpg',
'IM.jpg', 'LE.jpg', 'LG.jpg', 'LM.jpg', 'LS.jpg', 'MACH.jpg', 'MM.jpg', 'MOU.jpg', 'MY.jpg',
'NA.jpg', 'NEC.jpg', 'OC.jpg', 'PA.jpg', 'PHO.jpg', 'PK.jpg', 'PO.jpg', 'PS.jpg', 'PSY.jpg',
'PT.jpg', 'RM.jpg', 'SH.jpg', 'SIL.jpg', 'SK.jpg', 'SL.jpg', 'SLORD.jpg', 'SM.jpg', 'SNI.jpg',
'SO.jpg', 'SSH.jpg', 'SUCCU.jpg', 'SUM.jpg', 'TS.jpg', 'VS.jpg', 'VW.jpg', 'WC.jpg', 'WD.jpg',
'WMONK.jpg', 'WM.jpg', 'WS.jpg'];
  var nameData = ['Admiral (ADM)', 'Arcane Sapper (AS)', 'Ancient Protector (AP)', 'Brute (BRU)',
'Bear Warrior (BW)', 'Chaplain (CHAP)', 'Cleric (CLER)', 'Cloud Walker (CW)', 'Commander (CR)',
'Commando (COM)', 'Disease Bringer (DB)', 'Death Bringer (DEB)', 'Deathgore (DG)', 'Deathknight (DK)',
'Death Mage (DM)', 'Depths Voice (DV)', 'Drunken Master (PA)', 'Ember Blade (EB)', 'Emberstar (ES)',
'Fallen Dominion (FD)', 'Ferryman (FERRY)', 'Forest Guardian (FG)', 'Frostmage (FM)', 'Hidden Needle (HN)',
'Imperial Executioner (IE)', 'Iron Hoof (IH)', 'Ice Mage (IM)', 'Lightning Elemental (LE)', 'Lunar Guardian (LG)',
'Lightning Master (LM)', 'Lightning Spirit (LS)', 'Machinist (MACH)', 'Master Mage (MM)', 'Mountain (MO)',
'Mystic (MY)', 'Ninja Assasin (NA)', 'Necromancer (NEC)', 'Old Curse (OC)', 'Phoenix (PHO)', 'Professional Killer (PK)',
'Poisoned One (PO)', 'Psychic Sword (PS)', 'Psycopath (PSY)', 'Pilot (PT)', 'Rifleman (RM)', 'Savage One (SO)',
'Shadowleaf (SL)', 'Shadow Shaman (SSH)', 'Silencer (SIL)', 'Sniper (SNI)', 'Soulhunter (SH)', 'Stormlord (SLORD)',
'Succubus (SUCCU)', 'Summoner (SUM)', 'Swallows Keeper (SK)', 'Swordmaster (SM)', 'Tusked Storm (TS)', 'Vengeance Spririt (VS)',
'Vanguard Warrior (VW)', 'Warchief (WC)', 'Windmaster (WM)', 'Wizard Doctor (WD)', 'Warrior Monk (WMONK)', 'Wandering Spearman (WS)' ];

  $scope.models = {
    heroes: [ ]
  };

  self.init = function () {
    for(var i = 0 ; i < textData.length ; i++) {
      $scope.models.heroes.push({
        name: nameData[i],
        img: '/img/' + textData[i]
      });
    }
  };
  self.init();

});



