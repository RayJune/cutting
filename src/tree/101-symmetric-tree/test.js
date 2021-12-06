// const isSymmetric = require('./index');
const isSymmetric = require('./iterate');
// const isSymmetric = require('./template');
// const isSymmetric = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

test('define isSymmetric function', () => {
    expect(typeof isSymmetric).toBe('function');
});

test('root = [1, 2, 2, 3, 4, 4, 3]', () => {
    expect(isSymmetric(buildBinaryTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
});

test('root = [1, 2, 2, null, 3, null, 3]', () => {
    expect(isSymmetric(buildBinaryTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
});

test('root = []', () => {
    expect(isSymmetric(buildBinaryTree([]))).toBe(true);
});

test('root = [1, 2, null]', () => {
    expect(isSymmetric(buildBinaryTree([1, 2, null]))).toBe(false);
});

test('root = [1, null, 2]', () => {
    expect(isSymmetric(buildBinaryTree([1, null, 2]))).toBe(false);
});

test('root = [1, null, 2]', () => {
    expect(isSymmetric(buildBinaryTree([1, null, 2]))).toBe(false);
});

test('root = [1, 2, 3]', () => {
    expect(isSymmetric(buildBinaryTree([1, 2, 3]))).toBe(false);
});

test('root = [1, 2, 2, 3, 4, 4, 3]', () => {
    expect(isSymmetric(buildBinaryTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
});
