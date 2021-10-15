/*
 * 82. Remove Duplicates from Sorted List II
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 3, 4, 4, 5]
 * Output: [1, 2, 5]
 *
 * Example 2:
 * Input: head = [1, 1, 1, 2, 3]
 * Output: [2, 3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 遍历
 *
 * Time Complexity: O(n) = 内外层 while 循环次数之和 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    const preHead = new ListNode(-1, head);
    let preNode = preHead;
    let node = preNode.next;

    while (node && node.next) {
        if (node.val === node.next.val) {
            const value = node.val;

            while (node && node.val === value) {
                node = node.next;
            }
            preNode.next = node;
        } else {
            preNode = node;
            node = node.next;
        }
    }

    return preHead.next;
}

module.exports = deleteDuplicates;
