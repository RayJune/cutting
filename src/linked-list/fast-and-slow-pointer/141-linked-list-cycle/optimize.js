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
 * The number of the nodes in the list is in the range [0, 10 ** 4].
 * (-10) ** 5 <= Node.val <= 10 ** 5
 * pos is -1 or a valid index in the linked-list.
 *
 * https://leetcode.com/problems/linked-list-cycle/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Fast and Slow Pointer
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 head 作为头结点的链表长度
 *
 * @param {ListNode} head
 * @returns {Boolean}
 */
function hasCycle(head) {
    if (head === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

export default hasCycle;
