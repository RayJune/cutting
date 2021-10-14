const isSameTree = require('./index');
// const isSameTree = require('./iterate');
// const isSameTree = require('./template');
// const isSameTree = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} levelOrderArr
 * @returns {TreeNode}
 */
function buildTree(levelOrderArr) {
    if (levelOrderArr.length === 0) {
        return null;
    }

    const root = new TreeNode(levelOrderArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = levelOrderArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = levelOrderArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define isSameTree function', () => {
    expect(typeof isSameTree).toBe('function');
});

test('p = [], q = []', () => {
    const p = buildTree([]);
    const q = buildTree([]);

    expect(isSameTree(p, q)).toBe(true);
});

test('p = [], q = [1]', () => {
    const p = buildTree([]);
    const q = buildTree([1]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1], q = []', () => {
    const p = buildTree([1]);
    const q = buildTree([]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, 2, 3], q = [1, 2, 3]', () => {
    const p = buildTree([1, 2, 3]);
    const q = buildTree([1, 2, 3]);

    expect(isSameTree(p, q)).toBe(true);
});

test('p = [1, 2], q = [1, null, 2]', () => {
    const p = buildTree([1, 2]);
    const q = buildTree([1, null, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, null, 2], q = [1, 2]', () => {
    const p = buildTree([1, null, 2]);
    const q = buildTree([1, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1, 2, 1], q = [1, 1, 2]', () => {
    const p = buildTree([1, 2, 1]);
    const q = buildTree([1, 1, 2]);

    expect(isSameTree(p, q)).toBe(false);
});

test('p = [1], q = [1, null, 2]', () => {
    const p = buildTree([1]);
    const q = buildTree([1, null, 2]);

    expect(isSameTree(p, q)).toBe(false);
});
