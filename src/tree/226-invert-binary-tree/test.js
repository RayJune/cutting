import invertTree from './index';
// import invertTree from './iterate';
// import invertTree from './template';
// import invertTree from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define invertTree function', () => {
    expect(typeof invertTree).toBe('function');
});

test('root = []', () => {
    expect(invertTree(buildBinaryTree([]))).toEqual(buildBinaryTree([]));
});

test('root = [2, 1, 3]', () => {
    expect(invertTree(buildBinaryTree([2, 1, 3]))).toEqual(buildBinaryTree([2, 3, 1]));
});

test('root = [4, 2, 7, 1, 3, 6, 9]', () => {
    expect(invertTree(buildBinaryTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(buildBinaryTree([4, 7, 2, 9, 6, 3, 1]));
});
