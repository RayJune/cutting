const isValidBST = require('./index');
// const isValidBST = require('./iterate');
// const isValidBST = require('./template');
// const isValidBST = require('./template-zh');

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

test('define isValidBST function', () => {
    expect(typeof isValidBST).toBe('function');
});

test('root = [2, 1, 3]', () => {
    const root = buildTree([2, 1, 3]);

    expect(isValidBST(root)).toBe(true);
});

test('root = [5, 1, 4, null, null, 3, 6]', () => {
    const root = buildTree([5, 1, 4, null, null, 3, 6]);

    expect(isValidBST(root)).toBe(false);
});

test('root = [5, 4, 6, null, null, 3, 7]', () => {
    const root = buildTree([5, 4, 6, null, null, 3, 7]);

    expect(isValidBST(root)).toBe(false);
});

test('root = [2, 2, 2]', () => {
    const root = buildTree([2, 2, 2]);

    expect(isValidBST(root)).toBe(false);
});

test('root = []', () => {
    const root = buildTree([]);

    expect(isValidBST(root)).toBe(true);
});
