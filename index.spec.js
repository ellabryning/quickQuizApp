const test = require('tape');
const automage = require('automage');

/* Index */ 

test.only('Index Page - Can view title ', async t => {
    t.plan(2);
    
    t.ok(await automage.click(dom.window.document, 'Play', 'button'), 'Click play button');
    t.equal(dom.window.document.title, 'Quick Quiz', 'Navigated to game page');
});
    
test('Index Page - Can click play button', async t => {
    t.plan(1)
});

test('Can click highscore button', async => {
    t.plan(1)
});

  /* Game Page */

  /* End Page */