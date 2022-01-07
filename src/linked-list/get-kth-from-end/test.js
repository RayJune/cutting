const getKthFromEnd = require('./index');
// const getKthFromEnd = require('./template');
const buildListNode = require('../../utils/buildListNode');

test('define getKthFromEnd function', () => {
    expect(typeof getKthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    const head = buildListNode([1]);

    expect(getKthFromEnd(head, 1)).toBe(head);
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    expect(getKthFromEnd(buildListNode([1, 2, 3, 4, 5]), 2))
        .toEqual(buildListNode([4, 5]));
});
