const removeNthFromEnd = require('./index');
// const removeNthFromEnd = require('./template');
// const removeNthFromEnd = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define removeNthFromEnd function', () => {
    expect(typeof removeNthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    expect(removeNthFromEnd(buildListNode([1]), 1)).
        toEqual(buildListNode([]));
});

test('head = [1, 2], n = 1', () => {
    expect(removeNthFromEnd(buildListNode([1, 2]), 1))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    expect(removeNthFromEnd(buildListNode([1, 2, 3, 4, 5]), 2))
        .toEqual(buildListNode([1, 2, 3, 5]));
});
