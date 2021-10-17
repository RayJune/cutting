const binaryTreePaths = require('./index');
// const binaryTreePaths = require('./iterate');
// const binaryTreePaths = require('./iterate2');
// const binaryTreePaths = require('./template');
// const binaryTreePaths = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} binaryTreePathsArr
 * @returns {TreeNode}
 */
function buildTree(binaryTreePathsArr) {
    if (binaryTreePathsArr.length === 0) {
        return null;
    }

    const root = new TreeNode(binaryTreePathsArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = binaryTreePathsArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = binaryTreePathsArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define binaryTreePaths function', () => {
    expect(typeof binaryTreePaths).toBe('function');
});

test('root = [1]', () => {
    expect(binaryTreePaths(buildTree([1]))).toEqual(['1']);
});

test('root = [1, 2, 3, null, 5]', () => {
    const result = binaryTreePaths(buildTree([1, 2, 3, null, 5]));

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
        '1->2->5',
        '1->3'
    ]));
});
