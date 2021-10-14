// const levelOrder = require('./index');
const levelOrder = require('./optimize');
// const levelOrder = require('./template');
// const levelOrder = require('./template-zh');

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

test('define levelOrder function', () => {
    expect(typeof levelOrder).toBe('function');
});

test('root = []', () => {
    expect(levelOrder(buildTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(levelOrder(buildTree([1]))).toEqual([[1]]);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(levelOrder(buildTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]]);
});
