const deleteDuplicates = require('./index');
// const deleteDuplicates = require('./template');
// const deleteDuplicates = require('./template-zh');
const buildListNode = require('utils/buildListNode');

test('define deleteDuplicates function', () => {
    expect(typeof deleteDuplicates).toBe('function');
});

test('head = [1, 1, 1, 2, 3]', () => {
    const head = buildListNode([1, 1, 1, 2, 3]);

    expect(deleteDuplicates(head))
        .toEqual(buildListNode([2, 3]));
});

test('head = [1, 2, 3, 3, 4, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 3, 4, 4, 5]);

    expect(deleteDuplicates(head))
        .toEqual(buildListNode([1, 2, 5]));
});

test('head = []', () => {
    const head = buildListNode([]);

    expect(deleteDuplicates(head)).toEqual(buildListNode([]));
});
