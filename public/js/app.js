angular.module('myApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTouch',
  'restangular'
  // 'kendo.directives'
]).config(function($routeProvider, RestangularProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/arena', {
      templateUrl: '/views/arena/list.html',
      controller: 'ArenaListCtrl'
    })
    .when('/arena/add', {
      templateUrl: '/views/arena/addmatch.html',
      controller: 'ArenaAddMatchCtrl'
    })
    .when('/hero/list', {
      templateUrl: '/views/hero/list.html',
      controller: 'HeroListCtrl'
    })
    .when('/user/add', {
      templateUrl: '/views/user/adduser.html',
      controller: 'UserAddCtrl'
    })
    .when('/user/list', {
      templateUrl: '/views/user/list.html',
      controller: 'UserListCtrl'
    })
    ;
    // .when('/game/day', {
    //   templateUrl: '/views/game/list.html',
    //   controller: 'GamesInDayCtrl'
    // })
    // .when('/game/edit', {
    //   templateUrl: '/views/game/edit.html',
    //   controller: 'GameEditCtrl'
    // })
    // .when('/game/new', {
    //   templateUrl: '/views/game/edit.html',
    //   controller: 'GameNewCtrl'
    // })
    // .when('/statistics/players', {
    //   templateUrl: '/views/statistics/players.html',
    //   controller: 'StatisticsPlayersCtrl'
    // })
    // .when('/statistics/numbers', {
    //   templateUrl: '/views/statistics/numbers.html',
    //   controller: 'StatisticsNumbersCtrl'
    // })
    // .when('/statistics/money', {
    //   templateUrl: '/views/statistics/money.html',
    //   controller: 'StatisticsMoneyCtrl'
    // })
    // .when('/season/list', {
    //   templateUrl: '/views/season/list.html',
    //   controller: 'SeasonListCtrl'
    // })
    // .when('/season/edit', {
    //   templateUrl: '/views/season/edit.html',
    //   controller: 'SeasonEditCtrl'
    // })
    // .when('/season/new', {
    //   templateUrl: '/views/season/edit.html',
    //   controller: 'SeasonNewCtrl'
    // })
    // .when('/player/list', {
    //   templateUrl: '/views/player/list.html',
    //   controller: 'PlayerListCtrl'
    // })
    // .when('/player/edit', {
    //   templateUrl: '/views/player/edit.html',
    //   controller: 'PlayerEditCtrl'
    // })
    // .when('/player/new', {
    //   templateUrl: '/views/player/edit.html',
    //   controller: 'PlayerNewCtrl'
    // })
    // .when('/signin', {
    //   templateUrl: '/views/signin.html',
    //   controller: 'SignInCtrl'
    // })
    // .when('/signup', {
    //   templateUrl: '/views/signup.html',
    //   controller: 'SignUpCtrl'
    // })
    // .when('/sample/index', {
    //   templateUrl: '/views/sample/index.html',
    //   controller: 'SampleIndexCtrl'
    // });

  RestangularProvider.setDefaultHttpFields({
    cache: false
  });
  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setErrorInterceptor(function (response) {
    if(response.status == '401') {
      window.alert('구글 로그인이 필요합니다. 인증을 진행합니다.');
      window.location.href = '/auth/google';
    } else if (response.status == '403') {
      window.alert('게임 이름 등록이 필요합니다. 등록 페이지로 이동합니다.');
      //TODO : 등록 페이지
      window.location.href = '/accounts/login/?next=' + next;
    } else if (response.status == '403.1') {
      window.alert('게임 이름이 등록되어 있고, 인증을 기다리고 있습니다. 카톡 대화방에서 권스에게 이야기주세요.');
      window.location.href = '/';
    } else if (response.status == '403.2') {
      window.alert('관리자 권한이 필요합니다.');
      window.location.href = '/';
    }
    return response;
  });
});
