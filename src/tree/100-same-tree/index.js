/*
 * 100. Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Example 1:
 * Input: p = [1, 2, 3], q = [1, 2, 3]
 * Output: true
 *
 * Example 2:
 * Input: p = [1, 2], q = [1, null, 2]
 * Output: false
 *
 * Example 3:
 * Input: p = [1, 2, 1], q = [1, 1, 2]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in both trees is in the range [0, 100].
 * -10 ** 4 <= Node.val <= 10 ** 4
 *
 * https://leetcode.com/problems/same-tree/
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
 * 递归，深度优先遍历
 *
 * Time Complexity: O(min(m, n)) = 函数执行次数 O(min(m, n))
 * Space complexity: O(min(m, n)) = 函数调用栈深度 O(min(m, n))
 * Auxiliary complexity: O(min(m, n)) = 函数调用栈深度 O(min(m, n))
 * m 和 n 分别是两个二叉树的节点数
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

module.exports = isSameTree;
