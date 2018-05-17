const passportJwt = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../database/mongodatabase.js');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey =  "4mm0n1qu3!";
passportJwt.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.email}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passportJwt;