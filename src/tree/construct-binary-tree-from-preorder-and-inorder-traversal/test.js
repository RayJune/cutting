// const buildTree = require('./index');
const buildTree = require('./optimize');
// const buildTree = require('./template');
// const buildTree = require('./template-zh');

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
function buildTreeInLevelOrder(levelOrderArr) {
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

test('define buildTree function', () => {
    expect(typeof buildTree).toBe('function');
});

test('preorder = [], inorder = []', () => {

    expect(buildTree([], [])).toBe(buildTreeInLevelOrder([]));
});

test('preorder = [-1], inorder = [-1]', () => {
    expect(buildTree([-1], [-1])).toEqual(buildTreeInLevelOrder([-1]));
});

test('preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];

    expect(buildTree(preorder, inorder)).toEqual(buildTreeInLevelOrder([3, 9, 20, null, null, 15, 7]));
});
