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
 *
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
 * 先分别把两个链表反转过来，再相加，注意相加构成新链表的时候，把新的 node 指向头部
 *
 * Time Complexity: O(m + n) = 反转 l1、l2 所用的时间 O(m + n) + 两个链表相加的时间 O(max(m + n))
 * Space complexity: O(max(m + n)) = 输出值所占的空间
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let reversedL1 = reverseListNode(l1);
    let reversedL2 = reverseListNode(l2);
    const preHead = new ListNode();
    let secondNode = null;
    let carry = 0;

    while (reversedL1 || reversedL2) {
        const value1 = reversedL1 ? reversedL1.val : 0;
        const value2 = reversedL2 ? reversedL2.val : 0;
        const sum = value1 + value2 + carry;

        preHead.next = new ListNode(sum % 10, secondNode);
        secondNode = preHead.next;
        carry = Math.floor(sum / 10);
        if (reversedL1) {
            reversedL1 = reversedL1.next;
        }
        if (reversedL2) {
            reversedL2 = reversedL2.next;
        }
    }
    if (carry) {
        preHead.next = new ListNode(carry, secondNode)
    }

    return preHead.next;
}

/**
 *
 * @param {ListNode} list
 * @returns {ListNode}
 */
function reverseListNode(list) {
    let preNode = null;

    while (list) {
        const nextNode = list.next;

        list.next = preNode;
        preNode = list;
        list = nextNode;
    }

    return preNode;
}

module.exports = addTwoNumbers;
