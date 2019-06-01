const Knex = require('knex');
const KnexFile = require('../../knexfile');

module.exports = (app) => {
  const db = Knex(KnexFile);

  app.db = db; // eslint-disable-line
};
