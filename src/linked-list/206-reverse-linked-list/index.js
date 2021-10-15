/*
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 *
 * Example 2:
 * Input: head = [1, 2]
 * Output: [2, 1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is the range [0, 5000]
 * -5000 <= Node.val <= 5000
 *
 * https://leetcode.com/problems/reverse-linked-list/
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
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 用 array 来做
 *
 * Time Complexity: O(n) = while 循环次数 O(n) + for 循环次数 (n)
 * Space complexity: O(n) = stack 长度 O(n) + 新的反转链表长度 O(n)
 * Auxiliary complexity: O(n) = stack 长度 O(n)
 * 其中 n 代表输入参数 head 链表的长度
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
    const stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    return buildReverseListNode(stack);
}

/**
 *
 * @param {Array} arr
 * @returns {ListNode}
 */
function buildReverseListNode(arr) {
    const preHead = new ListNode();
    let preNode = preHead;

    for (let i = arr.length - 1; i >= 0; i--) {
        preNode.next = new ListNode(arr[i]);
        preNode = preNode.next;
    }

    return preHead.next;
}

module.exports = reverseList;
