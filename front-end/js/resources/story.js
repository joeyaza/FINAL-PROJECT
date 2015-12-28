angular
  .module('ghost-storiesApp')
  .factory('Story', Story);

Story.$inject = ['$resource', 'API'];
function Story($resource, API){
  var Story = $resource(API + '/stories/:id', null, {
    'update' : { method: 'PATCH' }
  });
  return Story;
}