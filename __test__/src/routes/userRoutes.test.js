const app = require('../../../src/app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('Users route its working', async done => {
    // Sends GET Request to /test endpoint
    const response = await request.post('/user/create')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Usuario creado');
    // ...
    done()
  })