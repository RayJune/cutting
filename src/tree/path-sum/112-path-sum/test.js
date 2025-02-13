import hasPathSum from './index';
// import hasPathSum from './template';
// import hasPathSum from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define hasPathSum function', () => {
    expect(typeof hasPathSum).toBe('function');
});

test('root = [], targetSUm = 0', () => {
    expect(hasPathSum(buildBinaryTree([]), 0)).toBe(false);
});

test('root = [1, 2], targetSUm = 0', () => {
    expect(hasPathSum(buildBinaryTree([1, 2]), 0)).toBe(false);
});

test('root = [1, 2, 3], targetSUm = 5', () => {
    expect(hasPathSum(buildBinaryTree([1, 2, 3]), 5)).toBe(false);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSUm = 5', () => {
    const root = buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

    expect(hasPathSum(root, 22)).toBe(true);
});
