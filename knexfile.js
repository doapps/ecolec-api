const config = require('./src/config/config');

const {
  db: { host, port, database, user, password },
} = config;

const options = {
  client: 'mysql',
  connection: {
    host,
    port,
    database,
    user,
    password,
    charset: 'utf8',
  },
  debug: process.env.DB_DEBUG_MODE,
  pool: {
    afterCreate: (connection, cb) => {
      cb(null, connection);
    },
  },
  migrations: {
    directory: `${__dirname}/db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/db/seeds`,
  },
};

module.exports = options;
