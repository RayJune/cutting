// import recoverTree from './index';
// import recoverTree from './optimize';
import recoverTree from './optimize2';
// import recoverTree from './template';
// import recoverTree from './template-zh';
import buildBinaryTree from 'utils/buildBinaryTree';

test('define recoverTree function', () => {
    expect(typeof recoverTree).toBe('function');
});

test('root = [1, 3, null, null, 2]', () => {
    const root = buildBinaryTree([1, 3, null, null, 2]);

    recoverTree(root)
    expect(root).toEqual(buildBinaryTree([3, 1, null, null, 2]));
});

test('root = [3, 1, 4, null, null, 2]', () => {
    const root = buildBinaryTree([3, 1, 4, null, null, 2]);

    recoverTree(root)
    expect(root).toEqual(buildBinaryTree([2, 1, 4, null, null, 3]));
});
