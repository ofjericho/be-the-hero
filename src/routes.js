const express = require('express');
const ongConroller = require('./controllers/ongController');
const routes = express.Router();

routes.get('/ongs', ongConroller.listAll);
routes.post('/ongs', ongConroller.create);

module.exports = routes;




