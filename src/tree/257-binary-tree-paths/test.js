import binaryTreePaths from './index';
// import binaryTreePaths from './iterate';
// import binaryTreePaths from './iterate2';
// import binaryTreePaths from './template';
// import binaryTreePaths from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define binaryTreePaths function', () => {
    expect(typeof binaryTreePaths).toBe('function');
});

test('root = [1]', () => {
    expect(binaryTreePaths(buildBinaryTree([1]))).toEqual(['1']);
});

test('root = [1, 2, 3, null, 5]', () => {
    const result = binaryTreePaths(buildBinaryTree([1, 2, 3, null, 5]));

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
        '1->2->5',
        '1->3'
    ]));
});
