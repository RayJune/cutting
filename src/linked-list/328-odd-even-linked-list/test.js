const oddEvenList = require('./index');
// const oddEvenList = require('./template');
// const oddEvenList = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define oddEvenList function', () => {
    expect(typeof oddEvenList).toBe('function');
});

test('head = []', () => {
    expect(oddEvenList(buildListNode([])))
        .toEqual(buildListNode([]));
});

test('head = [1]', () => {
    expect(oddEvenList(buildListNode([1])))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2]', () => {
    expect(oddEvenList(buildListNode([1, 2])))
        .toEqual(buildListNode([1, 2]));
});

test('head = [1, 2, 3]', () => {
    const head = buildListNode([1, 2, 3]);
    const newHead = buildListNode([1, 3, 2]);
    const result = oddEvenList(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([1, 3, 5, 2, 4]);
    const result = oddEvenList(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});
