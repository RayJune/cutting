/*
 * 61. 旋转链表
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], k = 2
 * Output: [4, 5, 1, 2, 3]
 *
 * Example 2:
 * Input: head = [0, 1, 2], k = 4
 * Output: [2, 0, 1]
 *
 * Constraints:
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10 ** 9
 *
 * https://leetcode-cn.com/problems/rotate-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = rotateRight;
