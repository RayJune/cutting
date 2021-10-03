/*
 * 148. 排序链表
 *
 * 给你链表的头结点 head ，请将其按升序排列并返回排序后的链表 。
 *
 * 进阶：
 * 你可以在 O(n * log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 * Example 1:
 * Input: head = [4, 2, 1, 3]
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: head = [-1, 5, 3, 4, 0]
 * Output: [-1, 0, 3, 4, 5]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 *
 * https://leetcode-cn.com/problems/sort-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = sortList;
