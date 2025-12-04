const express = require('express');
const route = express.Router();
const { uploadHandler } = require('../controller/uploadHandler')

route.post('/new', uploadHandler);

module.exports = route;
