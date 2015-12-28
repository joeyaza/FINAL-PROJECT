angular
  .module("ghost-storiesApp", ['angular-jwt', 'satellizer', 'ui.router','ngResource'])
  .constant('API', 'http://ghoststoriesapi.herokuapp.com') 
  .config(oauthConfig)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  })
  .config(MainRouter);
  
  oauthConfig.$inject = ['API','$authProvider'];
  function oauthConfig(API, $authProvider) {
    $authProvider.facebook({
      url: API + '/auth/facebook', 
      clientId: '880329805408488' 
    });
  }

  function MainRouter($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
         url: "/",
         templateUrl: "states/home.html"
      })
      .state('story', {
        url: "/story",
        templateUrl: "states/story.html"
      })  
      .state('form', {
        url: "/form",
        templateUrl: "states/form.html"
      })
      .state('stories', {
        url: "/stories",
        templateUrl: "states/stories.html"
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "states/signup.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "states/login.html"
      })
      .state('example', {
        url: "/example",
        templateUrl: "states/example.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "states/about.html"
      })
      
    $urlRouterProvider.otherwise("/");
  }