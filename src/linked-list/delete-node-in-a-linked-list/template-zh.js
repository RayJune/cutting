/*
 * 237. 删除链表中的节点
 *
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。
 * 传入函数的唯一参数为要被删除的节点。
 *
 * Example 1:
 * Input: head = [4, 5, 1, 9], node = 5
 * Output: [4, 1, 9]
 *
 * Example 2:
 * Input: head = [4, 5, 1, 9], node = 1
 * Output: [4, 5, 9]
 *
 * Example 3:
 * Input: head = [1, 2, 3, 4], node = 3
 * Output: [1, 2, 4]
 *
 * Example 4:
 * Input: head = [0, 1], node = 0
 * Output: [1]
 *
 * Example 5:
 * Input: head = [-3, 5, -99], node = -3
 * Output: [5, -99]
 *
 * Constraints:
 *
 * 链表至少包含两个节点。
 * 链表中所有节点的值都是唯一的。
 * 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
 * 不要从你的函数中返回任何结果。
 *
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = deleteNode;
