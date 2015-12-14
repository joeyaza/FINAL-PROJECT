var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var tilesController = require('../controllers/tiles');
var storiesController = require('../controllers/stories');
var usersController = require('../controllers/users');

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


router.route('/users/:id')

  // GET return specific users
  .get(usersController.getUser)

  // PUT update existing users
  .put(usersController.updateUser)

  // DELETE remove specific story from DB
  .delete(usersController.removeUser);

  // ****** USERS ******* //
  // http://127.0.0.1:3000/users
  router.route('/users')

    //GET all users
    .get(usersController.getAll)

    //POST a new story
    .post(usersController.createUser);


  router.route('/users/:id')

    // GET return specific users
    .get(usersController.getUser)

    // PUT update existing users
    .put(usersController.updateUser)

    // DELETE remove specific story from DB
    .delete(usersController.removeUser);



module.exports = router