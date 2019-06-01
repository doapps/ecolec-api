const express = require('express');
const recolectorController = require('../controllers/recolectorController');

const Router = express.Router();

Router.post('/login', recolectorController.login);
Router.get('/puntos-recojo', recolectorController.listarPuntosRecojo);
Router.post('/aceptar-recojo', recolectorController.aceptarRecojo);

module.exports = Router;
