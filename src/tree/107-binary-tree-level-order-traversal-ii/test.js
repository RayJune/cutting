// const levelOrderBottom = require('./index');
const levelOrderBottom = require('./optimize');
// const levelOrderBottom = require('./template');
// const levelOrderBottom = require('./template-zh');

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

test('define levelOrderBottom function', () => {
    expect(typeof levelOrderBottom).toBe('function');
});

test('root = []', () => {
    expect(levelOrderBottom(buildTree([]))).toEqual([]);
});

test('root = [1]', () => {
    expect(levelOrderBottom(buildTree([1]))).toEqual([[1]]);
});

test('root = [3, 9, 20, null, null, 15, 7]', () => {
    expect(levelOrderBottom(buildTree([3, 9, 20, null, null, 15, 7]))).toEqual([[15, 7], [9, 20], [3]]);
});
