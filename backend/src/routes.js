const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

//Controllers
const sessionController = require('./controllers/sessionController');
const ongConroller = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const routes = express.Router();

//Routes
routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongConroller.index);

routes.post('/ongs', celebrate({

  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required,
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)

  })}) ,ongConroller.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),

  })

}) ,incidentController.index);


routes.post('/incidents',incidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })


}) ,incidentController.delete);

routes.get('/profile', celebrate({

  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),

}) ,profileController.index);

module.exports = routes;




