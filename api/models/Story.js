var mongoose = require('mongoose');
var chapter = require('./Chapter');
var image = require('./Image');
var music = require('./Music');

var StorySchema = mongoose.Schema({
  title: String,
  author: String,
  chapters: [chapter.schema],
  images: [image.schema],
  music: [music.schema]
});

module.exports = mongoose.model('Story', StorySchema);

