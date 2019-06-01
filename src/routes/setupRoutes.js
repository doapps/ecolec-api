const express = require('express');
const setupController = require('../controllers/setupController');

const Router = express.Router();

Router.get('/', setupController.getInitialSetup);

module.exports = Router;
