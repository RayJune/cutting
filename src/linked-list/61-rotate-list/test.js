const rotateRight = require('./index');
// const rotateRight = require('./template');
// const rotateRight = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define rotateRight function', () => {
    expect(typeof rotateRight).toBe('function');
});

test('head = [], k = 1', () => {
    expect(rotateRight(buildListNode([]), 1))
        .toEqual(buildListNode([]));
});

test('head = [1], k = 2', () => {
    expect(rotateRight(buildListNode([1])))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2, 3, 4, 5], k = 2', () => {
    expect(rotateRight(buildListNode([1, 2, 3, 4, 5]), 2))
        .toEqual(buildListNode([4, 5, 1, 2, 3]));
});

test('head = [0, 1, 2], k = 4', () => {
    expect(rotateRight(buildListNode([0, 1, 2]), 4))
        .toEqual(buildListNode([2, 0, 1]));
});

test('head = [1, 2], k = 4', () => {
    expect(rotateRight(buildListNode([1, 2]), 4))
        .toEqual(buildListNode([1, 2]));
});
