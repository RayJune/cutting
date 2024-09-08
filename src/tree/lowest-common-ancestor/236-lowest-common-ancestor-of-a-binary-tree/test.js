import lowestCommonAncestor from './index';
// import lowestCommonAncestor from './template';
// import lowestCommonAncestor from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define lowestCommonAncestor function', () => {
    expect(typeof lowestCommonAncestor).toBe('function');
});

test('root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1', () => {
    const root = buildBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = buildBinaryTree([5]);
    const q = buildBinaryTree([1]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(3);
});

test('root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4', () => {
    const root = buildBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = buildBinaryTree([5]);
    const q = buildBinaryTree([4]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(5);
});

test('root = [1, 2], p = 1, q = 2', () => {
    const root = buildBinaryTree([1, 2]);
    const p = buildBinaryTree([1]);
    const q = buildBinaryTree([2]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(1);
});


test('root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 0, q = 8', () => {
    const root = buildBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = buildBinaryTree([0]);
    const q = buildBinaryTree([8]);

    expect(lowestCommonAncestor(root, p, q).val)
        .toBe(1);
});
