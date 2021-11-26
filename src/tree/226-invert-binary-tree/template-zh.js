/*
 * 226. 翻转二叉树
 *
 * 翻转一棵二叉树。
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 3
 *
 * Example 1:
 * Input: root = [1, null, 2]
 * Output: 2
 *
 * Example 3:
 * Input: root = []
 * Output: 0
 *
 * Example 4:
 * Input: root = [0]
 * Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 ** 4].
 * -100 <= Node.val <= 100
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = invertTree;
