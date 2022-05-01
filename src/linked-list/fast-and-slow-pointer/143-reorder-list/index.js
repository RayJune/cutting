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
 * The number of nodes in the list is in the range [1, 5 * 10 ** 4]
 * 1 <= node.val <= 1000
 *
 * https://leetcode.com/problems/reorder-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 用快慢指针找到 preMid, 把链表后半部分分隔后反转，再按规则把两个链表合并
 *
 * Time Complexity: O(n) = getPreMid / reverseList / while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function reorderList(head) {
    if (head.next === null || head.next.next === null) {
        return head;
    }

    const preMid = getPreMid(head);
    const mid = preMid.next;
    let nodeA = head;
    let nodeB = reverseList(mid);

    preMid.next = null;
    while (nodeA && nodeB) {
        const nextA = nodeA.next;
        const nextB = nodeB.next;

        nodeA.next = nodeB;
        nodeB.next = nextA;
        nodeA = nextA;
        nodeB = nextB;
    }

    return head;
}

/**
 * 返回中间节点的前一个节点，如果有两个中间节点，返回第一个中间节点
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function getPreMid(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prevNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }

    return prevNode;
}

module.exports = reorderList;
