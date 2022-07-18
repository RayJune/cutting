/*
 * 98. 验证二叉搜索树
 *
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 *
 * 有效二叉搜索树定义如下：
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 * Example 1:
 * Input: root = [2, 1, 3]
 * Output: true
 *
 * Example 2:
 * Input: root = [5, 1, 4, null, null, 3, 6]
 * Output: false
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10 ** 4].
 * (-2) ** 31 <= Node.val <= 2 ** 31 - 1
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = isValidBST;
