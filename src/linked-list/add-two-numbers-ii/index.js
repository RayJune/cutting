/*
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

const ListNode = require('./list-node');

/**
 * 用栈的思想来做
 *
 * Time Complexity: O(m + n) = while 循环次数
 * Space complexity: O(m + n) = 创建的 stack 的长度 + 新链表长度 O(max(m + n))
 * Auxiliary complexity: O(m + n) = 创建的 stack1 和 stack2 的长度
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = buildStack(l1);
    const stack2 = buildStack(l2);
    const newStack = [];
    let i = 0;
    let carry = 0;

    while (stack1[i] !== undefined || stack2[i] !== undefined) {
        const value1 = stack1[i] === undefined ? 0 : stack1[i];
        const value2 = stack2[i] === undefined ? 0 : stack2[i];
        const sum = value1 + value2 + carry;

        newStack.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        i += 1;
    }
    if (carry) {
        newStack.unshift(carry);
    }

    return buildListNode(newStack);
}

/**
 *
 * @param {ListNode} listNode
 * @returns {Array}
 */
function buildStack(listNode) {
    const stack = [];

    while (listNode) {
        stack.unshift(listNode.val);
        listNode = listNode.next;
    }

    return stack;
}

/**
 *
 * @param {Array} arr
 * @returns {ListNode}
 */
function buildListNode(arr) {
    const preHead = new ListNode();
    let preNode = preHead;

    arr.forEach(num => {
        preNode.next = new ListNode(num);
        preNode = preNode.next;
    });

    return preHead.next;
}

module.exports = addTwoNumbers;
