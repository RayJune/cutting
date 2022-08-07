/*
 * 114. 二叉树展开为链表
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 *
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树先序遍历顺序相同。
 *
 * Example 1:
 * Input: head = [1, 4, 3, 2, 5, 2], x = 3
 * Output: [1, 2, 2, 4, 3, 5]
 *
 * Example 2:
 * Input: head = [2, 1], x = 2
 * Output: [1, 2]
 *
 * Constraints:
 *
 * 树中结点数在范围 [0, 2000] 内
 * -100 <= Node.val <= 100
 *
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = flatten;
