/*
 * 109. Convert Sorted List to Binary Search Tree
 *
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * The number of nodes in head is in the range [0, 2 * 10 ** 4].
 * (-10) ** 5 <= Node.val <= 10 ** 5
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
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
