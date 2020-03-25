const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();


routes.get('/ongs', async (request, response) => {

  const ongs = await connection('ongs').select('*');

  return response.json(ongs);

});

routes.post('/ongs', async (request, response) => {

  const {name, email, whatsapp, city, uf} = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

   await connection('ongs').insert({
    id, 
    email,
    name, 
    whatsapp,
    city,
    uf,
  });

  return response.json({
    msg: 'ONG ' + name + ' id - ' + id +' incluida com sucesso'
  });

});




module.exports = routes;




