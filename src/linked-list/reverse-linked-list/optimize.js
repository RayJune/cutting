/*
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
 * 把当前 node 的 next 指向它的前一个 node
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 代表输入参数 head 链表的长度
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
    let preNode = null;
    let node = head;

    while (node) {
        const nextNode = node.next;

        node.next = preNode;
        preNode = node;
        node = nextNode;
    }

    return preNode;
}

module.exports = reverseList;
