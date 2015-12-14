var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  facebookId: String,
});

module.exports = mongoose.model('User', UserSchema);
