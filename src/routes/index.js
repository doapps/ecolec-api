const express = require('express');
const setupRoutes = require('./setupRoutes');
const filesRoutes = require('./filesRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/setup', setupRoutes);
Router.use('/sync', filesRoutes);

module.exports = Router;
