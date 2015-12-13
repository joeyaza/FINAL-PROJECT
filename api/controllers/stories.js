var Story = require('../models/Story');
var Chapter = require('../models/Chapter');

// GET
function getAll(request, response) {
  Story.find(function(error, stories) {
    if(error) response.status(404).send(error);

    response.status(200).send(stories);
  }).select('-__v');
}



// POST
function createStory(request, response) {
  var story = new Story(request.body);

  story.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(story);
  });
}


// GET
function getStory(request, response) {
  var id = request.params.id;

  Story.findById({_id: id}, function(error, story) {
    if(error) response.status(404).send(error);

    response.status(200).send(story);
  }).select('-__v');
}

function updateStory(request, response) {
  var id = request.params.id;

  Story.findById({_id: id}, function(error, story) {
    if(error) response.status(404).send(error);

    if(request.body.title) story.title = request.body.title;
    if(request.body.author) story.author = request.body.author;

    story.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(story);
    });
  }).select('-__v');
}

function removeStory(request, response) {
  var id = request.params.id;

  Story.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createStory: createStory,
  getStory: getStory,
  updateStory: updateStory,
  removeStory: removeStory
}

