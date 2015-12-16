angular
  .module('ghost-storiesApp')
  .factory('Story', Story);

Story.$inject = ['$resource'];
function Story($resource){
  var Story = $resource('https://ghoststoriesapi.herokuapp.com/stories/:id', null, {
    'update' : { method: 'PATCH' }
  });
  return Story;
}