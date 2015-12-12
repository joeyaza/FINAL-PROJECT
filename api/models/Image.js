var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
  number: String,
  pic: String
});

module.exports = mongoose.model('Image', ImageSchema);

