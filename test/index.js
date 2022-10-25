const test = require('tape');
const automage = require('automage');

const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');

const html = [
  fs.readFileSync('index.html', 'utf8'),
  fs.readFileSync('game.html', 'utf8'),
  fs.readFileSync('end.html', 'utf8')
];

const DOM = new JSDOM(html);
global.document = DOM.window.document;

/* Index */

test('Index Page - Correct title', async t => {
  t.plan(1);

  t.equal(global.document.title, 'Quick Quiz', 'Page title is correct');
});

test('Index Page - Play Button', async t => {
  t.plan(2);

  t.ok(await automage.click(global.document, 'Play', 'link'), 'can click play button');
  t.equal(global.document.title, 'Quick Quiz - Let\'s Play!', 'Navigated to game page');
});

test('Index Page - Highscores Button', async t => {
  t.plan(2);

  t.ok(await automage.click(global.document, 'Highscores', 'link'), 'can click highscores button');
  t.equal(global.document.title, 'Highscores', 'Navigated to highscores page');
});

/* Game */

test('Game Page - Correct title', async t => {
  t.plan(1);

  await automage.click(global.document, 'Play', 'link');
  await automage.get(global.document, 'Let\'s Play!', 'heading');

  t.equal(global.document.title, 'Quick Quiz - Let\'s Play!', 'Page title is correct');
});

/* End */

test('End Page - Correct title', async t => {
  t.plan(1);

  await automage.click(global.document, 'Play', 'link');
  await automage.click(global.document, 'question1', 'text');
  await automage.click(global.document, 'question1', 'text');
  await automage.click(global.document, 'question1', 'text');
  t.equal(global.document.title, 'End Game', 'Page title is correct');
});
