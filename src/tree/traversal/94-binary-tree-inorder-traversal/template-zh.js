/*
 * 94. 二叉树的中序遍历
 *
 * 给定一个二叉树的根节点 root ，返回它的中序遍历。
 *
 * Example 1:
 * Input: root = [1, null, 2, 3]
 * Output: [1, 3, 2]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 *
 * Example 4:
 * Input: root = [1, 2]
 * Output: [2, 1]
 *
 * Example 5:
 * Input: root = [1, null, 2]
 * Output: [1, 2]
 *
 * Constraints:
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export default inorderTraversal;
