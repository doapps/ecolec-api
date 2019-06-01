const passport = require('passport');
const middlewareHelper = require('../helpers/middlewareHelper');
const { protectedRoutes, mixedRoutes } = require('../constants/api');

function shouldDeserialize(req, res, next) {
  const {
    path,
    method,
    headers: { authorization: token }
  } = req;

  const methodPath = `${method} ${path}`;

  // Si la ruta es privada, verificar token
  if (middlewareHelper.includes(path, protectedRoutes)) {
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }

  // Si la ruta es mixta (privada y publica), verificar token solo si lo mandan
  if (token && mixedRoutes.indexOf(path) !== -1) {
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }

  // Rutas publicas o mixta sin token, pasan al siguiente middleware
  return next();
}

module.exports = { shouldDeserialize };
