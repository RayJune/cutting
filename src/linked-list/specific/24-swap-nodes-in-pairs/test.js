const swapPairs = require('./index');
// const swapPairs = require('./template');
// const swapPairs = require('./template-zh');
const buildListNode = require('utils/buildListNode');

test('define swapPairs function', () => {
    expect(typeof swapPairs).toBe('function');
});

test('head = []', () => {
    const head = buildListNode([]);

    expect(swapPairs(head)).toEqual(head);
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(swapPairs(head)).toEqual(head);
});

test('head = [1, 2, 3, 4]', () => {
    const head = buildListNode([1, 2, 3, 4]);
    const newHead = buildListNode([2, 1, 4, 3]);

    expect(swapPairs(head)).toEqual(newHead);
});
