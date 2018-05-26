const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../database/mongodatabase.js');
const bcrypt = require('bcrypt');


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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(null, user);
  });
});

module.exports = passport;