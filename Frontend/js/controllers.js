angular
  .module("ghost-storiesApp")
  .controller("MainController", MainController);

MainController.$inject = ['$http'];
function MainController($http){
  var self = this;
  self.all = [];
  this.story = {};
 
 function getStories() {
   $http
   .get('http://localhost:3000/stories')
   .then(function(res) {
     console.log(res);
     self.all = res.data;
   });
 }

 getStories();
 // getImages();

}