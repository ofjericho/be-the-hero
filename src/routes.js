const express = require('express');
const ongConroller = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const routes = express.Router();

routes.get('/ongs', ongConroller.listAll);
routes.post('/ongs', ongConroller.create);

routes.get('/incidents', incidentController.listAll);
routes.post('/incidents',incidentController.create);

module.exports = routes;




