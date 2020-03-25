const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  async listAll(request, response) {
    
  const ongs = await connection('ongs').select('*');

  return response.json(ongs);

  },
  
  async create(request, response) {

    const {name, email, whatsapp, city, uf} = request.body;
    /**
     * Criação do Id da tabela ONG 
     */
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
      msg: 'ONG ' + name + ' criada com sucesso. ID - ' + id
    });
  }
};