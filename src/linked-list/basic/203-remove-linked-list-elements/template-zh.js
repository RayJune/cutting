/*
 * 203. 移除链表元素
 *
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。
 *
 * Example 1:
 * Input: head = [1, 2, 6, 3, 4, 5, 6], val = 6
 * Output: [1, 2, 3, 4, 5]
 *
 * Example 2:
 * Input: head = [], val = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [7, 7, 7, 7], val = 7
 * Output: []
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 10 ** 4].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 *
 * https://leetcode.cn/problems/remove-linked-list-elements/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export default removeElements;
