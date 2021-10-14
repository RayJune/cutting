/*
 * 107. Binary Tree Level Order Traversal II
 *
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: [[15, 7], [9, 20], [3]]
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
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * 广度优先搜索，用 stack 来做，使用 reverse 方法
 *
 * Time Complexity: O(n) = while 和 for 循环的总遍历次数 O(n) + reverse 操作 O(n)
 * Space complexity: O(n) = result 数组长度 O(n) + stack 长度 O(n)
 * Auxiliary complexity: O(m) = stack 长度 O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function levelOrderBottom(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    let stack = [root];

    while (stack.length) {
        const level = [];
        const temp = [];

        for (const node of stack) {
            level.push(node.val);
            if (node.left) {
                temp.push(node.left);
            }
            if (node.right) {
                temp.push(node.right);
            }
        }
        result.push(level);
        stack = temp;
    }

    return result.reverse();
}

module.exports = levelOrderBottom;
