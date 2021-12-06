// const postorderTraversal = require('./index');
const postorderTraversal = require('./iterate');
// const postorderTraversal = require('./template');
// const postorderTraversal = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

test('define postorderTraversal function', () => {
    expect(typeof postorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(postorderTraversal(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(postorderTraversal(buildBinaryTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(postorderTraversal(buildBinaryTree([1, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    expect(postorderTraversal(buildBinaryTree([1, null, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2, 3]', () => {
    expect(postorderTraversal(buildBinaryTree([1, null, 2, 3]))).toEqual([3, 2, 1]);
});
