/*
 * 141. 环形链表
 *
 * 给定一个链表，判断链表中是否有环。
 *
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 *
 * 如果链表中存在环，则返回 true。否则，返回 false 。
 *
 * Example 1:
 * Input: head = [3, 2, 0, -4], pos = 1
 * Output: true
 *
 * Example 2:
 * Input: head = [1, 2], pos = 0
 * Output: true
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 *
 * Constraints:
 * 链表中节点的数目范围是 [0, 10 ** 4]
 * (-10) ** 5 <= Node.val <= 10 ** 5
 * pos 为 -1 或者链表中的一个有效索引。
 *
 * https://leetcode.cn/problems/linked-list-cycle/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

export default hasCycle;
