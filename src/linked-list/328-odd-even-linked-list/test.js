const oddEvenList = require('./index');
// const oddEvenList = require('./template');
// const oddEvenList = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define oddEvenList function', () => {
    expect(typeof oddEvenList).toBe('function');
});

test('head = []', () => {
    const head = buildListNode([]);

    expect(oddEvenList(head))
        .toEqual(buildListNode([]));
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(oddEvenList(head))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);

    expect(oddEvenList(head))
        .toEqual(buildListNode([1, 2]));
});

test('head = [1, 2, 3]', () => {
    const head = buildListNode([1, 2, 3]);

    expect(oddEvenList(head))
        .toEqual(buildListNode([1, 3, 2]));
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(oddEvenList(head))
        .toEqual(buildListNode([1, 3, 5, 2, 4]));
});
