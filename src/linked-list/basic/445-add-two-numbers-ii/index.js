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
 * 先分别把两个链表反转过来，再相加
 *
 * Time Complexity: O(m + n) = reverse 操作 O(m + n) + while 循环次数 O(max(m, n))
 * Space complexity: O(max(m, n)) = 返回值链表的节点数
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别是 l1 和 l2 的节点数
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let reversedL1 = reverseList(l1);
    let reversedL2 = reverseList(l2);
    let head = null;
    let carry = 0;

    while (reversedL1 || reversedL2) {
        const value1 = reversedL1 ? reversedL1.val : 0;
        const value2 = reversedL2 ? reversedL2.val : 0;

        carry += value1 + value2;
        head = new ListNode(carry % 10, head);
        carry = Math.floor(carry / 10);
        if (reversedL1) {
            reversedL1 = reversedL1.next;
        }
        if (reversedL2) {
            reversedL2 = reversedL2.next;
        }
    }
    if (carry) {
        head = new ListNode(carry, head);
    }

    return head;
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
    let prevNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }

    return prevNode;
}

module.exports = addTwoNumbers;
