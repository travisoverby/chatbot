'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, () => { console.log("Listening on port 3000"); });

