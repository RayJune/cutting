const partition = require('./index');
// const partition = require('./template');
// const partition = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define partition function', () => {
    expect(typeof partition).toBe('function');
});

test('head = [], x = 1', () => {
    expect(partition(buildListNode([]), 1))
        .toEqual(buildListNode([]));
});

test('head = [1], x = 2', () => {
    expect(partition(buildListNode([1]), 2))
        .toEqual(buildListNode([1]));
});

test('head = [2, 1], x = 2', () => {
    expect(partition(buildListNode([2, 1]), 2))
        .toEqual(buildListNode([1, 2]));
});

test('head = [1, 4, 3, 2, 5, 2], x = 3', () => {
    expect(partition(buildListNode([1, 4, 3, 2, 5, 2]), 3))
        .toEqual(buildListNode([1, 2, 2, 4, 3, 5]));
});
