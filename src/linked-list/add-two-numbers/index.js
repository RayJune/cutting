/*
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
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
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * https://leetcode.com/problems/add-two-numbers/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    /**
     * @param {string} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 注意相加进位，因为一个节点位置只能存储一位数字
 *
 * Time Complexity: O(max(m + n))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const preHead = new ListNode();
    let preNode = preHead;
    let carry = 0;

    while (l1 || l2) {
        const value1 = l1 ? l1.val : 0;
        const value2 = l2 ? l2.val : 0;
        const sum = value1 + value2 + carry;

        preNode.next = new ListNode(sum % 10);
        preNode = preNode.next;
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry) {
        preNode.next = new ListNode(carry);
    }

    return preHead.next;
}

module.exports = addTwoNumbers;
