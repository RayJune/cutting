const minDepth = require('./index');
// const minDepth = require('./iterate');
// const minDepth = require('./iterate2');
// const minDepth = require('./template');
// const minDepth = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define minDepth function', () => {
    expect(typeof minDepth).toBe('function');
});

test('root = []', () => {
    expect(minDepth(buildBinaryTree([]))).toBe(0);
});

test('root = [0]', () => {
    expect(minDepth(buildBinaryTree([0]))).toBe(1);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(minDepth(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(2);
});

test('root = [2, null, 3, null, 4, null, 5, null, 6]', () => {
    expect(minDepth(buildBinaryTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5);
});

test('root = [1, 2]', () => {
    expect(minDepth(buildBinaryTree([1, 2]))).toBe(2);
});
