/*
 * 86. Partition List
 *
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * Example 1:
 * Input: head = [1, 4, 3, 2, 5, 2], x = 3
 * Output: [1, 2, 2, 4, 3, 5]
 *
 * Example 2:
 * Input: head = [2, 1], x = 2
 * Output: [1, 2]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 200].
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 *
 * https://leetcode.com/problems/partition-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Two Pointers
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    const preHead1 = new ListNode(-1);
    const preHead2 = new ListNode(-1);
    let prevNode1 = preHead1;
    let prevNode2 = preHead2;

    while (head) {
        if (head.val < x) {
            prevNode1.next = head;
            prevNode1 = prevNode1.next;
        } else {
            prevNode2.next = head;
            prevNode2 = prevNode2.next;
        }
        head = head.next;
    }
    prevNode1.next = preHead2.next;
    prevNode2.next = null;

    return preHead1.next;
}

module.exports = partition;
