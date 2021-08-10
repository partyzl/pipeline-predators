/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../html/new-post.html'), 'utf8');


describe('new-post.html', () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe('head', () => {
        test('Title exists', () => {
            const title = document.querySelector('head > title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe('Create a New Post');
        })
    })
})
