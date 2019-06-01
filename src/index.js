const { Server } = require('http');
const app = require('./app');
const config = require('./config/config');
const appHelper = require('./utils/helpers/app');

const server = Server(app);

server.on('error', appHelper.onError(server));
server.on('listening', appHelper.onListening(server));

server.listen(config.appPort, config.appHost);
