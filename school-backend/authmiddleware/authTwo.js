const passportjwt = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../database/mongodatabase.js');

const secret = { passKey: "4mm0n1qu3!" }
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret.passKey;

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