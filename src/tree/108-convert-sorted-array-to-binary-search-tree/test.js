const sortedArrayToBST = require('./index');
// const sortedArrayToBST = require('./template');
// const sortedArrayToBST = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

test('define sortedArrayToBST function', () => {
    expect(typeof sortedArrayToBST).toBe('function');
});

test('nums = [-10, -3, 0, 5, 9]', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9]))
        .toEqual(buildBinaryTree([0, -3, 9, -10, null, 5]));
});

test('nums = [1, 3]', () => {
    expect(sortedArrayToBST([1, 3]))
        .toEqual(buildBinaryTree([3, 1]));
});
