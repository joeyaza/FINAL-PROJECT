var express    = require('express');
var path       = require('path');
var cors       = require('cors');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
// request is used to make requests to external servers like facebook and twitter's APIs
var request = require('request-promise');
// qs is used to decode querystrings into objects foo=1&bar=2 becomes { foo: 1, bar: 2 }
var app        = express();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ghost-stories');
var routes     = require('./config/routes');
var User = require('./models/User');
var config = require('./config/config.js');

app.use(cors({
  origin: 'http://localhost:8000',
  credentials: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


app.post('/auth/facebook', function(req, res) {
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.GHOSTFACEBOOK_API_SECRET,
    redirect_uri: config.appUrl + "/"
  };

  request.get({ url: config.oauth.facebook.accessTokenUrl, qs: params, json: true })
      .then(function(accessToken) {
        // step 2, we use the access token to get the user's profile data from facebook's api
        return request.get({ url: config.oauth.facebook.profileUrl, qs: accessToken, json: true });
      })
      .then(function(profile) {
        // step 3, we try to find a user in our database by their email
        return User.findOne({ email: profile.email })
          .then(function(user) {
            // if we find the user, we set their facebookId and picture to their profile data
            if(user) {
              user.facebookId = profile.id;
              user.picture = user.picture || profile.picture.data.url;
            }
            else {
              // otherwise, we create a new user record with the user's profile data from facebook
              user = new User({
                facebookId: profile.id,
                name: profile.name,
                picture: profile.picture.data.url,
                email: profile.email
              });
            }
            // either way, we save the user record
            return user.save();
          })
        })
        .then(function(user) {
          // step 4, we create a JWT and send it back to our angular app
          var token = jwt.sign(user, config.secret, { expiresIn: '24h' });
          return res.send({ token: token });
        })
        .catch(function(err) {
          // we handle any errors here
          return res.status(500).json({ error: err });
        });
  });


app.listen(3000);
console.log("app is listening .....!")