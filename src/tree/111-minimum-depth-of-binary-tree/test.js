const minDepth = require('./index');
// const minDepth = require('./iterate');
// const minDepth = require('./iterate2');
// const minDepth = require('./template');
// const minDepth = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} minDepthArr
 * @returns {TreeNode}
 */
function buildTree(minDepthArr) {
    if (minDepthArr.length === 0) {
        return null;
    }

    const root = new TreeNode(minDepthArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = minDepthArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = minDepthArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define minDepth function', () => {
    expect(typeof minDepth).toBe('function');
});

test('root = []', () => {
    expect(minDepth(buildTree([]))).toBe(0);
});

test('root = [0]', () => {
    expect(minDepth(buildTree([0]))).toBe(1);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(minDepth(buildTree([3, 9, 20, null, null, 15, 7]))).toBe(2);
});

test('root = [2, null, 3, null, 4, null, 5, null, 6]', () => {
    expect(minDepth(buildTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5);
});

test('root = [1, 2]', () => {
    expect(minDepth(buildTree([1, 2]))).toBe(2);
});
