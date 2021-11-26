/*
 * 110. 平衡二叉树
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 * 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1 。
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
 * Output: false
 *
 * Example 3:
 * Input: root = []
 * Output: true
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10 ** 4 <= Node.val <= 10 ** 4
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = isBalanced;
