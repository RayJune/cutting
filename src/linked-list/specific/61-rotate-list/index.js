/*
 * 61. Rotate List
 *
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], k = 2
 * Output: [4, 5, 1, 2, 3]
 *
 * Example 2:
 * Input: head = [0, 1, 2], k = 4
 * Output: [2, 0, 1]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10 ** 9
 *
 * https://leetcode.com/problems/rotate-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 闭合为环
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode}
 */
function rotateRight(head, k) {
    if (k === 0 || head === null || head.next === null) {
        return head;
    }

    let n = 1;
    let node = head;

    while (node.next) {
        node = node.next;
        n += 1;
    }

    let i = n - k % n;

    if (i === n) {
        return head;
    }
    node.next = head;
    while (i) {
        node = node.next;
        i -= 1;
    }

    const newHead = node.next;

    node.next = null;

    return newHead;
}

module.exports = rotateRight;
