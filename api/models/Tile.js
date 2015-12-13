var mongoose = require('mongoose');

var TileSchema = mongoose.Schema({
  image: String,
  text: String,
  layout: Number, 
});
// layout- 1 image and text, 2 - image, 3 - text

module.exports = mongoose.model('Tile', TileSchema);

