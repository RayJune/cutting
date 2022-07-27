const removeElements = require('./index');
// const removeElements = require('./template');
// const removeElements = require('./template-zh');
const buildListNode = require('utils/buildListNode');

test('define removeElements function', () => {
    expect(typeof removeElements).toBe('function');
});

test('head = [1, 2, 6, 3, 4, 5, 6], val = 6', () => {
    const head = buildListNode([1, 2, 6, 3, 4, 5, 6]);

    expect(removeElements(head, 6))
        .toEqual(buildListNode([1, 2, 3, 4, 5]));
});

test('head = [], val = 1', () => {
    const head = buildListNode([]);

    expect(removeElements(head, 1)).toEqual(buildListNode([]));
});

test('head = [7, 7, 7, 7], val = 7', () => {
    const head = buildListNode([7, 7, 7, 7]);

    expect(removeElements(head, 7)).toEqual(buildListNode([]));
});
