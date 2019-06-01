const express = require('express');
const ciudadanoController = require('../controllers/ciudadanoController');

const Router = express.Router();

Router.post('/login', ciudadanoController.login);

module.exports = Router;
