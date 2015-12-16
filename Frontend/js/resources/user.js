angular
  .module('ghost-storiesApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource){
  var User = $resource('https://ghoststoriesapi.herokuapp.com/users/:id', null, {
    'update' : { method: 'PATCH' }
  });
  return User;
}