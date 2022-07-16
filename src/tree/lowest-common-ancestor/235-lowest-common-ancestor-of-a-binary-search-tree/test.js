const lowestCommonAncestor = require('./index');
// const lowestCommonAncestor = require('./template');
// const lowestCommonAncestor = require('./template-zh');
const buildBinaryTree = require('../../../utils/buildBinaryTree');

test('define lowestCommonAncestor function', () => {
    expect(typeof lowestCommonAncestor).toBe('function');
});

test('root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8', () => {
    const root = buildBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = buildBinaryTree([2]);
    const q = buildBinaryTree([8]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(6);
});

test('root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4', () => {
    const root = buildBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = buildBinaryTree([2]);
    const q = buildBinaryTree([4]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(2);
});

test('root = [2, 1], p = 2, q = 1', () => {
    const root = buildBinaryTree([2, 1]);
    const p = buildBinaryTree([2]);
    const q = buildBinaryTree([1]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(2);
});

test('root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 7, q = 9', () => {
    const root = buildBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 7, 9]);
    const p = buildBinaryTree([7]);
    const q = buildBinaryTree([9]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(8);
});
