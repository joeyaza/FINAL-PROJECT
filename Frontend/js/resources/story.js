angular
  .module('ghost-storiesApp')
  .factory('Story', Story);

Story.$inject = ['$resource'];
function Story($resource){
  var Story = $resource('http://localhost:3000/stories/:id', null, {
    'update' : { method: 'PATCH' }
  });
  return Story;
}