const express = require('express');
const ciudadanoController = require('../controllers/ciudadanoController');

const Router = express.Router();

Router.post('/login', ciudadanoController.login);
Router.post('/send-publication', ciudadanoController.crearPublicacion);
Router.get('/recolectores', ciudadanoController.listarRecolectores);
Router.get('/recolector/:id', ciudadanoController.detalleRecolector);

module.exports = Router;
