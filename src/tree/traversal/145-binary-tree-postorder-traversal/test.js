// import postorderTraversal from './index';
import postorderTraversal from './iterate';
// import postorderTraversal from './template';
// import postorderTraversal from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define postorderTraversal function', () => {
    expect(typeof postorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(postorderTraversal(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(postorderTraversal(buildBinaryTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(postorderTraversal(buildBinaryTree([1, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    expect(postorderTraversal(buildBinaryTree([1, null, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2, 3]', () => {
    expect(postorderTraversal(buildBinaryTree([1, null, 2, 3]))).toEqual([3, 2, 1]);
});
