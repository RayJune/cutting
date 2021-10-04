/*
 * 142. 环形链表 II
 *
 * 给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * 说明：不允许修改给定的链表。
 *
 *
 * Example 1:
 * Input: head = [3, 2, 0, -4], pos = 1
 * Output: tail connects to node index 1
 *
 * Example 2:
 * Input: head = [1, 2], pos = 0
 * Output: tail connects to node index 0
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: no cycle
 *
 * Constraints:
 *
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * pos 的值为 -1 或者链表中的一个有效索引
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
*/

module.exports = detectCycle;
