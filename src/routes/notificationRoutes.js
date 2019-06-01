const express = require('express');
const notificationController = require('../controllers/notificationController');

const Router = express.Router();

Router.post('/sample', notificationController.sample);

module.exports = Router;
