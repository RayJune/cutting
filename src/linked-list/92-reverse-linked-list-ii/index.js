/*
 * 92. Reverse Linked List II
 *
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
 * Output: [1, 4, 3, 2, 5]
 *
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 * Constraints:
 *
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/
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
 * 把中间的链表反转，再更改反转链表首尾的指向
 *
 * Time Complexity: O(n) = 遍历次数 O(n) + reverseLinkedList 遍历次数 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 head 作为头节点的链表的节点数
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
function reverseBetween(head, left, right) {
    const preHead = new ListNode(-1, head);
    let prevNode = preHead;

    for (let i = 0; i < left - 1; i++) {
        prevNode = prevNode.next;
    }

    const leftNode = prevNode.next;
    let rightNode = prevNode;

    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    const afterNode = rightNode.next;

    prevNode.next = null;
    rightNode.next = null;
    reverseLinkedList(leftNode);
    leftNode.next = afterNode;
    prevNode.next = rightNode;

    return preHead.next;
}

/**
 * @param {ListNode} head
 */
function reverseLinkedList(head) {
    let prevNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
}

module.exports = reverseBetween;
