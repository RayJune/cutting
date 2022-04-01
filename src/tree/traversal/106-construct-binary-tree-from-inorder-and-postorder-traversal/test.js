const buildTree = require('./index');
// const buildTree = require('./optimize');
// const buildTree = require('./template');
// const buildTree = require('./template-zh');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define buildTree function', () => {
    expect(typeof buildTree).toBe('function');
});

test('inorder = [], postorder = []', () => {
    expect(buildTree([], [])).toBe(buildBinaryTree([]));
});

test('inorder = [-1], postorder = [-1]', () => {
    expect(buildTree([-1], [-1])).toEqual(buildBinaryTree([-1]));
});

test('inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]', () => {
    const inorder = [9, 3, 15, 20, 7];
    const postorder = [9, 15, 7, 20, 3];

    expect(buildTree(inorder, postorder)).toEqual(buildBinaryTree([3, 9, 20, null, null, 15, 7]));
});
