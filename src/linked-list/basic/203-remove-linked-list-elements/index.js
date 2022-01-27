/*
 * 203. Remove Linked List Elements
 *
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * Example 1:
 * Input: head = [1, 2, 6, 3, 4, 5, 6], val = 6
 * Output: [1, 2, 3, 4, 5]
 *
 * Example 2:
 * Input: head = [], val = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [7, 7, 7, 7], val = 7
 * Output: []
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 10 ** 4].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 *
 * https://leetcode.com/problems/remove-linked-list-elements/
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
 * Time Complexity: O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 head 作为头结点的链表长度
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    const preHead = new ListNode(-1, head);
    let prevNode = preHead;

    while (prevNode.next) {
        if (prevNode.next.val === val) {
            prevNode.next = prevNode.next.next;
        } else {
            prevNode = prevNode.next;
        }
    }

    return preHead.next;
}

module.exports = removeElements;
