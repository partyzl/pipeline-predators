const fs = require('fs');
const Comment = require('../models/comment.js');
const Entry = require('../models/entry.js');


describe('Comment model', () => {
    const testComment = new Comment({comment: 'Test Comment asdf'});

    test('Should make an instance of a Comment', () => {
        expect(testComment).toBeInstanceOf(Comment);
        expect(testComment.comment).toBe('Test Comment asdf');
    })
})

describe('Entry model', () => {
    
    // To use as a test journal entry
    const entryData = JSON.parse(fs.readFileSync('./server/data/data.json'))[0];
    const entry = new Entry(entryData);

    test('Should make an instance of an Entry', () => {
        expect(entry).toBeInstanceOf(Entry);
        expect(entry.id).toBe(1);
        expect(entry.entry).toBe('Testy');
        expect(entry.gifUrl).toBe('giphy.com');
        expect(entry.likeEmoji).toBe('25');
        expect(entry.cryEmoji).toBe('17');
        expect(entry.shockEmoji).toBe('6');
        expect(entry.comment[0].comment).toBe('testo');
    })

    test('Should create a new comment', () => {
        const newComment =  entry.newComment({comment: 'Test Comment for New Comment Test'});
        expect(newComment.comment).toBe('Test Comment for New Comment Test');
    })
})
