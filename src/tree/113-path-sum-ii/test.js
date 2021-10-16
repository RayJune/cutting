const pathSum = require('./index');
// const pathSum = require('./iterate');
// const pathSum = require('./iterate2');
// const pathSum = require('./template');
// const pathSum = require('./template-zh');

class TreeNode {
    constructor(val = undefined, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} pathSumArr
 * @returns {TreeNode}
 */
function buildTree(pathSumArr) {
    if (pathSumArr.length === 0) {
        return null;
    }

    const root = new TreeNode(pathSumArr.shift());
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        let nodeVal = pathSumArr.shift();

        if (nodeVal) {
            node.left = new TreeNode(nodeVal);
            queue.push(node.left);
        }
        nodeVal = pathSumArr.shift();
        if (nodeVal) {
            node.right = new TreeNode(nodeVal);
            queue.push(node.right);
        }
    }

    return root;
}

test('define pathSum function', () => {
    expect(typeof pathSum).toBe('function');
});

test('root = [], targetSUm = 0', () => {
    expect(pathSum(buildTree([]), 0)).toEqual([]);
});

test('root = [1, 2], targetSUm = 0', () => {
    expect(pathSum(buildTree([1, 2]), 0)).toEqual([]);
});

test('root = [1, 2, 3], targetSUm = 5', () => {
    expect(pathSum(buildTree([1, 2, 3]), 5)).toEqual([]);
});

test('root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSUm = 5', () => {
    const root = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
    const result = pathSum(root, 22);

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
        [5, 4, 11, 2],
        [5, 8, 4, 5]
    ]));
});
