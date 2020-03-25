const connection = require('../database/connection');

/**
 * Retorna apenas os Casos da ONG Logada
 */

module.exports = {
  async index(request, response) {

    const ong_id = request.headers.authorization;    

    const incidents = await connection('incidents')
                      .where('ong_id', ong_id)
                      .select('*');

    return response.json(incidents);

  }
}