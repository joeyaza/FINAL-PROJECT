var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var tilesController = require('../controllers/tiles');
// var musicsController = require('../controllers/musics');
var storiesController = require('../controllers/stories');
// var imagesController = require('../controllers/images');
// var usersController = require('../controllers/users');

// ***** MUSICS ***** //

// http://127.0.0.1:3000/musics
// router.route('/musics')

//   //GET 
//   .get(musicsController.getAll)

//   //POST
//   .post(musicsController.createMusic);


// router.route('/musics/:id')

//   // GET
//   .get(musicsController.getMusic)

//   // PUT
//   .put(musicsController.updateMusic)

//   // DELETE
//   .delete(musicsController.removeMusic);


// ***** TILES ***** //

// http://127.0.0.1:3000/tiles
router.route('/tiles')

  //GET all tiles
  .get(tilesController.getAll)

  //POST a new story
  .post(tilesController.createTile);


router.route('/tiles/:id')

  // GET return specific tiles
  .get(tilesController.getTile)

  // PUT update existing tiles
  .put(tilesController.updateTile)

  // DELETE remove specific story from DB
  .delete(tilesController.removeTile);

// ****** STORIES ******* //
// http://127.0.0.1:3000/stories
router.route('/stories')

  //GET all stories
  .get(storiesController.getAll)

  //POST a new story
  .post(storiesController.createStory);


router.route('/stories/:id')

  // GET return specific stories
  .get(storiesController.getStory)

  // PUT update existing stories
  .put(storiesController.updateStory)

  // DELETE remove specific story from DB
  .delete(storiesController.removeStory);


// // *******IMAGES ******** //
// // http://127.0.0.1:3000/images
// router.route('/images')

//   //GET all images
//   .get(imagesController.getAll)

//   //POST a new image
//   .post(imagesController.createImage);


// router.route('/images/:id')

//   // GET return specific images
//   .get(imagesController.getImage)

//   // PUT update existing images
//   .put(imagesController.updateImage)

//   // DELETE remove specific images from DB
//   .delete(imagesController.removeImage);


module.exports = router