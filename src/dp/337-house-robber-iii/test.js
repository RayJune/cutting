const rob = require('./index');
// const rob = require('./template');
// const rob = require('./template-zh');
const buildBinaryTree = require('utils/buildBinaryTree');

test('define rob function', () => {
    expect(typeof rob).toBe('function');
});

test('root = [3, 2, 3, null, 3, null, 1]', () => {
    const root = buildBinaryTree([3, 2, 3, null, 3, null, 1]);

    expect(rob(root)).toBe(7);
});

test('root = [3, 4, 5, 1, 3, null, 1]', () => {
    const root = buildBinaryTree([3, 4, 5, 1, 3, null, 1]);

    expect(rob(root)).toBe(9);
});
