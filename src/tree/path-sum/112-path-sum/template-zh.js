/*
 * 112. 路径总和
 *
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 *
 * 叶子节点是指没有子节点的节点。
 *
 * Example 1:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 3], targetSum = 5
 * Output: false
 *
 * Example 3:
 * Input: root = [1, 2], targetSum = 0
 * Output: false
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.cn/problems/path-sum/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = hasPathSum;
