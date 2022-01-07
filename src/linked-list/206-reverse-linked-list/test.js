const reverseList = require('./index');
// const reverseList = require('./recursion');
// const reverseList = require('./template');
// const reverseList = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define reverseList function', () => {
    expect(typeof reverseList).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    expect(reverseList(buildListNode([1, 2, 3, 4, 5])))
        .toEqual(buildListNode([5, 4, 3, 2, 1]));
});

test('head = [1, 2]', () => {
    expect(reverseList(buildListNode([1, 2])))
        .toEqual(buildListNode([2, 1]));
});

test('head = []', () => {
    expect(reverseList(buildListNode([])))
        .toEqual(buildListNode([]));
});
