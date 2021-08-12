/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('new-post.html', () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('Title exists', () => {
            const title = document.querySelector('head > title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe('Pipeline Predators');
        })
    })
    
    describe('h1', () => {
        let heading;

        test('h1 exists and encourages user to make a post', () => {
            heading = document.querySelector('section > h1');
            expect(heading).toBeTruthy();
            const headingLower = heading.textContent.toLowerCase();
            expect(headingLower).toContain('make');
            expect(headingLower).toContain('post');
        })
    })

    describe('body', () => {
        describe('Post Button', () => {
            let postBtn;

            beforeEach(() => {
                postBtn = document.getElementById('Post-Button');
            })

            test('The buttons exist', () => {
                expect(postBtn).toBeTruthy();
            })

            test('Buttons give info on what they do', () => {
                expect(postBtn.textContent).toContain('Post');
            })
        })

        describe('Journal Entry Section', () => {
            let label;
            let textarea;
            let small;

            test('textarea exists and has max character length of 280', () => {
                textarea = document.getElementById('entry');
                expect(textarea).toBeTruthy();
                expect(textarea.getAttribute('maxlength')).toBe('280');
            })

            test('textarea has a label', () => {
                label = document.querySelector('[for="entry"]');
                expect(label).toBeTruthy();
            })

            test('small tag', () => {
                small = document.getElementById('entryHelp');
                expect(small).toBeTruthy();
                expect(small.textContent).toContain('characters remaining');
            })
        })

    })
})
