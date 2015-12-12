var mongoose = require('mongoose');

var MusicSchema = mongoose.Schema({
  number: String,
  sound: String
});

module.exports = mongoose.model('Music', MusicSchema);

