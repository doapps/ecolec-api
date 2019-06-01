const express = require('express');
const passport = require('passport');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Node Express Boilerplate API');
});

require('./config/db')(app);
require('./config/express')(app);
require('./config/passport')(app, passport);
require('./config/routes')(app);

module.exports = app;
