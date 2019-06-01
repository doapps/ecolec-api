const express = require('express');
const filesController = require('../controllers/filesController');

const Router = express.Router();

Router.post('/', filesController.getFiles);

module.exports = Router;
