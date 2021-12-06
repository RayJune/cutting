const binaryTreePaths = require('./index');
// const binaryTreePaths = require('./iterate');
// const binaryTreePaths = require('./iterate2');
// const binaryTreePaths = require('./template');
// const binaryTreePaths = require('./template-zh');
const buildBinaryTree = require('../../utils/buildBinaryTree');

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
