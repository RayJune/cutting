// const recoverTree = require('./index');
// const recoverTree = require('./optimize');
const recoverTree = require('./optimize2');
// const recoverTree = require('./template');
// const recoverTree = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define recoverTree function', () => {
    expect(typeof recoverTree).toBe('function');
});

test('root = [1, 3, null, null, 2]', () => {
    const root = buildBinaryTree([1, 3, null, null, 2]);

    recoverTree(root)
    expect(root).toEqual(buildBinaryTree([3, 1, null, null, 2]));
});

test('root = [3, 1, 4, null, null, 2]', () => {
    const root = buildBinaryTree([3, 1, 4, null, null, 2]);

    recoverTree(root)
    expect(root).toEqual(buildBinaryTree([2, 1, 4, null, null, 3]));
});
