/*
 * 24. 两两交换链表中的节点
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4]
 * Output: [2, 1, 4, 3]
 *
 * Example 2:
 * Input: head = []
 * Output: []
 *
 * Example 3:
 * Input: head = [1]
 * Output: [1]
 *
 * Constraints:
 *
 * 链表中节点的数目在范围  [0, 100] 内
 * 0 <= Node.val <= 100
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = swapPairs;
