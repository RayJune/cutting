import levelOrderBottom from './index';
// import levelOrderBottom = require('./reverse');
// import levelOrderBottom from './template';
// import levelOrderBottom from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define levelOrderBottom function', () => {
    expect(typeof levelOrderBottom).toBe('function');
});

test('root = []', () => {
    expect(levelOrderBottom(buildBinaryTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(levelOrderBottom(buildBinaryTree([1]))).toEqual([[1]]);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(levelOrderBottom(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual([[15, 7], [9, 20], [3]]);
});
