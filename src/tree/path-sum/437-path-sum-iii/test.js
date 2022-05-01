// const pathSum = require('./index');
const pathSum = require('./optimize');
// const pathSum = require('./template');
// const pathSum = require('./template-zh');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define pathSum function', () => {
    expect(typeof pathSum).toBe('function');
});

test('root = [], targetSum = 0', () => {
    expect(pathSum(buildBinaryTree([]), 0)).toEqual(0);
});

test('root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8', () => {
    expect(pathSum(buildBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toEqual(3);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22', () => {
    expect(pathSum(buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toEqual(3);
});

test('root = [1, null, 2, null, 3, null, 4, null, 5], targetSum = 3', () => {
    expect(pathSum(buildBinaryTree([1, null, 2, null, 3, null, 4, null, 5]), 3)).toEqual(2);
});

test('root = [0, 1, 1], targetSum = 1', () => {
    expect(pathSum(buildBinaryTree([0, 1, 1]), 1)).toEqual(4);
});

test('root = [1, -2, -3], targetSum = -1', () => {
    expect(pathSum(buildBinaryTree([1, -2, -3]), -1)).toEqual(1);
});
