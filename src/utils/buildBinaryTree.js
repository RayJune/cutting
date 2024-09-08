class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Build binary tree with level order array input.
 *
 * @param {number[]} levelOrderArr
 * @returns {TreeNode}
 */
function buildBinaryTree(levelOrderArr) {
    if (levelOrderArr.length === 0) {
        return null;
    }

    const root = new TreeNode(levelOrderArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = levelOrderArr.shift();

        if (nodeVal || nodeVal === 0) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = levelOrderArr.shift();
        if (nodeVal || nodeVal === 0) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

export default buildBinaryTree;
