var Music = require('../models/Music');

// GET
function getAll(request, response) {
  Music.find(function(error, musics) {
    if(error) response.status(404).send(error);

    response.status(200).send(musics);
  }).select('-__v');
}

// POST
function createMusic(request, response) {
  var music = new Music(request.body);

  music.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(music);
  });
}

// GET
function getMusic(request, response) {
  var id = request.params.id;

  Music.findById({_id: id}, function(error, music) {
    if(error) response.status(404).send(error);

    response.status(200).send(music);
  }).select('-__v');
}

function updateMusic(request, response) {
  var id = request.params.id;

  Music.findById({_id: id}, function(error, music) {
    if(error) response.status(404).send(error);

    if(request.body.number) music.number = request.body.number;
    if(request.body.sound) music.sound = request.body.sound;

    music.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(music);
    });
  }).select('-__v');
}

function removeMusic(request, response) {
  var id = request.params.id;

  Music.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createMusic: createMusic,
  getMusic: getMusic,
  updateMusic: updateMusic,
  removeMusic: removeMusic
}