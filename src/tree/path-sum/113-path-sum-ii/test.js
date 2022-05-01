const pathSum = require('./index');
// const pathSum = require('./template');
// const pathSum = require('./template-zh');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define pathSum function', () => {
    expect(typeof pathSum).toBe('function');
});

test('root = [], targetSUm = 0', () => {
    expect(pathSum(buildBinaryTree([]), 0)).toEqual([]);
});

test('root = [1, 2], targetSUm = 0', () => {
    expect(pathSum(buildBinaryTree([1, 2]), 0)).toEqual([]);
});

test('root = [1, 2, 3], targetSUm = 5', () => {
    expect(pathSum(buildBinaryTree([1, 2, 3]), 5)).toEqual([]);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSUm = 5', () => {
    const root = buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
    const result = pathSum(root, 22);

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
        [5, 4, 11, 2],
        [5, 8, 4, 5]
    ]));
});
