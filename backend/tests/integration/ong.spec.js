const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  it('should be able to create a new ONG', async () => {

    const response = await request(app)
      .post('/ongs')
      .send({
        	name: "AMB teste",
	        email: "contact@apad.org",
	        whatsapp: "11909878987",
	        city: "São Paulo",
	        uf: "SP"
      });

      expect(response.body).toHaveProperty('id')
  });
});