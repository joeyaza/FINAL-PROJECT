angular
  .module("ghost-storiesApp")
  .controller("MainController", MainController);

MainController.$inject = ['$http', '$timeout', '$auth'];
function MainController($http, $timeout, $auth){
  var self = this;
  self.all = [];
  this.story = {};

  this.authenticate = function(provider) {
    $auth.authenticate(provider);
  }
 
  function getStories() {
    $http
      .get('http://localhost:3000/stories')
      .then(function(res) {
        self.all = res.data;
        self.all.forEach(function(story, i) {
          self.all[i].tiles = self.all[i].tiles.map(function(tile) {
            tile.stellarSpeed = tile.layout === 1 ? 0.6 : tile.layout === 2 ? 0.3 : 1.9;
            return tile;
          });
        });
        console.log(self.all);
        $timeout(function() {
          initializeStellar(jQuery);
        },0);
      });
  }

 getStories();
}

