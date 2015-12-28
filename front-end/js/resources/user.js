angular
  .module('ghost-storiesApp')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API){
  var User = $resource(API + '/users/:id', null, {
    'update' : { method: 'PATCH' },
    'signup': {method: "POST", url: API+ '/signup'},
    'login': {method: "POST", url: API+ '/login'}
  });
  return User;
}