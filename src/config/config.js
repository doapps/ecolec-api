// Basic configuration
const dotenv = require('dotenv');

// Must create a .env.${env} file which saves all your private keys
// example: .env.development which contains all dev configuration

// Load environment dependent configuration
const env = process.env.NODE_ENV || 'development';
const dotenvFile = `${__dirname}/../../.env.${env}`;
dotenv.config({ path: dotenvFile });

const config = {
  app: {
    name: process.env.PROJECT_NAME || 'Proyect Name',
    authSecretKey: process.env.AUTH_SECRET_KEY || 'yeeapikey',
  },
  appSettings: {
    publicIp: process.env.PUBLIC_IP || 'http://0.0.0.0:4000',
    timeZone: process.env.TIME_ZONE || 'America/Lima',
  },
  appHost: '0.0.0.0',
  appPort: process.env.PORT || '4000',
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || '0.0.0.0',
    port: process.env.DB_PORT || '3306',
    database: process.env.DB_DATABASE || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    debugMode: process.env.DB_DEBUG_MODE || false,
  },
};

module.exports = config;
