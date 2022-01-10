const mergeTwoLists = require('./index');
// const mergeTwoLists = require('./template');
// const mergeTwoLists = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define mergeTwoLists function', () => {
    expect(typeof mergeTwoLists).toBe('function');
});

test('l1 = [1, 2, 4], l2 = [1, 3, 4]', () => {
    const l1 = buildListNode([1, 2, 4]);
    const l2 = buildListNode([1, 3, 4]);

    expect(mergeTwoLists(l1, l2))
        .toEqual(buildListNode([1, 1, 2, 3, 4, 4]));
});

test('l1 = [0], l2 = []', () => {
    const l1 = buildListNode([0]);
    const l2 = buildListNode([]);

    expect(mergeTwoLists(l1, l2))
        .toEqual(buildListNode([0]));
});

test('l1 = [], l2 = []', () => {
    const l1 = buildListNode([]);
    const l2 = buildListNode([]);

    expect(mergeTwoLists(l1, l2))
        .toEqual(buildListNode([]));
});

test('l1 = [], l2 = [0]', () => {
    const l1 = buildListNode([]);
    const l2 = buildListNode([0]);

    expect(mergeTwoLists(l1, l2))
        .toEqual(buildListNode([0]));
});
