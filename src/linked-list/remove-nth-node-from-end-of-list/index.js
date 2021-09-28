/*
 * 19. Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], n = 2
 * Output: [1, 2, 3, 5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1, 2], n = 1
 * Output: [1]
 *
 * Constraints:
 *
 * The number of node in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * 快慢指针，用一次循环来解决
 *
 * Time Complexity: O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
function removeNthFromEnd(head, n) {
    const preHead = new ListNode(-1, head);
    let gap = 1;
    let fast = head;
    let slow = preHead;

    while (fast) {
        if (gap === n) {
            if (fast.next === null) {
                const nextNode = slow.next;

                slow.next = slow.next.next;
                nextNode.next = null;
            } else {
                slow = slow.next;
            }
        } else {
            gap += 1;
        }
        fast = fast.next;
    }

    return preHead.next;
}

module.exports = removeNthFromEnd;
