const inorderTraversal = require('./index');
// const inorderTraversal = require('./iterate');
// const inorderTraversal = require('./optimize');
// const inorderTraversal = require('./template');
// const inorderTraversal = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define inorderTraversal function', () => {
    expect(typeof inorderTraversal).toBe('function');
});

test('root = []', () => {
    const root = buildBinaryTree([]);

    expect(inorderTraversal(root)).toEqual([]);
});

test('root = [1]', () => {
    const root = buildBinaryTree([1]);

    expect(inorderTraversal(root)).toEqual([1]);
});

test('root = [1, 2]', () => {
    const root = buildBinaryTree([1, 2]);

    expect(inorderTraversal(root)).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    const root = buildBinaryTree([1, null, 2]);

    expect(inorderTraversal(root)).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    const root = buildBinaryTree([1, null, 2, 3]);

    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
});

test('root = [1, 2, 3, 4, 5]', () => {
    const root = buildBinaryTree([1, 2, 3, 4, 5]);

    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 3]);
});
