'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mediaRoutes = require('./media/routes');

const app = express();

//Set up basic middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Which routes to use
app.use('/media', mediaRoutes);

module.exports = app;