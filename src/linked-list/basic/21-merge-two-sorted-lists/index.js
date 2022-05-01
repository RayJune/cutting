/*
 * 21. Merge Two Sorted Lists
 *
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
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Iteration
 *
 * Time Complexity: O(m + n) = while 循环次数
 * Space complexity: O(m + n) = 新链表的长度
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别为 l1 l2 两个链表的长度
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    const preHead = new ListNode(-1);
    let node = preHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    node.next = l1 ? l1 : l2;

    return preHead.next;
}

module.exports = mergeTwoLists;
