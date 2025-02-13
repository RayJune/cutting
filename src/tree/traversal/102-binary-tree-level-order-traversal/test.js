import levelOrder from './index';
// import levelOrder from './template';
// import levelOrder from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define levelOrder function', () => {
    expect(typeof levelOrder).toBe('function');
});

test('root = []', () => {
    expect(levelOrder(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(levelOrder(buildBinaryTree([1]))).toEqual([[1]]);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(levelOrder(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]]);
});
