const test = require('tape');
const automage = require('automage');

const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const DOM = new JSDOM(html);
global.document = DOM.window.document;


test('Index Page - Correct title', async t => {
    t.plan(1);
    
    t.equal(global.document.title, 'Quick Quiz', 'Page title is correct');
});

test('Index Page - Play Button', async t => {
    t.plan(2);

    t.ok(await automage.click(global.document, 'Play', 'link'), 'can click play button');
    t.equal(await automage.get(global.document, 'Let\'s Play!', 'heading'), 'Navigated to game page');
  
});

