var Tile = require('../models/Tile');

// GET
function getAll(request, response) {
  Tile.find(function(error, tiles) {
    if(error) response.status(404).send(error);

    response.status(200).send(tiles);
  }).select('-__v');
}

// POST
function createTile(request, response) {
  var tile = new Tile(request.body);

  tile.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(tile);
  });
}

// GET
function getTile(request, response) {
  var id = request.params.id;

  Tile.findById({_id: id}, function(error, tile) {
    if(error) response.status(404).send(error);

    response.status(200).send(tile);
  }).select('-__v');
}

function updateTile(request, response) {
  var id = request.params.id;

  Tile.findById({_id: id}, function(error, tile) {
    if(error) response.status(404).send(error);

    if(request.body.image) tile.image = request.body.image;
    if(request.body.text) tile.text = request.body.text;

    tile.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(tile);
    });
  }).select('-__v');
}

function removeTile(request, response) {
  var id = request.params.id;

  Tile.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createTile: createTile,
  getTile: getTile,
  updateTile: updateTile,
  removeTile: removeTile
}