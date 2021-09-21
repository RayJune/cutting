/*
 * 141. Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
 * Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1:
 * Input: head = [3, 2, 0, -4], pos = 1
 * Output: true
 *
 * Example 2:
 * Input: head = [1, 2], pos = 0
 * Output: true
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 *
 * Constraints:
 *
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * pos is -1 or a valid index in the linked-list.
 *
 * https://leetcode.com/problems/linked-list-cycle/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 用 map 来做
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(n) = map 所占空间
 * Auxiliary complexity: O(n) = map 所占空间
 * 其中 n 代表链表中的节点数
 *
 * @param {ListNode} head
 * @returns {Boolean} has cycle or not
 */
function hasCycle(head) {
    const map = new Map();

    while (head) {
        if (map.get(head)) {
            return true;
        }
        map.set(head, true);
        head = head.next;
    }

    return false;
}

module.exports = hasCycle;
