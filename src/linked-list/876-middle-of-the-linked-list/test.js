const middleNode = require('./index');
// const middleNode = require('./template');
// const middleNode = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define middleNode function', () => {
    expect(typeof middleNode).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    expect(middleNode(buildListNode([1, 2, 3, 4, 5])))
        .toEqual(buildListNode([3, 4, 5]));
});

test('head = [1, 2, 3, 4, 5, 6]', () => {
    expect(middleNode(buildListNode([1, 2, 3, 4, 5, 6])))
        .toEqual(buildListNode([4, 5, 6]));
});

test('head = [1]', () => {
    expect(buildListNode([1])).toEqual(buildListNode([1]));
});
