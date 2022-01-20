/*
 * 82. 删除排序链表中的重复元素 II
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中没有重复出现的数字。
 *
 * 返回同样按升序排列的结果链表。
 *
 * Example 1:
 * Input: head = [1, 2, 3, 3, 4, 4, 5]
 * Output: [1, 2, 5]
 *
 * Example 2:
 * Input: head = [1, 1, 1, 2, 3]
 * Output: [2, 3]
 *
 * Constraints:
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序排列
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = deleteDuplicates;
