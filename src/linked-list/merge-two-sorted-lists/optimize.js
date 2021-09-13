/*
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists..
 *
 * Example 1:
 * Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
 * Output: [1, 1, 2, 3, 4, 4]
 *
 * Example 2:
 * Input: l1 = [], l2 = []
 * Output: []
 *
 * Example 3:
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 *
 * Constraints:
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/
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
 * Iteration
 *
 * Time Complexity: O(n + m) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function mergeTwoLists(l1, l2) {
    const preHead = new ListNode(-1, null);
    let prevNode = preHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prevNode.next = l1;
            l1 = l1.next;
        } else {
            prevNode.next = l2;
            l2 = l2.next;
        }
        prevNode = prevNode.next;
    }
    prevNode.next = l1 === null ? l2 : l1;

    return preHead.next;
}

module.exports = mergeTwoLists;
