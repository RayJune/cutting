// const inorderTraversal = require('./index');
const inorderTraversal = require('./iterate');
// const inorderTraversal = require('./optimize');
// const inorderTraversal = require('./template');
// const inorderTraversal = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

test('define inorderTraversal function', () => {
    expect(typeof inorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(inorderTraversal(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(inorderTraversal(buildBinaryTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(inorderTraversal(buildBinaryTree([1, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    expect(inorderTraversal(buildBinaryTree([1, null, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    expect(inorderTraversal(buildBinaryTree([1, null, 2, 3]))).toEqual([1, 3, 2]);
});

test('root = [1, 2, 3, 4, 5]', () => {
    expect(inorderTraversal(buildBinaryTree([1, 2, 3, 4, 5]))).toEqual([4, 2, 5, 1, 3]);
});
