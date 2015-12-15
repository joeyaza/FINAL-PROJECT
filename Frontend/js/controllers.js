angular
  .module("ghost-storiesApp")
  .controller("MainController", MainController);

MainController.$inject = ['$http', '$timeout', '$auth', 'User', 'Story'];
function MainController($http, $timeout, $auth, User, Story){
  var self = this;
  self.all = [];
  this.newUser = {};
  this.showingUser = null;
  this.selectedUsersStories = [];
  this.story = {
    tiles: [{}]
  };

  // for facebook
  this.authenticate = function(provider) {
    $auth.authenticate(provider);
  }

  //the index
  this.users = User.query();
  this.stories = Story.query();

  //create
  this.addUser = function(){
    User.save(self.newUser, function(user){
      self.users.push(user);
      self.newUser = {};
    });
  }

  // Select
  this.showUser = function(user){
    self.showingUser = user;
    self.selectedUsersStories = self.stories.filter(function(story){
      if (self.showingUser.stories.indexOf(story._id) > -1){
        return true;
      }
    });
  }

  // Unselect
  this.unselect = function(){
    self.showingUser = null;
  }
 
 // Update
 this.updateUser = function(user){
   User.update({ id: user._id }, self.showingUser, function(){
     self.showingUser = null;
   });
 }

 // Delete
 this.deleteUser = function(user, index){
   User.delete({ id: user._id });
   self.users.splice(index, 1);
 }

 this.deleteStory = function(story){
   Story.delete({ id: story._id });
   var index = self.stories.indexOf(story);
   self.stories.splice(index, 1);
 }

 this.addTile = function($event) {
  $event.preventDefault();
  self.story.tiles.push({});
 }

 this.addStory = function() {
   if (self.story._id) {
     Story.update({ id: self.story._id }, self.story, function(){
       self.story = {};
     });
   } else {
     Story.save(self.story, function(story) {
       self.stories.push(story)
       self.story = {
          tiles: [{}]
        }
     });
   }
 };

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

  self.getStory = function(story) {
    // console.log('click')
    $http
    .get('http://localhost:3000/stories/' + story._id)
    .then(function(res) {
      // console.log(res)
      // self.story = res.data;
      self.story = res.data;
      console.log(self.story);
      self.story.tiles = self.story.tiles.map(function(tile) {
        tile.stellarSpeed = tile.layout === 1 ? 0.6 : tile.layout === 2 ? 0.3 : 1.9;
        return tile;
      });
    });
    $timeout(function() {
      initializeStellar(jQuery);
    },0);
  }


 getStories();
 // getStory();


}

