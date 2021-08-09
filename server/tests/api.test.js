const request = require('supertest');
const server = require('../app.js');

describe('API Server', () => {
    
    const port = 5000;
    let api;

    beforeAll(() => {
        api = server.listen(port, () => 
            console.log(`Test server running on port ${port}`)
        );
    });

    afterAll((done) => {
        console.log('Stopping the test server.');
        api.close(done);
    });

    test('Responds to get / with status 200', (done) => {
        request(api).get('/').expect(200).expect('Shh you shouldn\'t be here', done);
    });

    test('Responds to get /entries with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });
});
