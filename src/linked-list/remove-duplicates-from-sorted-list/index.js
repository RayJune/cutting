/*
 * 83. Remove Duplicates from Sorted List
 *
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Example 1:
 * Input: head = [1, 1, 2]
 * Output: [1, 2]
 *
 * Example 2:
 * Input: head = [1, 1, 2, 3, 3]
 * Output: [1, 2, 3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 遍历
 *
 * Time Complexity: O(n) = while 循环遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 代表链表中的节点数
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function deleteDuplicates(head) {
    let node = head;

    while (node) {
        while (node.next && node.val === node.next.val) {
            node.next = node.next.next;
        }
        node = node.next;
    }

    return head;
}

module.exports = deleteDuplicates;
