/*
 * 437. 路径总和 III
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的路径的数目。
 *
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 *
 * Example 1:
 * Input: root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
 * Output: 3
 *
 * Example 2:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
 * Output: 3
 *
 * Constraints:
 *
 * 二叉树的节点个数的范围是 [0, 1000].
 * -10^9 <= Node.val <= 10^9
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode-cn.com/problems/path-sum-iii/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = pathSum;
