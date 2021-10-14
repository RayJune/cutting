// const preorderTraversal = require('./index');
const preorderTraversal = require('./iterate');
// const preorderTraversal = require('./optimize');
// const preorderTraversal = require('./template');
// const preorderTraversal = require('./template-zh');

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

test('define preorderTraversal function', () => {
    expect(typeof preorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(preorderTraversal(buildTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(preorderTraversal(buildTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(preorderTraversal(buildTree([1, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2]', () => {
    expect(preorderTraversal(buildTree([1, null, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    expect(preorderTraversal(buildTree([1, null, 2, 3]))).toEqual([1, 2, 3]);
});
