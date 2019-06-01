const ApiRoutes = require('../routes');

module.exports = (app) => {
  app.use('/', ApiRoutes);
};
