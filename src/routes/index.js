const express = require('express');
const setupRoutes = require('./setupRoutes');
const filesRoutes = require('./filesRoutes');
const notificationRoutes = require('./notificationRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/setup', setupRoutes);
Router.use('/sync', filesRoutes);
Router.use('/notification', notificationRoutes);

module.exports = Router;
