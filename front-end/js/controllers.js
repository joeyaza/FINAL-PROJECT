angular
  .module("ghost-storiesApp")
  .controller("MainController", MainController);

MainController.$inject = ['TokenService', '$http', '$timeout', '$auth', 'API', 'User', 'Story', '$location', '$scope'];
function MainController(TokenService, $http, $timeout, $auth, API, User, Story, $location, $scope){
  var self = this;
  self.all = [];
  this.newUser = {};
  this.showingUser = null;
  this.selectedUsersStories = [];
  this.story = {
    tiles: [{}]
  };
  self.user = {};

  function handleLogin(res) {
    // var token = res.token ? res.token : null;
    var token = res.data.token ? res.data.token : null;
    // Console.log our response from the API
    if(token) {
      console.log(res);
      // display users
      getStories();
      self.user = TokenService.getUser();
    }

    self.message = res.message;
  }


  self.signup = function() {
    $http
    .post(API + '/signup', self.user)
    .then(function(res){
      handleLogin(res);
      $location.path('/stories');
      getStories();
    });
  }



  self.login = function() {
    console.log("LOGIN");
    $http
    .post(API + '/login', self.user)
    .then(function(res){
      handleLogin(res);
      $location.path('/stories');
      getStories();
    });
  }

  self.disappear = function() {
    TokenService.removeToken();
    $auth.logout();
    self.all = [];
  }

  self.loggedIn = function(){

    return !!TokenService.getToken();
  }

  self.getUsers = function() {
    self.all = User.query();
  }



  if(self.loggedIn()){
    // self.getUsers();
    self.user = TokenService.getUser();
  }



  this.authenticate = function(provider) {
    $auth.authenticate(provider).then(function(response){
      if(response.status == 200){
        getStories();
        $location.path('/stories');
      }
    });
  }




  //the index
  this.users = User.query();
  


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
    User.delete({ id: user._id }, function() {
      self.users.splice(index, 1);
    });
  }

  this.deleteStory = function(story, index){
    Story.delete({ id: story._id }, function(){
      self.all.splice(index, 1);
    });
  }

  this.addTile = function($event) {
    $event.preventDefault();
    self.story.tiles.push({});
  }

  this.dropdown = function() {
    event.preventDefault();
    $('.dropdown-button').dropdown()
  }

  this.addStory = function() {
    Story.save(self.story, function(story) {
      self.all.push(story)
      self.story = {
        tiles: [{}]
      }
      getStories();
      $location.path('/stories');
    });
  }

  this.updateStory = function() {
      Story.update({ id: self.story._id }, self.story, function() {
        self.story = {};
      })
    }


  function getStories() {
    self.all = Story.query();
  }



  self.getStory = function(story) {
    // console.log('click')
    $http
    .get(API + '/stories/' + story._id)
    .then(function(res) {
      console.log(res)
      // self.story = res.data;
      self.story = res.data;
      console.log(self.story);
      self.story.tiles = self.story.tiles.map(function(tile) {
        tile.stellarSpeed = tile.layout === 1 ? 0.3 : tile.layout === 2 ? 2 : 1;
        return tile;
      });
    });

  }


  if(!!TokenService.getToken()) {
    getStories();
  }


  
}