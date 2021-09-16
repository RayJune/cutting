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
 * 在待反转区间里，每遍历到一个节点，让这个新节点来到反转部分的起始位置
 *
 * Time Complexity: O(n) = 两个 for 循环加一起的最大次数是 O(n)，即 left 为 1， right 为末尾时
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
    const preHead = new ListNode(-1, head);
    let preNode = preHead;

    for (let i = 0; i < left - 1; i++) {
        preNode = preNode.next;
    }

    let leftNode = preNode.next;

    for (let i = 0; i < right - left; i++) {
        const nextNode = leftNode.next;

        leftNode.next = nextNode.next;
        nextNode.next = preNode.next;
        preNode.next = nextNode;
    }

    return preHead.next;
}

module.exports = reverseBetween;
