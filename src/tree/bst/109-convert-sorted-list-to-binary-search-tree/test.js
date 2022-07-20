// const sortedListToBST = require('./index');
const sortedListToBST = require('./optimize');
// const sortedListToBST = require('./template');
// const sortedListToBST = require('./template-zh');
const buildListNode = require('../../../utils/buildListNode');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define sortedListToBST function', () => {
    expect(typeof sortedListToBST).toBe('function');
});

test('head = [-10, -3, 0, 5, 9]', () => {
    const head = buildListNode([-10, -3, 0, 5, 9]);

    expect(sortedListToBST(head))
        .toEqual(buildBinaryTree([0, -3, 9, -10, null, 5]));
});

test('nums = []', () => {
    const head = buildListNode([]);

    expect(sortedListToBST(head))
        .toEqual(buildBinaryTree([]));
});
