/**
 * @jest-environment jsdom
 */

const exp = require('constants');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../html/new-post.html'), 'utf8');


describe('new-post.html', () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('Title exists', () => {
            const title = document.querySelector('head > title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe('Create a New Post');
        })
    })

    describe('body', () => {
        describe('Buttons', () => {
            let homeBtn;
            let createBtn;
            let postBtn;

            beforeEach(() => {
                homeBtn = document.getElementById('Home-Button');
                createBtn = document.getElementById('Create-Entry-Button');
                postBtn = document.getElementById('Post-Button');
            })

            test('The buttons exist', () => {
                expect(homeBtn).toBeTruthy();
                expect(createBtn).toBeTruthy();
                expect(postBtn).toBeTruthy();
            })

            test('Buttons give info on what they do', () => {
                expect(homeBtn.textContent).toContain('Home');
                expect(createBtn.textContent).toContain('Create');
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
