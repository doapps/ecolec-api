const express = require('express');
const recolectorController = require('../controllers/recolectorController');

const Router = express.Router();

Router.post('/login', recolectorController.login);

module.exports = Router;
