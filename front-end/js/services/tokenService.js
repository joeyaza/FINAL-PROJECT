angular
  .module('ghost-storiesApp')
  .service("TokenService", TokenService)

TokenService.$inject = ['$window', 'jwtHelper'];

// $window is a reference to the browser's window object. While window is globally available in JavaScript, it causes testability problems, because it is a global variable. In angular we always refer to it through the $window service, so it may be overridden, removed or mocked for testing.

  function TokenService($window, jwtHelper){
  
    var self = this;

    self.saveToken = function(token){
      $window.localStorage.setItem('token', token);
    }
    // As long as the client possess a valid token, they can be considered "authenticated." We can persist this state across multiple page visits by storing the JWT using localStorage.


    self.getToken = function(){
      return $window.localStorage.getItem('token');
    }
    // We'll also want a method to retrieve the token from localStorage.


    self.removeToken = function(){
      $window.localStorage.removeItem('token');
    }
    // Since the presence of a valid JWT in localStorage is all that separates an authenticated user from an unathenticated user, logging out is simply a matter of deleting the token.


    self.getUser = function(){
      var token = self.getToken();
      return jwtHelper.decodeToken(token);
    }
    // In order to obtain data related to the current user, we get the token and decoded it through jwtHelper. This will allow use to access all relevant information associated to that specific user that are contained within the token. 

  }