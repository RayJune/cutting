/*
 * 109. 有序链表转换二叉搜索树
 *
 * 给定一个单链表的头节点 head ，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
 *
 * Example 1:
 * Input: head = [-10, -3, 0, 5, 9]
 * Output: [0, -3, 9, -10, null, 5]
 * Explanation: One possible answer is [0, -3, 9, -10, null, 5], which represents the shown height balanced BST.
 *
 * Example 2:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * head 中的节点数在 [0, 2 * 10 ** 4] 范围内
 * (-10) ** 5 <= Node.val <= 10 ** 5
 *
 * https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export default sortedListToBST;
