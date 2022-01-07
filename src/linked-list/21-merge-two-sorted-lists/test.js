// const mergeTwoLists = require('./index');
const mergeTwoLists = require('./optimize');
// const mergeTwoLists = require('./template');
// const mergeTwoLists = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define mergeTwoLists function', () => {
    expect(typeof mergeTwoLists).toBe('function');
});

test('l1 = [1, 2, 4], l2 = [1, 3, 4]', () => {
    expect(mergeTwoLists(buildListNode([1, 2, 4]), buildListNode([1, 3, 4])))
        .toEqual(buildListNode([1, 1, 2, 3, 4, 4]));
});

test('l1 = [0], l2 = []', () => {
    expect(mergeTwoLists(buildListNode([0]), buildListNode([])))
        .toEqual(buildListNode([0]));
});

test('l1 = [], l2 = []', () => {
    expect(mergeTwoLists(buildListNode([]), buildListNode([])))
        .toEqual(buildListNode([]));
});

test('l1 = [], l2 = [0]', () => {
    expect(mergeTwoLists(buildListNode([]), buildListNode([0])))
        .toEqual(buildListNode([0]));
});
