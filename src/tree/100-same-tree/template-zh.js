/*
 * 100. 相同的树
 *
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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
 * 两棵树上的节点数目都在范围 [0, 100] 内
 * -10^4 <= Node.val <= 10^4
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 *
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = isSameTree;
