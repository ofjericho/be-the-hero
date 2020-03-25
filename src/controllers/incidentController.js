const connection = require('../database/connection');
const moment = require('moment');

module.exports = {

  async index(request, response){

    const {page = 1 } = request.query;

    const incidents = await connection('incidents')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    return response.json(incidents);

  },

  async create(request, response){
    const {title, description, value} = request.body;
    const ong_id = request.headers.authorization;

    /**
     * Utilização do Moment para captura de DateTime Corrente.
     */
    const date_created = moment().format();

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
      date_created
    });

    return response.json({
      id: id,
      msg: 'Caso ' + title + ' criado com sucesso'
    });
  },

  async delete(request, response){
    const {id} = request.params;
    const ong_id = request.headers.authorization;
    /**
     * Verificar se o Caso pertence a ONG logada
     * 
     * Caso não seja a mesma ONG retornar 401 - Unauthorized
     * Senão retornar 204 - No Content.
     * */
     
    const incident = await connection('incidents')
                    .where('id', id)
                    .select('ong_id')
                    .first();
      
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({error: 'Operação não permitida.'});
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();

    /** Tentativa Try Catch 

    await connection('incidents').where('id', id).delete()
    .then(() => {response.status(204).send()})
    .catch((err) => {console.error('erro'); throw err})

    */
    
  }

};