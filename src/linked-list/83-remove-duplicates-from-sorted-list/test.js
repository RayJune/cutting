const deleteDuplicates = require('./index');
// const deleteDuplicates = require('./template');
// const deleteDuplicates = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define deleteDuplicates function', () => {
    expect(typeof deleteDuplicates).toBe('function');
});

test('head = [1, 1, 2]', () => {
    const head = buildListNode([1, 1, 2]);
    const newHead = buildListNode([1, 2]);
    const result = deleteDuplicates(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});

test('head = [1, 1, 2, 3, 3]', () => {
    const head = buildListNode([1, 1, 2, 3, 3]);
    const newHead = buildListNode([1, 2, 3]);
    const result = deleteDuplicates(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});
