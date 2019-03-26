// var LocalStrategy    = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var userStore = new(require('../store/UserStore'))();

var config = require('../../config')[ /* process.env.NODE_ENV ||  */ "dev"];

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        userStore.getById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
            clientID: config.auth.google.clientId,
            clientSecret: config.auth.google.clientSecret,
            callbackURL: `${config.client.protocol}://${config.client.address}:${config.client.port}`//${config.client.urlPrefix}${config.auth.google.callbackURL}`
        },
        function (token, refreshToken, profile, done) {

            process.nextTick(function () {

                // try to find the user based on their google id
                userStore.getOne({
                    'googleId': profile.id
                }, function (err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, user);
                    } else {
                        userStore.save({
                            googleId: profile.id,
                            googleToken: token,
                            googleName: profile.displayName,
                            email: profile.emails[0].value
                        }, function (err, newUser) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });

        }));

};