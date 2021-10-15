const invertTree = require('./index');
// const invertTree = require('./iterate');
// const invertTree = require('./template');
// const invertTree = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} invertTreeArr
 * @returns {TreeNode}
 */
function buildTree(invertTreeArr) {
    if (invertTreeArr.length === 0) {
        return null;
    }

    const root = new TreeNode(invertTreeArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = invertTreeArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = invertTreeArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define invertTree function', () => {
    expect(typeof invertTree).toBe('function');
});

test('root = []', () => {
    expect(invertTree(buildTree([]))).toEqual(buildTree([]));
});

test('root = [2, 1, 3]', () => {
    expect(invertTree(buildTree([2, 1, 3]))).toEqual(buildTree([2, 3, 1]));
});

test('root = [4, 2, 7, 1, 3, 6, 9]', () => {
    expect(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(buildTree([4, 7, 2, 9, 6, 3, 1]));
});
