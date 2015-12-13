var mongoose = require('mongoose');
var tile = require('./Tile');


var StorySchema = mongoose.Schema({
  title: String,
  author: String,
  tiles: [tile.schema]
});

module.exports = mongoose.model('Story', StorySchema);

