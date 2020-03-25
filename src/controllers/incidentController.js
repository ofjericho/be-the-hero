const connection = require('../database/connection');
const moment = require('moment');

module.exports = {

  async listAll(request, response){

    const incidents = await connection('incidents').select('*');

    return response.json(incidents);

  },

  async create(request, response){
    const {title, description, value} = request.body;
    const ong_id = request.headers.authorization;

    let date_created = moment().format();

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
      date_created
    });

  return response.json({
    msg: 'Caso ' + title + ' criado com sucesso.'
  });
    
  }

};