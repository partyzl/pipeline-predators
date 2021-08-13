const request = require('supertest');
const fs = require('fs');
const server = require('../app.js');


describe('API Server', () => {
    
    const port = 5000;
    let api;
    let entryData;
    
    beforeAll(() => {
        api = server.listen(port, () => 
        console.log(`Test server running on port ${port}`)
        );
        // To use as test data for POST method in /home
        entryData = JSON.parse(fs.readFileSync('./server/data/data.json'))[0];
    });

    afterAll((done) => {
        console.log('Stopping the test server.');
        api.close(done);
    });

    test('Responds to get / with 200', (done) => {
        request(api).get('/').expect(200).expect('Shh you shouldn\'t be here', done);
    });
    
    test('Responds to get /home with 200', (done) => {
        request(api).get('/home').expect(200, done);
    });

    test('Responds to post /home with 201 and returns entry data', (done) => {
        request(api)
        .post('/home')
        .send(entryData) // Recall entryData is just some test data
        .set('Accept', 'application/json')
        .expect(201)
        .expect(entryData, done);
    });

    test('Responds to non existing paths with 404', (done) => {
        request(api).get('/asdf').expect(404, done);
    });

    test('Responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});
