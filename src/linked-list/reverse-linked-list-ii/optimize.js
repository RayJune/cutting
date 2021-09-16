/*
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
 * Output: [1, 4, 3, 2, 5]
 *
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 * Constraints:
 *
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/
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
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 把中间的链表反转，再更改反转链表首尾的指向，注意细节的处理

 * Time Complexity: O(n) = while 循环以及反转链表的最大可能值是 n 次
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * n 代表输入参数 head 链表的长度
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
function reverseBetween(head, left, right) {
    let preNode = null;
    let targetHead = head;
    let targetTail = head;
    // 先遍历找到要待反转区间之前前的节点和之后的节点，以备后面更改指向使用
    // 同时也要找到待反转区间的头节点和尾节点，方便后续的反转以及反转后更改指向的处理
    for (let i = 1, node = head; i < right; i++) {
        const nextNode = node.next;

        if (i === left - 1) {
            preNode = node;
            preNode.next = null;
            targetHead = nextNode;
            targetTail = targetHead;
        }
        if (i > left - 1) {
            targetTail = targetTail.next;
        }
        node = nextNode;
    }
    // 开始处理反转相关的逻辑
    const afterNode = targetTail.next;

    targetTail.next = null;
    reverseLinkedList(targetHead);
    // 反转完成后，原来的 targetHead 就成了尾部节点，targetTail 成为头部节点
    if (preNode) {
        preNode.next = targetTail;
    } else {
        head = targetTail;
    }
    targetHead.next = afterNode;

    return head;
}

/**
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseLinkedList(head) {
    let preNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = preNode;
        preNode = head;
        head = nextNode;
    }

    return preNode;
}

module.exports = reverseBetween;
