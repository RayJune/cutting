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
 * 先找到两个链表的长度，再对位相加反转组成新链表，再边处理新链表的进位边反转
 *
 * Time Complexity: O(max(m, n)) = 遍历次数
 * Space complexity: O(max(m, n)) = 返回值链表的节点数
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别是 l1 和 l2 的节点数
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let node = reverseAddWithoutCarry(l1, l2);
    let head = null;
    let carry = 0;

    while (node) {
        carry += node.val;
        head = new ListNode(carry % 10, head);
        carry = Math.floor(carry / 10);
        node = node.next;
    }
    if (carry) {
        head = new ListNode(carry, head);
    }

    return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function reverseAddWithoutCarry(l1, l2) {
    let {m, n} = getListsNum(l1, l2);
    let head = null;

    while (m || n) {
        let value = 0;

        if (m >= n) {
            value += l1.val;
            l1 = l1.next;
            m -= 1;
        }
        if (m < n) {
            value += l2.val;
            l2 = l2.next;
            n -= 1;
        }
        head = new ListNode(value, head);
    }

    return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {{m: number, n: number}}
 */
function getListsNum(l1, l2) {
    let m = 0;
    let n = 0;

    while (l1 || l2) {
        if (l1) {
            m += 1;
            l1 = l1.next;
        }
        if (l2) {
            n += 1;
            l2 = l2.next;
        }
    }

    return {
        m,
        n
    };
}

module.exports = addTwoNumbers;
