var Chapter = require('../models/Chapter');

// GET
function getAll(request, response) {
  Chapter.find(function(error, chapters) {
    if(error) response.status(404).send(error);

    response.status(200).send(chapters);
  }).select('-__v');
}

// POST
function createChapter(request, response) {
  var chapter = new Chapter(request.body);

  chapter.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(chapter);
  });
}

// GET
function getChapter(request, response) {
  var id = request.params.id;

  Chapter.findById({_id: id}, function(error, chapter) {
    if(error) response.status(404).send(error);

    response.status(200).send(chapter);
  }).select('-__v');
}

function updateChapter(request, response) {
  var id = request.params.id;

  Chapter.findById({_id: id}, function(error, chapter) {
    if(error) response.status(404).send(error);

    if(request.body.number) chapter.number = request.body.number;
    if(request.body.text) chapter.text = request.body.text;

    chapter.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(chapter);
    });
  }).select('-__v');
}

function removeChapter(request, response) {
  var id = request.params.id;

  Chapter.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createChapter: createChapter,
  getChapter: getChapter,
  updateChapter: updateChapter,
  removeChapter: removeChapter
}