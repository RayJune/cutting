/*
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
 * Output: [7, 0, 8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
 * Output: [8, 9, 9, 9, 0, 0, 0, 1]
 *
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * https://leetcode.com/problems/add-two-numbers/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 注意进位
 *
 * Time Complexity: O(max(m + n)) = while 循环次数
 * Space complexity: O(max(m + n)) = 返回值链表的节点数
 * Auxiliary complexity: O(1)
 * 其中 n 是 l1 链表的节点数，m 是 l2 链表的节点数
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const preHead = new ListNode(-1);
    let node = preHead;
    let carry = 0;

    while (l1 || l2) {
        const value1 = l1 ? l1.val : 0;
        const value2 = l2 ? l2.val : 0;

        carry += value1 + value2;
        node.next = new ListNode(carry % 10);
        node = node.next;
        carry = Math.floor(carry / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry) {
        node.next = new ListNode(carry);
    }

    return preHead.next;
}

export default addTwoNumbers;
