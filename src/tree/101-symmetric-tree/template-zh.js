/*
 * 101. 对称二叉树
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * Example 1:
 * Input: root = [1, 2, 2, 3, 4, 4, 3]
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 2, null, 3, null, 3]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode-cn.com/problems/symmetric-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = isSymmetric;
