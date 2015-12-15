angular
  .module('ghost-storiesApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource){
  var User = $resource('http://localhost:3000/users/:id', null, {
    'update' : { method: 'PATCH' }
  });
  return User;
}