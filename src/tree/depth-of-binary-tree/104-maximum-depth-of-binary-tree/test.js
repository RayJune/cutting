const maxDepth = require('./index');
// const maxDepth = require('./iterate');
// const maxDepth = require('./template');
// const maxDepth = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define maxDepth function', () => {
    expect(typeof maxDepth).toBe('function');
});

test('root = []', () => {
    expect(maxDepth(buildBinaryTree([]))).toBe(0);
});

test('root = [0]', () => {
    expect(maxDepth(buildBinaryTree([0]))).toBe(1);
});

test('root = [1, null, 2]', () => {
    expect(maxDepth(buildBinaryTree([1, null, 2]))).toBe(2);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(maxDepth(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
});
