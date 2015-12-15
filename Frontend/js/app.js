angular
  .module("ghost-storiesApp", ['satellizer', 'ui.router','ngResource'])
  .constant('API', 'http://localhost:3000') 
  .config(oauthConfig)
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
         templateUrl: "home.html"
      })
      .state('story', {
        url: "/story",
        templateUrl: "story.html"
      })  
      .state('form', {
        url: "/form",
        templateUrl: "form.html"
      })
      .state('stories', {
        url: "/stories",
        templateUrl: "stories.html"
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "signup.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html"
      })
      
    $urlRouterProvider.otherwise("/");
  }