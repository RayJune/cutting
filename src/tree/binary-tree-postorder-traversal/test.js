// const postorderTraversal = require('./index');
const postorderTraversal = require('./iterate');
// const postorderTraversal = require('./template');
// const postorderTraversal = require('./template-zh');

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

test('define postorderTraversal function', () => {
    expect(typeof postorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(postorderTraversal(null)).toEqual([]);
});

test('root = [1]', () => {
    expect(postorderTraversal(buildTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(postorderTraversal(buildTree([1, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    expect(postorderTraversal(buildTree([1, null, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2, 3]', () => {
    expect(postorderTraversal(buildTree([1, null, 2, 3]))).toEqual([3, 2, 1]);
});
