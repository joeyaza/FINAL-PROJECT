angular
  .module("ghost-storiesApp")
  .directive('tile', tileView);

function tileView(){
  return {
    replace:true,
    restrict: 'E',
    templateUrl: '_tileView.html',
    scope: {
      tile: '='
    },
    link: function(scope, element, attrs) {
      if(scope.tile.layout !== 1) {
        element
          .css({
            backgroundImage: 'url(' + scope.tile.image + ')'
          });
      }
    }

  }
}