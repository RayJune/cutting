const middleNode = require('./index');
// const middleNode = require('./template');
// const middleNode = require('./template-zh');
const buildListNode = require('../../../utils/buildListNode');

test('define middleNode function', () => {
    expect(typeof middleNode).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(middleNode(head))
        .toEqual(buildListNode([3, 4, 5]));
});

test('head = [1, 2, 3, 4, 5, 6]', () => {
    const head = buildListNode([1, 2, 3, 4, 5, 6]);

    expect(middleNode(head))
        .toEqual(buildListNode([4, 5, 6]));
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(middleNode(head)).toEqual(buildListNode([1]));
});
