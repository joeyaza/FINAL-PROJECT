angular
  .module("ghost-storiesApp", ['satellizer'])
  .constant('API', 'http://localhost:3000') // your api url here
  .config(oauthConfig);
  
  oauthConfig.$inject = ['API','$authProvider'];
  function oauthConfig(API, $authProvider) {
    $authProvider.facebook({
      url: API + '/auth/facebook', // the route that will handle the request from facebook
      clientId: '880329805408488' // your facebook client id
    });
  }