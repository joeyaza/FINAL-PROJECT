var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var chaptersController = require('../controllers/chapters');
var musicsController = require('../controllers/musics');
var storiesController = require('../controllers/stories');
var imagesController = require('../controllers/images');
// var usersController = require('../controllers/users');

// ***** MUSICS ***** //

// http://127.0.0.1:3000/musics
router.route('/musics')

  //GET 
  .get(musicsController.getAll)

  //POST
  .post(musicsController.createMusic);


router.route('/musics/:id')

  // GET
  .get(musicsController.getMusic)

  // PUT
  .put(musicsController.updateMusic)

  // DELETE
  .delete(musicsController.removeMusic);


// ***** CHAPTERS ***** //

// http://127.0.0.1:3000/chapters
router.route('/chapters')

  //GET all chapters
  .get(chaptersController.getAll)

  //POST a new story
  .post(chaptersController.createChapter);


router.route('/chapters/:id')

  // GET return specific stories
  .get(chaptersController.getChapter)

  // PUT update existing stories
  .put(chaptersController.updateChapter)

  // DELETE remove specific story from DB
  .delete(chaptersController.removeChapter);

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


// *******IMAGES ******** //
// http://127.0.0.1:3000/images
router.route('/images')

  //GET all images
  .get(imagesController.getAll)

  //POST a new image
  .post(imagesController.createImage);


router.route('/images/:id')

  // GET return specific images
  .get(imagesController.getImage)

  // PUT update existing images
  .put(imagesController.updateImage)

  // DELETE remove specific images from DB
  .delete(imagesController.removeImage);


module.exports = router