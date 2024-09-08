import inorderTraversal from './index';
// import inorderTraversal from './iterate';
// import inorderTraversal from './optimize';
// import inorderTraversal from './template';
// import inorderTraversal from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define inorderTraversal function', () => {
    expect(typeof inorderTraversal).toBe('function');
});

test('root = []', () => {
    const root = buildBinaryTree([]);

    expect(inorderTraversal(root)).toEqual([]);
});

test('root = [1]', () => {
    const root = buildBinaryTree([1]);

    expect(inorderTraversal(root)).toEqual([1]);
});

test('root = [1, 2]', () => {
    const root = buildBinaryTree([1, 2]);

    expect(inorderTraversal(root)).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    const root = buildBinaryTree([1, null, 2]);

    expect(inorderTraversal(root)).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    const root = buildBinaryTree([1, null, 2, 3]);

    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
});

test('root = [1, 2, 3, 4, 5]', () => {
    const root = buildBinaryTree([1, 2, 3, 4, 5]);

    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 3]);
});

test('root = [7, 2, null, 1, 4, null, null, 3, 5, null, null, null, 6]', () => {
    const root = buildBinaryTree([7, 2, null, 1, 4, null, null, 3, 5, null, null, null, 6]);

    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
