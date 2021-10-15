const maxDepth = require('./index');
// const maxDepth = require('./iterate');
// const maxDepth = require('./template');
// const maxDepth = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} maxDepthArr
 * @returns {TreeNode}
 */
function buildTree(maxDepthArr) {
    if (maxDepthArr.length === 0) {
        return null;
    }

    const root = new TreeNode(maxDepthArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = maxDepthArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = maxDepthArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define maxDepth function', () => {
    expect(typeof maxDepth).toBe('function');
});

test('root = []', () => {
    expect(maxDepth(buildTree([]))).toBe(0);
});

test('root = [0]', () => {
    expect(maxDepth(buildTree([0]))).toBe(1);
});

test('root = [1, null, 2]', () => {
    expect(maxDepth(buildTree([1, null, 2]))).toBe(2);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(maxDepth(buildTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
});
