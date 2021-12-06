const rob = require('./index');
// const rob = require('./template');
// const rob = require('./template-zh');

class TreeNode {
    constructor(val, left = null, right = null) {
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

        if (nodeVal || nodeVal === 0) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = levelOrderArr.shift();
        if (nodeVal || nodeVal === 0) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define rob function', () => {
    expect(typeof rob).toBe('function');
});

test('root = [3, 2, 3, null, 3, null, 1]', () => {
    const root = buildTree([3, 2, 3, null, 3, null, 1]);

    expect(rob(root)).toBe(7);
});

test('root = [3, 4, 5, 1, 3, null, 1]', () => {
    const root = buildTree([3, 4, 5, 1, 3, null, 1]);

    expect(rob(root)).toBe(9);
});
