angular
  .module('ghost-storiesApp')
  .factory('AuthInterceptor', AuthInterceptor)

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService){

  // Now that we have our JWT management in place, let's build out and HTTP interceptor to automatically send the token with each request that needs authentication. 

  return {

    // Let's attach the token to requests made to the API server. Authenticating with a JWT involves attaching an Authorization header to each request with a value consisting of the String "Bearer" and the JWT. This method relies on the use of SSL to prevent the token itself from being sniffed.

    request: function(config){
      var token = TokenService.getToken();

      if(config.url.match(API) && token){
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },


    // At this point, we have created methods for saving and loading tokens but we haven't actually wired them up to do so. We can easily do this using the response() callback of our interceptor. Simply check each returning response from the API server for the presence of a token then call TokenService.saveToken().

    response: function(res){
      if(res.config.url.match(API) && res.data.token){
        TokenService.saveToken(res.data.token)
        // calls $window.localStorage.setItem('token', token);
      }
      return res;
    }
  }

  // One awesome result of using interceptors is the ability to automatically refresh the JWT. Anytime a user successfully makes an API call to a protected route, the server can attach a new token to the response payload. The interceptor will automatically grab the new token and save it so as long as the user continues to make requests to the server, the token will never expire and she won't be forced to re-authenticate.

}