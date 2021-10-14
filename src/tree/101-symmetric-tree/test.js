// const isSymmetric = require('./index');
const isSymmetric = require('./iterate');
// const isSymmetric = require('./template');
// const isSymmetric = require('./template-zh');

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

test('define isSymmetric function', () => {
    expect(typeof isSymmetric).toBe('function');
});

test('root = [1, 2, 2, 3, 4, 4, 3]', () => {
    expect(isSymmetric(buildTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
});

test('root = [1, 2, 2, null, 3, null, 3]', () => {
    expect(isSymmetric(buildTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
});

test('root = []', () => {
    expect(isSymmetric(buildTree([]))).toBe(true);
});

test('root = [1, 2, null]', () => {
    expect(isSymmetric(buildTree([1, 2, null]))).toBe(false);
});

test('root = [1, null, 2]', () => {
    expect(isSymmetric(buildTree([1, null, 2]))).toBe(false);
});

test('root = [1, null, 2]', () => {
    expect(isSymmetric(buildTree([1, null, 2]))).toBe(false);
});

test('root = [1, 2, 3]', () => {
    expect(isSymmetric(buildTree([1, 2, 3]))).toBe(false);
});

test('root = [1, 2, 2, 3, 4, 4, 3]', () => {
    expect(isSymmetric(buildTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
});
