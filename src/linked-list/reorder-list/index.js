/*
 * 143. Reorder List
 *
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4]
 * Output: [1, 4, 2, 3]
 *
 * Example 2:
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [1, 5, 2, 4, 3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5 * 10e4]
 * 1 <= node.val <= 1000
 *
 * https://leetcode.com/problems/reorder-list/
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
 * 利用快慢指针得到链表的中间位置
 * 然后把后半部分反转，再按规则把两个链表合并
 *
 * Time Complexity: O(n) = while 循环次数 O(n / 2) + reverseList O(n / 2) + 插入 O(n / 2)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {ListNode} head
 */
function reorderList(head) {
    if (head.next === null) {
        return head;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let nodeA = head;
    let nodeB = reverseList(slow.next);

    slow.next = null;
    while (nodeA && nodeB) {
        const nextA = nodeA.next;
        const nextB = nodeB.next;

        nodeA.next = nodeB;
        nodeB.next = nextA;
        nodeB = nextB;
        nodeA = nextA;
    }

    return head;
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
    let preNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = preNode;
        preNode = head;
        head = nextNode;
    }

    return preNode;
}

module.exports = reorderList;
