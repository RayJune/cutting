const deleteDuplicates = require('./index');
// const deleteDuplicates = require('./template');
// const deleteDuplicates = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define deleteDuplicates function', () => {
    expect(typeof deleteDuplicates).toBe('function');
});

test('head = [1, 1, 1, 2, 3]', () => {
    expect(deleteDuplicates(buildListNode([1, 1, 1, 2, 3])))
        .toEqual(buildListNode([2, 3]));
});

test('head = [1, 2, 3, 3, 4, 4, 5]', () => {
    expect(deleteDuplicates(buildListNode([1, 2, 3, 3, 4, 4, 5])))
        .toEqual(buildListNode([1, 2, 5]));
});

test('head = []', () => {
    expect(deleteDuplicates(buildListNode([]))).toEqual(buildListNode([]));
});
