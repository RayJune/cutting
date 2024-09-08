/*
 * 83. 删除排序链表中的重复元素
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head，请你删除所有重复的元素，使每个元素只出现一次。
 *
 * 返回同样按升序排列的结果链表。
 *
 * Example 1:
 * Input: head = [1, 1, 2]
 * Output: [1, 2]
 *
 * Example 2:
 * Input: head = [1, 1, 2, 3, 3]
 * Output: [1, 2, 3]
 *
 * Constraints:
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序排列
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export default deleteDuplicates;
