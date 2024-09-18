const express = require('express');
const route = express.Router();
const c = require('../controller/kingController');

route.get('/', c.index);

module.exports = route;
