const rotateRight = require('./index');
// const rotateRight = require('./template');
// const rotateRight = require('./template-zh');
const buildListNode = require('utils/buildListNode');

test('define rotateRight function', () => {
    expect(typeof rotateRight).toBe('function');
});

test('head = [], k = 1', () => {
    const head = buildListNode([]);

    expect(rotateRight(head, 1))
        .toEqual(buildListNode([]));
});

test('head = [1], k = 2', () => {
    const head = buildListNode([1]);

    expect(rotateRight(head, 2))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2, 3, 4, 5], k = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(rotateRight(head, 2))
        .toEqual(buildListNode([4, 5, 1, 2, 3]));
});

test('head = [0, 1, 2], k = 4', () => {
    const head = buildListNode([0, 1, 2]);

    expect(rotateRight(head, 4))
        .toEqual(buildListNode([2, 0, 1]));
});

test('head = [1, 2], k = 4', () => {
    const head = buildListNode([1, 2]);

    expect(rotateRight(head, 4))
        .toEqual(buildListNode([1, 2]));
});
