const fs = require('fs');
const Entry = require('../models/entry.js');

describe('Entry model', () => {
    
    test('Should make an instance of an Entry', () => {
        // To use as a test journal entry
        const entryData = JSON.parse(fs.readFileSync('./server/data/data.json'))[0];

        const entry = new Entry(entryData);

        expect(entry).toBeInstanceOf(Entry);
        expect(entry.id).toBe(1);
        expect(entry.entry).toBe('Testy');
        expect(entry.gifUrl).toBe('giphy.com');
        expect(entry.likeEmoji).toBe('25');
        expect(entry.cryEmoji).toBe('17');
        expect(entry.shockEmoji).toBe('6');
        expect(entry.comment[0].comment).toBe('testo');
    })
})
