/*
 * 235. 二叉搜索树的最近公共祖先
 *
 * 给定一个二叉搜索树，找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * 例如，给定如下二叉搜索树: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
 *
 * Example 1:
 * Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 *
 * Example 2:
 * Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 * Input: root = [2, 1], p = 2, q = 1
 * Output: 2
 *
 * Constraints:
 * 树中节点数目在范围 [2, 10 ** 5] 内。
 * (-10) ** 9 <= Node.val <= 10 ** 9
 * 所有 Node.val 互不相同。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
 *
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

module.exports = lowestCommonAncestor;
