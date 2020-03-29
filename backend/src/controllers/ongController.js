const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

  async index(request, response) {

    const ongs = await connection('ongs').select('*');

    return response.json(ongs);

  },
  
  async create(request, response) {

    const {name, email, whatsapp, city, uf} = request.body;
    /**
     * Criação do Id da tabela ONG 
     */
    const id = generateUniqueId();

    await connection('ongs').insert({
      id, 
      email,
      name, 
      whatsapp,
      city,
      uf,
    });

    return response.json({
      id: id,
      msg: 'ONG ' + name + ' criada com sucesso.'
    });
  }
};