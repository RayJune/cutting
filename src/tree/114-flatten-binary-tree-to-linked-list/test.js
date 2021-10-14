// const flatten = require('./index');
// const flatten = require('./optimize');
const flatten = require('./optimize2');
// const flatten = require('./template');
// const flatten = require('./template-zh');

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

test('define flatten function', () => {
    expect(typeof flatten).toBe('function');
});

test('root = []', () => {
    const root = buildTree([]);

    flatten(root);
    expect(root).toBe(buildTree([]));
});

test('root = [0]', () => {
    const root = buildTree([0]);

    flatten(root);
    expect(root).toEqual(buildTree([0]));
});

test('root = [1, 2, 5, 3, 4, null, 6]', () => {
    const root = buildTree([1, 2, 5, 3, 4, null, 6]);

    flatten(root);
    expect(root).toEqual(buildTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]));
});
