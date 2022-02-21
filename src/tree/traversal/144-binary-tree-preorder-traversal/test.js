// const preorderTraversal = require('./index');
const preorderTraversal = require('./iterate');
// const preorderTraversal = require('./optimize');
// const preorderTraversal = require('./template');
// const preorderTraversal = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

test('define preorderTraversal function', () => {
    expect(typeof preorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(preorderTraversal(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(preorderTraversal(buildBinaryTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(preorderTraversal(buildBinaryTree([1, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2]', () => {
    expect(preorderTraversal(buildBinaryTree([1, null, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    expect(preorderTraversal(buildBinaryTree([1, null, 2, 3]))).toEqual([1, 2, 3]);
});
