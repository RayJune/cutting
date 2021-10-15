// const isBalanced = require('./index');
const isBalanced = require('./optimize');
// const isBalanced = require('./template');
// const isBalanced = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} isBalancedArr
 * @returns {TreeNode}
 */
function buildTree(isBalancedArr) {
    if (isBalancedArr.length === 0) {
        return null;
    }

    const root = new TreeNode(isBalancedArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = isBalancedArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = isBalancedArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define isBalanced function', () => {
    expect(typeof isBalanced).toBe('function');
});

test('root = []', () => {
    expect(isBalanced(buildTree([]))).toBe(true);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(isBalanced(buildTree([3, 9, 20, null, null, 15, 7]))).toBe(true);
});

test('root = [1, 2, 2, 3, 3, null, null, 4, 4]', () => {
    expect(isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false);
});

test('root = []', () => {
    expect(isBalanced(buildTree([1, null, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false);
});
