var mongoose = require('mongoose');

var ChapterSchema = mongoose.Schema({
  number: String,
  text: String
});

module.exports = mongoose.model('Chapter', ChapterSchema);

