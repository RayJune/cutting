// const buildTree = require('./index');
const buildTree = require('./optimize');
// const buildTree = require('./template');
// const buildTree = require('./template-zh');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define buildTree function', () => {
    expect(typeof buildTree).toBe('function');
});

test('preorder = [], inorder = []', () => {

    expect(buildTree([], [])).toBe(buildBinaryTree([]));
});

test('preorder = [-1], inorder = [-1]', () => {
    expect(buildTree([-1], [-1])).toEqual(buildBinaryTree([-1]));
});

test('preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];

    expect(buildTree(preorder, inorder)).toEqual(buildBinaryTree([3, 9, 20, null, null, 15, 7]));
});
