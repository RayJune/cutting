/*
 * 234. 回文链表
 *
 * 给你一个单链表的头节点 head，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false。
 *
 * Example 1:
 * Input: head = [3, 2, 0, -4], pos = 1
 * Output: true
 *
 * Example 2:
 * Input: head = [1, 2], pos = 0
 * Output: true
 *
 * Constraints:
 * 链表中节点数目在范围 [1, 10 ** 5] 内
 * 0 <= Node.val <= 9
 *
 * https://leetcode.cn/problems/palindrome-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export default isPalindrome;
