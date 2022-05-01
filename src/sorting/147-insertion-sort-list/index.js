/*
 * 147. Insertion Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * The steps of the insertion sort algorithm:
 *
 * Insertion sort iterates, consuming one input element each repetition and growing a lastSorted output list.
 * At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the lastSorted list and inserts it there.
 * It repeats until no input elements remain.
 *
 * Example 1:
 * Input: head = [4, 2, 1, 3]
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: head = [-1, 5, 3, 4, 0]
 * Output: [-1, 0, 3, 4, 5]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 *
 * https://leetcode.com/problems/insertion-sort-list/
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
 * Insertion Sort
 *
 * Time Complexity: O(n ** 2) = 外层 while 循环次数 O(n) * 内层 while 循环次数 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const preHead = new ListNode(-1, head);
    let lastSorted = head;
    let node = head.next;

    while (node) {
        if (lastSorted.val > node.val) {
            let prevNode = preHead;

            while (prevNode.next.val <= node.val) {
                prevNode = prevNode.next;
            }
            lastSorted.next = node.next;
            node.next = prevNode.next;
            prevNode.next = node;
        } else {
            lastSorted = lastSorted.next;
        }
        node = lastSorted.next;
    }

    return preHead.next;
}

module.exports = insertionSortList;
