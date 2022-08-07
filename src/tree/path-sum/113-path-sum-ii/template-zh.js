/*
 * 113. 路径总和 II
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有从根节点到叶子节点路径总和等于给定目标和的路径。
 *
 * 叶子节点是指没有子节点的节点。
 *
 * Example 1:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
 * Output: [[5, 4, 11, 2], [5, 8, 4, 5]]
 *
 * Example 2:
 * Input: root = [1, 2, 3], targetSum = 5
 * Output: []
 *
 * Example 3:
 * Input: root = [1, 2], targetSum = 0
 * Output: []
 *
 * Constraints:
 * 树中节点总数在范围 [0, 5000] 内
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.cn/problems/path-sum-ii/
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
