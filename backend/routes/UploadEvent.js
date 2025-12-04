const express = require('express');
const route = express.Router();
const { uploadHandler, getMyEvents } = require('../controller/uploadHandler')

route.post('/new', uploadHandler);
route.get('/my', getMyEvents);

module.exports = route;
