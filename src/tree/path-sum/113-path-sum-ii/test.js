import pathSum from './index';
// import pathSum from './template';
// import pathSum from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define pathSum function', () => {
    expect(typeof pathSum).toBe('function');
});

test('root = [], targetSum = 0', () => {
    expect(pathSum(buildBinaryTree([]), 0)).toEqual([]);
});

test('root = [1, 2], targetSum = 0', () => {
    expect(pathSum(buildBinaryTree([1, 2]), 0)).toEqual([]);
});

test('root = [1, 2, 3], targetSum = 5', () => {
    expect(pathSum(buildBinaryTree([1, 2, 3]), 5)).toEqual([]);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 5', () => {
    const root = buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
    const result = pathSum(root, 22);

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
        [5, 4, 11, 2],
        [5, 8, 4, 5]
    ]));
});
