const express = require('express');
const ongConroller = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const routes = express.Router();

routes.get('/ongs', ongConroller.index);
routes.post('/ongs', ongConroller.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;




