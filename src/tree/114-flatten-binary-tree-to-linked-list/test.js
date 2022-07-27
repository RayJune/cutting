// const flatten = require('./index');
// const flatten = require('./optimize');
const flatten = require('./optimize2');
// const flatten = require('./template');
// const flatten = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define flatten function', () => {
    expect(typeof flatten).toBe('function');
});

test('root = []', () => {
    const root = buildBinaryTree([]);

    flatten(root);
    expect(root).toBe(buildBinaryTree([]));
});

test('root = [0]', () => {
    const root = buildBinaryTree([0]);

    flatten(root);
    expect(root).toEqual(buildBinaryTree([0]));
});

test('root = [1, 2, 5, 3, 4, null, 6]', () => {
    const root = buildBinaryTree([1, 2, 5, 3, 4, null, 6]);

    flatten(root);
    expect(root).toEqual(buildBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]));
});
