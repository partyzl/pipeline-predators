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
    
    let entries;
    let entryData;
    let entry;
    
    beforeEach(() => {
        // To use as a test journal entry
        entries = JSON.parse(fs.readFileSync('./server/data/data.json'));
        entryData = entries[0];
        entry = new Entry(entryData);
    })

    test('Should make an instance of an Entry', () => {
        expect(entry).toBeInstanceOf(Entry);
        expect(entry.id).toBe(1);
        expect(entry.entry).toBe('Testy');
        expect(entry.gifUrl).toBe('giphy.com');
        expect(entry.likeEmoji).toBe(25);
        expect(entry.cryEmoji).toBe(17);
        expect(entry.shockEmoji).toBe(6);
        expect(entry.comment[0].comment).toBe('testo');
    })

    test('Should create a new comment', () => {
        const newComment =  entry.newComment({comment: 'Test Comment for New Comment Test'});
        expect(newComment.comment).toBe('Test Comment for New Comment Test');
    })

    test('emojiCounter method should count up once for the correct emoji', () => {
        // Recall the emoji counts for entry are 25, 17 and 6 for like, cry and shock respectively
        entry.emojiCounter('likeEmoji');
        expect(entry.likeEmoji).toBe(26);
        expect(entry.cryEmoji).toBe(17);
        expect(entry.shockEmoji).toBe(6);

        entry.emojiCounter('cryEmoji');
        expect(entry.likeEmoji).toBe(26);
        expect(entry.cryEmoji).toBe(18);
        expect(entry.shockEmoji).toBe(6);

        entry.emojiCounter('shockEmoji');
        expect(entry.likeEmoji).toBe(26);
        expect(entry.cryEmoji).toBe(18);
        expect(entry.shockEmoji).toBe(7);
    })

    test('emojiCounter method should return the correct error for an incorrect emoji', () => {
        expect(entry.emojiCounter('nonExistentEmoji').message).toBe('This is not one of the emojis');
    })

    test('getAllEntries should get all the entries', () => {
        const entries = Entry.getAllEntries();
        expect(entries[0]).toMatchObject(entry);
    })

    test('newEntry should create a new entry', () => {
        const newEntryData = {
            id: 76,
            entry: "Test new entry for new entry test",
            gifUrl:"gifs.com",
            likeEmoji:"90",
            cryEmoji:"865",
            shockEmoji:"44",
            comment: [
                {
                    comment: "new entry test comment"
                }
            ]
        }

        const newEntry = Entry.newEntry(newEntryData);

        expect(newEntry.id).toBe(entries.length + 1);
        expect(newEntry.entry).toBe("Test new entry for new entry test");
        expect(newEntry.gifUrl).toBe("gifs.com");
        expect(newEntry.likeEmoji).toBe(90);
        expect(newEntry.cryEmoji).toBe(865);
        expect(newEntry.shockEmoji).toBe(44);
        expect(newEntry.comment[0].comment).toBe("new entry test comment");
    })
})
