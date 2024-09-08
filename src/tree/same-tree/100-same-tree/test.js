import isSameTree from './index';
// import isSameTree from './iterate';
// import isSameTree from './template';
// import isSameTree from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define isSameTree function', () => {
    expect(typeof isSameTree).toBe('function');
});

test('p = [], q = []', () => {
    const p = buildBinaryTree([]);
    const q = buildBinaryTree([]);

    expect(isSameTree(p, q)).toBe(true);
});

test('p = [], q = [1]', () => {
    const p = buildBinaryTree([]);
    const q = buildBinaryTree([1]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1], q = []', () => {
    const p = buildBinaryTree([1]);
    const q = buildBinaryTree([]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, 2, 3], q = [1, 2, 3]', () => {
    const p = buildBinaryTree([1, 2, 3]);
    const q = buildBinaryTree([1, 2, 3]);

    expect(isSameTree(p, q)).toBe(true);
});

test('p = [1, 2], q = [1, null, 2]', () => {
    const p = buildBinaryTree([1, 2]);
    const q = buildBinaryTree([1, null, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, null, 2], q = [1, 2]', () => {
    const p = buildBinaryTree([1, null, 2]);
    const q = buildBinaryTree([1, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, 2, 1], q = [1, 1, 2]', () => {
    const p = buildBinaryTree([1, 2, 1]);
    const q = buildBinaryTree([1, 1, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1], q = [1, null, 2]', () => {
    const p = buildBinaryTree([1]);
    const q = buildBinaryTree([1, null, 2]);

    expect(isSameTree(p, q)).toBe(false);
});
