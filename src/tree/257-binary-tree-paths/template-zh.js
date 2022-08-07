/*
 * 257. 二叉树的所有路径
 *
 * 给你一个二叉树的根节点 root ，按任意顺序，返回所有从根节点到叶子节点的路径。
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
 *
 * 树中节点的数目在范围 [1, 100] 内
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.cn/problems/binary-tree-paths/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = binaryTreePaths;
