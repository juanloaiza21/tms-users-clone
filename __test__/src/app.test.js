const app = require('../../src/app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const response = await request.get('/')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Api Create Micro Services!')

    // ...
    done()
  })