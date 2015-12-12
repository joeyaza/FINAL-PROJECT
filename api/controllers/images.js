var Image = require('../models/Image');

// GET
function getAll(request, response) {
  Image.find(function(error, images) {
    if(error) response.status(404).send(error);

    response.status(200).send(images);
  }).select('-__v');
}

// POST
function createImage(request, response) {
  var image = new Image(request.body);

  image.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(image);
  });
}

// GET
function getImage(request, response) {
  var id = request.params.id;

  Image.findById({_id: id}, function(error, image) {
    if(error) response.status(404).send(error);

    response.status(200).send(image);
  }).select('-__v');
}

function updateImage(request, response) {
  var id = request.params.id;

  Image.findById({_id: id}, function(error, image) {
    if(error) response.status(404).send(error);

    if(request.body.number) image.number = request.body.number;
    if(request.body.pic) image.pic = request.body.pic;

    image.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(image);
    });
  }).select('-__v');
}

function removeImage(request, response) {
  var id = request.params.id;

  Image.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createImage: createImage,
  getImage: getImage,
  updateImage: updateImage,
  removeImage: removeImage
}