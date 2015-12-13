var mongoose = require('mongoose');

var TileSchema = mongoose.Schema({
  image: String,
  text: String,
  layout: Number, 
});

module.exports = mongoose.model('Tile', TileSchema);

