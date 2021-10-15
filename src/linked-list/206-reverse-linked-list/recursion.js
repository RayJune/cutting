/*
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 *
 * Example 2:
 * Input: head = [1, 2]
 * Output: [2, 1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is the range [0, 5000]
 * -5000 <= Node.val <= 5000
 *
 * https://leetcode.com/problems/reverse-linked-list/
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
 * 用递归来做，注意递归是反向工作的逻辑，从链表末尾向前执行处理逻辑
 *
 * Time Complexity: O(n) = reverseList 函数执行次数
 * Space complexity: O(n) = reverseList 函数执行栈深度
 * Auxiliary complexity: O(n) = reverseList 函数执行栈深度
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

module.exports = reverseList;
