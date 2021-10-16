/*
 * 102. Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: [[3], [9, 20], [15, 7]]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 广度优先搜索，用队列来做（这里用 array 当队列来用）
 *
 * Time Complexity: O(n^2) = while 和 for 循环的总遍历次数 O(n) * shift 操作 O(n)
 * Space complexity: O(n) = result 数组长度 O(n) + 队列长度 O(n)
 * Auxiliary complexity: O(m) = 队列长度 O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function levelOrder(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length) {
        const level = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const {left, right, val} = queue.shift();

            level.push(val);
            if (left) {
                queue.push(left);
            }
            if (node.right) {
                queue.push(right);
            }
        }
        result.push(level);
    }

    return result;
}

module.exports = levelOrder;
