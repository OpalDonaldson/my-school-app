const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
//
const User = require('../database/mongodatabase.js');
const bcrypt = require('bcrypt');
// :::: THIS IS FOR THE PASSPORT-JWT :::: //
const secret = { "passKey": "4mm0n1qu3!" }
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret["passKey"];

passport.use(new LocalStrategy({
  usernameField: 'email', 
  passwordField: 'password'
},
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!bcrypt.compareSync(password, user.password )) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  console.log("Success 2");
  User.findOne({ id: jwt_payload.email }, function(err, user) {
      if (err) {
          return done(err, false);
      }
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  });
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(null, user);
  });
});

module.exports = passport;