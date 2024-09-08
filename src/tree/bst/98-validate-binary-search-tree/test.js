import isValidBST from './index';
// import isValidBST from './template';
// import isValidBST from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define isValidBST function', () => {
    expect(typeof isValidBST).toBe('function');
});

test('root = [2, 1, 3]', () => {
    const root = buildBinaryTree([2, 1, 3]);

    expect(isValidBST(root)).toBe(true);
});

test('root = [5, 1, 4, null, null, 3, 6]', () => {
    const root = buildBinaryTree([5, 1, 4, null, null, 3, 6]);

    expect(isValidBST(root)).toBe(false);
});

test('root = [5, 4, 6, null, null, 3, 7]', () => {
    const root = buildBinaryTree([5, 4, 6, null, null, 3, 7]);

    expect(isValidBST(root)).toBe(false);
});

test('root = [2, 2, 2]', () => {
    const root = buildBinaryTree([2, 2, 2]);

    expect(isValidBST(root)).toBe(false);
});

test('root = []', () => {
    const root = buildBinaryTree([]);

    expect(isValidBST(root)).toBe(true);
});
