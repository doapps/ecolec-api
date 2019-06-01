const express = require('express');
const setupRoutes = require('./setupRoutes');
const filesRoutes = require('./filesRoutes');
const notificationRoutes = require('./notificationRoutes');

const ciudadanoRoutes = require('./ciudadanoRoutes');
const recolectorRoutes = require('./recolectorRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/ciudadano', ciudadanoRoutes);
Router.use('/recolector', recolectorRoutes);


Router.use('/setup', setupRoutes);
Router.use('/sync', filesRoutes);
Router.use('/notification', notificationRoutes);

module.exports = Router;
