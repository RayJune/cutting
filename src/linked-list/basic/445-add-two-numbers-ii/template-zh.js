/*
 * 445. 两数相加 II
 *
 * 给你两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。
 * 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 * Example 1:
 * Input: l1 = [7, 2, 4, 3], l2 = [5, 6, 4]
 * Output: [7, 8, 0, 7]
 *
 * Example 2:
 * Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
 * Output: [8, 0, 7]
 *
 * Example 3:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Constraints:
 * 两个链表的节点数目范围是 [1, 100]
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
 *
 * https://leetcode.cn/problems/add-two-numbers-ii/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export default addTwoNumbers;
