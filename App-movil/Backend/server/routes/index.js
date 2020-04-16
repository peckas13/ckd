const express = require('express');
const app = express();

app.use('/deteccion', require('./deteccion'));
app.use('/usuario', require('./usuario'));

module.exports = app;