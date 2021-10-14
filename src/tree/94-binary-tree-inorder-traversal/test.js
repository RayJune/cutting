// const inorderTraversal = require('./index');
const inorderTraversal = require('./iterate');
// const inorderTraversal = require('./optimize');
// const inorderTraversal = require('./template');
// const inorderTraversal = require('./template-zh');

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

test('define inorderTraversal function', () => {
    expect(typeof inorderTraversal).toBe('function');
});

test('root = []', () => {
    expect(inorderTraversal(null)).toEqual([]);
});

test('root = [1]', () => {
    expect(inorderTraversal(buildTree([1]))).toEqual([1]);
});

test('root = [1, 2]', () => {
    expect(inorderTraversal(buildTree([1, 2]))).toEqual([2, 1]);
});

test('root = [1, null, 2]', () => {
    expect(inorderTraversal(buildTree([1, null, 2]))).toEqual([1, 2]);
});

test('root = [1, null, 2, 3]', () => {
    expect(inorderTraversal(buildTree([1, null, 2, 3]))).toEqual([1, 3, 2]);
});

test('root = [1, 2, 3, 4, 5]', () => {
    expect(inorderTraversal(buildTree([1, 2, 3, 4, 5]))).toEqual([4, 2, 5, 1, 3]);
});
