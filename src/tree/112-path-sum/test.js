const hasPathSum = require('./index');
// const hasPathSum = require('./iterate');
// const hasPathSum = require('./template');
// const hasPathSum = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} hasPathSumArr
 * @returns {TreeNode}
 */
function buildTree(hasPathSumArr) {
    if (hasPathSumArr.length === 0) {
        return null;
    }

    const root = new TreeNode(hasPathSumArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = hasPathSumArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = hasPathSumArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define hasPathSum function', () => {
    expect(typeof hasPathSum).toBe('function');
});

test('root = [], targetSUm = 0', () => {
    expect(hasPathSum(buildTree([]), 0)).toBe(false);
});

test('root = [1, 2], targetSUm = 0', () => {
    expect(hasPathSum(buildTree([1, 2]), 0)).toBe(false);
});

test('root = [1, 2, 3], targetSUm = 5', () => {
    expect(hasPathSum(buildTree([1, 2, 3]), 5)).toBe(false);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSUm = 5', () => {
    const root = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

    expect(hasPathSum(root, 22)).toBe(true);
});
