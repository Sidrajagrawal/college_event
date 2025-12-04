const express = require('express');
const route = express.Router();
const authRoute = require('./auth');
const UploadEventRoute = require('./UploadEvent');

route.use('/auth',authRoute);
route.use('/upload-event',UploadEventRoute);

module.exports = route