var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');


var UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  picture: String,
  // facebookId: String,
  stories: [{type: mongoose.Schema.ObjectId, ref: 'Story'}]
});

// UserSchema.virtual('passwordConfirmation')
//   .get(function(){
//     return this._passwordconfirmation;
//   })
//   .set(function(value){
//     this._passwordconfirmation = value;
//   });

UserSchema.methods.authenticate = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    callback(err, isMatch);
  });
};

UserSchema.pre('save', function(next) {
   var user = this;  
   console.log(user)

   bcrypt.genSalt(5, function(err, salt) {  /// 5 times
     if (err) next(err);
     bcrypt.hash(user.password, salt, function(err, hashedPassword) {
        if(err) next(err);
       user.password = hashedPassword;
       next();
     });
   });   
});



// replace this with a 'pre save method'
// UserSchema.pre('save', function(next) {
//    var user = this;

//    if (!user.isModified('password')) return next();

//    // if(!this._passwordconfirmation || user._passwordconfirmation !== user.password) {
//    //   var err = new mongoose.Error.ValidationError();
//    //   err.errors.password = "passwords to not match";
//    //   // var err = new Error();
//    //   // err.message = "passwords do not match";
//    //   next(err);
//    // }




//    // Generate a salt, with a salt_work_factor of 5
//    bcrypt.genSalt(5, function(err, salt) {
//      if (err) return next(err);

//      // Hash the password using our new salt
//      bcrypt.hash(user.password, salt, function(err, hash) {
//        if (err) return next(err);

//        // Override the cleartext password with the hashed one
//        user.password = hash;
//        next();
//      });
//    });
//  });


module.exports = mongoose.model('User', UserSchema);