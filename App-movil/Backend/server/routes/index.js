const express = require('express');
const app = express();

app.use('/deteccion', require('./deteccion'));
app.use('/usuario', require('./usuario'));
app.use(require('./upload'));
app.use(require('./imagen'));

module.exports = app;