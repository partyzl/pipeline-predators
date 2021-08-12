/**
 * @jest-environment jsdom
 */

global.fetch = require('jest-fetch-mock');
let scripts;

describe('scripts', () => {
    beforeEach(() => {
        getEntries = require('../script1.js');
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('getEntries', () => {
            test('Makes a get request to /home', () => {
                getEntries();
                console.log(fetch.mock.calls[0][0]);
                expect(fetch.mock.calls[0][0]).toMatch(/home$/);
            })
        })
    })
})
