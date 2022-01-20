/*
 * 445. Add Two Numbers II
 *
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
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
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * https://leetcode.com/problems/add-two-numbers-ii/
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
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Stack
 *
 * Time Complexity: O(max(m, n)) = 遍历次数
 * Space complexity: O(m + n) = stack1 和 stack2 的长度 O(m + n) + 返回值链表的节点数 O(max(m, n))
 * Auxiliary complexity: O(m + n) = stack1 和 stack2 的长度
 * 其中 m 和 n 分别是 l1 和 l2 的节点数
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    while (l1 || l2) {
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }

    let head = null;
    let carry = 0;

    while (stack1.length || stack2.length) {
        const value1 = stack1.length ? stack1.pop() : 0;
        const value2 = stack2.length ? stack2.pop() : 0;

        carry += value1 + value2;
        head = new ListNode(carry % 10, head);
        carry = Math.floor(carry / 10);
    }
    if (carry) {
        head = new ListNode(carry, head);
    }

    return head;
}

module.exports = addTwoNumbers;
