const express = require('express');

//Controllers
const sessionController = require('./controllers/sessionController');
const ongConroller = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const routes = express.Router();

//Routes
routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongConroller.index);
routes.post('/ongs', ongConroller.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;




