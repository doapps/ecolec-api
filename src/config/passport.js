const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');

module.exports = (app, passport) => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.app.authSecretKey,
      },
      (jwtPayload, done) => {
        // Here, can I get the user data from database?
        done(null, jwtPayload);
      },
    ),
  );
};
