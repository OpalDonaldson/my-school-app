const passportjwt = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

const User = require('../database/mongodatabase.js');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

passportjwt.use(new JwtStrategy(opts, function(jwt_payload, done) {
  return User.findOne({ _id: jwt_payload.sub}, function(err, user) {
    if (err || !user) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));
   

module.exports = passportjwt;