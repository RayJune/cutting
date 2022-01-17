/*
 * 876. 链表的中间结点
 *
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 *
 * 如果有两个中间结点，则返回第二个中间结点。
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [3, 4, 5]
 *
 * Example 2:
 * Input: head = [1, 2, 3, 4, 5, 6]
 * Output: [4, 5, 6]
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
 *
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = middleNode;
