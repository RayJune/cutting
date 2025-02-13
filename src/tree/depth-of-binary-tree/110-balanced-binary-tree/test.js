// import isBalanced from './index';
import isBalanced from './optimize';
// import isBalanced from './template';
// import isBalanced from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define isBalanced function', () => {
    expect(typeof isBalanced).toBe('function');
});

test('root = []', () => {
    expect(isBalanced(buildBinaryTree([]))).toBe(true);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(isBalanced(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(true);
});

test('root = [1, 2, 2, 3, 3, null, null, 4, 4]', () => {
    expect(isBalanced(buildBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false);
});

test('root = []', () => {
    expect(isBalanced(buildBinaryTree([1, null, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false);
});
